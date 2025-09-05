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

const seat = document.querySelectorAll(".allSeats");
let totalSeatCount = convertedValue("seat-count");
let seatCount = document.getElementById("seat-count");
let maxSelectedSeat = 0;

function selectSeat(button) {
  // Select seat if not already selected
  if (!button.classList.contains("bg-green-500")) {
    if (maxSelectedSeat >= 4) {
      alert("You can select maximum 4 seats only.");
      return; // stop here, no selection
    }

    // ✅ Select logic
    button.classList.remove("bg-gray-300");
    button.classList.add("bg-green-500", "text-white");

    totalSeatCount--;
    maxSelectedSeat++;
  } else {
    // ✅ Deselect logic
    button.classList.remove("bg-green-500", "text-white");
    button.classList.add("bg-gray-300");

    totalSeatCount++;
    maxSelectedSeat--;
  }

  // Update counter
  seatCount.innerText = totalSeatCount;
  console.log("Selected Seats:", maxSelectedSeat);
}

for (const singleSeat of seat) {
  singleSeat.addEventListener("click", () => {
    selectSeat(singleSeat);
  });
}












function convertedValue(id) {
  const value = document.getElementById(id).innerText;
  const convertedSeat = parseInt(value);
  return convertedSeat;
}
