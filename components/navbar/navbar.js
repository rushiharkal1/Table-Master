let navbar = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <!-- Navbar Brand -->
            <a class="navbar-brand fw-semibold" href="../../pages/home/home.html">Table Master</a>

            <!-- Navbar Toggle -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar Nav Links (Navbar Buttons) -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" id="home-link" href="../../pages/home/home.html">Home</a>
                    </li>

                     <li class="nav-item">
                        <a class="nav-link" id="learn-link" href="../../pages/learn/learn.html">Learn</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" id="practice-link" href="../../pages/practice_menu/practice_menu.html">Practice</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" id="about-link" href="../../pages/about/about.html">About Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

document.addEventListener("DOMContentLoaded", function () {
    let navbarContainer = document.getElementById("navbar-container");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbar;

        // Get the current page filename (e.g., home.html)
        const path = window.location.pathname.toLowerCase();

        // Clear active classes from all nav links
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        
        // Match and highlight based on page path
        if (path.includes("home.html")) {
            document.getElementById("home-link").classList.add("active");
        } else if (path.includes("practice_menu.html")) {
            document.getElementById("practice-link").classList.add("active");
        } else if (path.includes("about.html")) {
            document.getElementById("about-link").classList.add("active");
        } else if (path.includes("learn.html")) {
            document.getElementById("learn-link").classList.add("active");
        }
    } else {
        console.error("Navbar container not found!");
    }
});
