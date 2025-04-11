// test_page.js
function retrieveData() {
    const tables = JSON.parse(localStorage.getItem("tables"));
    const multiples = JSON.parse(localStorage.getItem("multiples"));

    console.log("Tables:", tables);
    console.log("Multiples:", multiples);

    // Clear data from localStorage if needed
    localStorage.removeItem("tables");
    localStorage.removeItem("multiples");
  }

retrieveData(); // Call this when the test page loads