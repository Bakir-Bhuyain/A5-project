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




const seatsContainer = document.getElementById("seats-containers");

seatsContainer.addEventListener("click", function (event) {
  // Check if the clicked element is a <button> and has the 'seat-btn' class
  if (
    event.target.tagName === "BUTTON" &&
    event.target.classList.contains("seat-btn")
  ) {
    event.target.style.backgroundColor = "#1DD100";
    event.target.style.color = "";
  }
});




function convertedValue(id) {
  const value = document.getElementById(id).innerText;
  const convertedSeat = parseInt(value);
  return convertedSeat;
}
