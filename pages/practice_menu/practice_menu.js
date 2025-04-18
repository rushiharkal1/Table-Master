// practice_page.js
// Generate Buttons for Tables or Multiples
function generateButtons(containerId, start, end) {
    const container = document.getElementById(containerId);
    for (let i = start; i <= end; i++) {
      // Create Bootstrap column and button
      const colWrapper = document.createElement("div");
      colWrapper.className = "col mb-2 mx-auto"; // Bootstrap column for spacing

      const button = document.createElement("button");
      button.className = "btn btn-outline-secondary";
      button.style = "width: 50px; height: 40px;";
      button.innerText = i;
      button.onclick = () => toggleSelection(button);

      colWrapper.appendChild(button);
      container.appendChild(colWrapper);
    }
}

// Toggle button selection
function toggleSelection(button) {
    button.classList.toggle("selected");
}

// Handle the "Start Practice" button
function startPractice() {
    const selectedTables = [];
    const selectedMultiples = [];
    const tablesSection = document.getElementById("tables-buttons");
    const multiplesSection = document.getElementById("multiples-buttons");

    document.querySelectorAll("#tables-buttons .selected").forEach((btn) =>
      selectedTables.push(btn.innerText)
    );
    document.querySelectorAll("#multiples-buttons .selected").forEach((btn) =>
      selectedMultiples.push(btn.innerText)
    );

    // Reset any previous error styling
    tablesSection.classList.remove("error");
    multiplesSection.classList.remove("error");

    if (selectedTables.length > 0 && selectedMultiples.length > 0) {
        alert(
            `Starting practice with Tables: ${selectedTables.join(", ")} and Multiples: ${selectedMultiples.join(", ")}`
        );

        localStorage.setItem("tables", JSON.stringify(selectedTables));
        localStorage.setItem("multiples", JSON.stringify(selectedMultiples));
        window.location.href = "../practice/practice.html"; // Redirect to test page
     
    } else {
        // Highlight the problematic section(s)
        if (selectedTables.length === 0) {
            tablesSection.classList.add("error"); // Add red border to tables section
        }
        if (selectedMultiples.length === 0) {
            multiplesSection.classList.add("error"); // Add red border to multiples section
        }
        alert("Please select at least one table and one multiple.");
    }
}

// Generate Buttons for Tables (1 to 30) and Multiples (1 to 10)
generateButtons("tables-buttons", 1, 30); // Tables
generateButtons("multiples-buttons", 1, 10); // Multiples