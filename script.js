const themeButton = document.getElementById("theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        if (currentTheme === "dark") {

            document.documentElement.removeAttribute("data-theme");
            themeButton.textContent = "🌙";

        } else {

            document.documentElement.setAttribute("data-theme", "dark");
            themeButton.textContent = "☀️";
        }

    });
}
