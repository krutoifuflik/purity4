document.addEventListener("DOMContentLoaded", function () {
  let countHTML = document.querySelector(".count");

  // Define your elements array
  const elements = [
    { country: "USA", continent: "North America" },
    { country: "Japan", continent: "Asia" },
    { country: "Brazil", continent: "South America" },
  ];

  // Initialize correct count and timer
  let correctCount = 0;
  function updateCount() {
    countHTML.innerText = correctCount;
  }
  updateCount();
  // Add dragstart event listeners to draggable elements
  const draggables = document.querySelectorAll(".draggable");
  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", handleDragStart);
  });

  // Add drop event listener to drop areas
  const dropAreas = document.querySelectorAll(".continent");
  dropAreas.forEach((area) => {
    area.addEventListener("dragover", handleDragOver);
    area.addEventListener("drop", handleDrop);
  });

  // Add reset button event listener
  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", resetGame);

  function handleDragStart(event) {
    event.dataTransfer.setData("text", event.target.dataset.country);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();

    const droppedCountry = event.dataTransfer.getData("text");
    const targetContinent = event.target.dataset.continent;

    // Check if the dropped country belongs to the target continent
    const isCorrectDrop = elements.some(
      (element) =>
        element.country === droppedCountry &&
        element.continent === targetContinent
    );

    if (isCorrectDrop) {
      if (event.target.classList.contains("wrong-drop")) {
        alert("You already placed it incorrect");
        return;
      }
      if (event.target.classList.contains("correct-drop")) {
        alert("You already placed it correct");
        return;
      }
      event.target.classList.add("correct-drop");
      correctCount++;
      updateCount();

      // Check if all elements are correctly placed
      if (correctCount === elements.length) {
        // All correct, display a message or perform any action
        alert("Congratulations! You placed all elements correctly.");
      }
    } else {
      if (event.target.classList.contains("correct-drop")) {
        alert("You already placed it correct");
        return;
      }
      event.target.classList.add("wrong-drop");
    }
  }

  resetButton.addEventListener("click", () => {
    console.log("hi");
    resetGame();
  });
  function resetGame() {
    // Reset correct count

    correctCount = 0;
    updateCount();

    // Remove classes from drop areas
    const dropAreas = document.querySelectorAll(".continent");
    dropAreas.forEach((area) => {
      area.classList.remove("correct-drop", "wrong-drop");
    });

    // Remove classes from draggables
    const draggables = document.querySelectorAll(".draggable");
    draggables.forEach((draggable) => {
      draggable.classList.remove("correct-drop", "wrong-drop");
    });
  }
});
