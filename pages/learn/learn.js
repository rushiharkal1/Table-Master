// Handle the "Submit" button to show the table and hide the input form
document.getElementById("submit-btn").onclick = () => {
    const inputContainer = document.getElementById("input-container");
    const tableContainer = document.getElementById("table-container");
    const tableContent = document.getElementById("table-content");
    const tableNumber = parseInt(document.getElementById("table-input").value);

    // Validate the input
    if (tableNumber >= 1 && tableNumber <= 30) {
        // Hide input form and show the table container
        inputContainer.classList.add("hidden");
        tableContainer.classList.remove("hidden");

        // Populate the table content
        tableContent.innerHTML = ""; // Clear any previous table content
        for (let i = 1; i <= 10; i++) {
            const row = document.createElement("tr");
            const multiplication = document.createElement("td");
            const result = document.createElement("td");

            multiplication.innerText = `${tableNumber} x ${i}`;
            result.innerText = tableNumber * i;

            row.appendChild(multiplication);
            row.appendChild(result);
            tableContent.appendChild(row);
        }
    } else {
        alert("Please enter a valid number between 1 and 30.");
    }
};

// Handle the "Close" button to hide the table and show the input form
document.getElementById("close-btn").onclick = () => {
    const inputContainer = document.getElementById("input-container");
    const tableContainer = document.getElementById("table-container");

    // Hide the table container and show the input form
    tableContainer.classList.add("hidden");
    inputContainer.classList.remove("hidden");

    // Clear the input field value
    document.getElementById("table-input").value = "";
};
