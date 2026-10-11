document.addEventListener("DOMContentLoaded", () => {
    // 1. Welcome Screen Auto Hide
    const welcomeScreen = document.getElementById("welcomeScreen");
    if (welcomeScreen) {
        setTimeout(() => {
            welcomeScreen.classList.add("hide");
        }, 1500);
    }

    // 2. Dark / Light Theme Toggle
    const themeButton = document.getElementById("themeButton");
    if (themeButton) {
        themeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            if (document.body.classList.contains("dark")) {
                themeButton.textContent = "☀";
            } else {
                themeButton.textContent = "☾";
            }
        });
    }

    // 3. Smooth Scroll dengan kompensasi tinggi Navbar
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId !== "#") {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();

                    const navbarHeight = document.querySelector(".navbar").offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});