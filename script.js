// Function to find combinations that sum to the target
function findCombinations(target, numbers) {
  const results = [];

  function backtrack(remaining, start, path) {
    if (remaining === 0) {
      results.push([...path]); // Found a valid combination
      return;
    } else if (remaining < 0) {
      return; // Exceeded the target, no need to continue
    }

    for (let i = start; i < numbers.length; i++) {
      path.push(numbers[i]); // Choose the current number
      backtrack(remaining - numbers[i], i + 1, path); // Explore further with the chosen number
      path.pop(); // Backtrack to explore other possibilities
    }
  }

  backtrack(target, 0, []);
  return results;
}

// Event listener for the "Find Combinations" button
document.addEventListener("DOMContentLoaded", function () {
  const findCombinationsButton = document.getElementById("findCombinations");
  const resultsContainer = document.getElementById("results");

  findCombinationsButton.addEventListener("click", function () {
    const target = parseInt(document.getElementById("target").value, 10);
    const numbers = document
      .getElementById("numbers")
      .value.split(",")
      .map(Number);

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Find combinations
    const combinations = findCombinations(target, numbers);

    // Display results
    if (combinations.length > 0) {
      combinations.forEach((combination) => {
        const listItem = document.createElement("li");
        listItem.textContent = combination.join(" + ");
        resultsContainer.appendChild(listItem);
      });
    } else {
      resultsContainer.textContent = "No combinations found";
    }
  });
});
