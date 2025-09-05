document.addEventListener("DOMContentLoaded", function () {
  const fromSection = document.getElementById("scrollToSectionButton");
  const toSection = document.getElementById("seat-selection-section");
  if (fromSection && toSection) {
    fromSection.addEventListener("click", function () {
      toSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});

const seats = document.querySelectorAll(".allSeats");
let seatCount = document.getElementById("seat-count");
let totalSeatCount = convertedValue("seat-count");

let maxSelectedSeat = 0;
const perSeatPrice = 550;

// Price elements
const totalPriceSpan = document.querySelector(".fixedPrice");
const grandTotalSpan = document.querySelector(".grandTotal");

// Coupon input & button
const couponInput = document.querySelector(".couponInsert");
const applyBtn = document.querySelector(".applyButton");

// Selected seats container (empty div)
const selectedSeatsContainer = document.querySelector(".sitsThatWillPurchase");

function selectSeat(button) {
  if (!button.classList.contains("bg-green-500")) {
    if (maxSelectedSeat >= 4) {
      alert("You can select maximum 4 seats only!");
      return;
    }

    button.classList.remove("bg-gray-300");
    button.classList.add("bg-green-500", "text-white");

    totalSeatCount--;
    maxSelectedSeat++;

    // Add row to selected seats container
    addSeatRow(button.innerText);
  } else {
    button.classList.remove("bg-green-500", "text-white");
    button.classList.add("bg-gray-300");

    totalSeatCount++;
    maxSelectedSeat--;

    // Remove row from selected seats container
    removeSeatRow(button.innerText);
  }

  seatCount.innerText = totalSeatCount;
  updatePrice();
}

function updatePrice() {
  const totalPrice = maxSelectedSeat * perSeatPrice;
  totalPriceSpan.innerText = totalPrice;
  grandTotalSpan.innerText = totalPrice; // reset before discount
}

function applyCoupon() {
  const couponCode = couponInput.value.trim().toLowerCase();
  const totalPrice = maxSelectedSeat * perSeatPrice;

  if (maxSelectedSeat < 4) {
    alert("You must select 4 seats to use a coupon!");
    return;
  }

  let discount = 0;

  if (couponCode === "new15") {
    discount = totalPrice * 0.15;
  } else if (couponCode === "couple20") {
    discount = totalPrice * 0.2;
  } else {
    alert("Invalid coupon code!");
    return;
  }

  const grandTotal = totalPrice - discount;
  grandTotalSpan.innerText = grandTotal;
}

// ✅ Add seat row (grid-based)
function addSeatRow(seatName) {
  const row = document.createElement("div");
  row.classList.add("contents"); // important: keeps grid alignment
  row.setAttribute("data-seat", seatName);

  row.innerHTML = `
    <div class="py-1">${seatName}</div>
    <div class="py-1">Economy</div>
    <div class="py-1">${perSeatPrice}</div>
  `;

  selectedSeatsContainer.appendChild(row);
}

// ✅ Remove seat row
function removeSeatRow(seatName) {
  const row = selectedSeatsContainer.querySelector(`[data-seat="${seatName}"]`);
  if (row) {
    selectedSeatsContainer.removeChild(row);
  }
}

// Seat click
for (const seat of seats) {
  seat.addEventListener("click", () => selectSeat(seat));
}

// Coupon apply with Enter key
couponInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    applyCoupon();
  }
});

// Coupon apply with button click
if (applyBtn) {
  applyBtn.addEventListener("click", applyCoupon);
}



















function convertedValue(id) {
  const value = document.getElementById(id).innerText;
  const convertedSeat = parseInt(value);
  return convertedSeat;
}
