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

function toggleSeatButton(button) {
  button.classList.toggle("bg-gray-300");
  button.classList.toggle("bg-green-500");
  button.classList.toggle("text-white");
}

for (const singleSeat of seat) {
  singleSeat.addEventListener("click", () => {
   
    toggleSeatButton(singleSeat);

    if (singleSeat.classList.contains("bg-green-500")) {
      totalSeatCount--;
       if (maxSelectedSeat < 4) {
         maxSelectedSeat++;

       }else{
        alert("savdhan");
        return;
       }
    } else {
      totalSeatCount++;
      maxSelectedSeat--;
    }
    seatCount.innerText = totalSeatCount;
    console.log(maxSelectedSeat);
  });
}











function convertedValue(id) {
  const value = document.getElementById(id).innerText;
  const convertedSeat = parseInt(value);
  return convertedSeat;
}
