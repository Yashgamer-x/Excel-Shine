document.addEventListener("DOMContentLoaded", function () {
  const toggleCheckbox = document.querySelector("#menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle menu visibility when checkbox changes
  toggleCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
      navMenu.classList.add("active");
    } else {
      navMenu.classList.remove("active");
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    const label = document.querySelector('label[for="menu-toggle"]');

    const clickedInsideToggle = toggleCheckbox.contains(event.target);
    const clickedInsideLabel = label && label.contains(event.target);
    const clickedInsideMenu = navMenu.contains(event.target);

    if (!clickedInsideToggle && !clickedInsideLabel && !clickedInsideMenu) {
      toggleCheckbox.checked = false;
      navMenu.classList.remove("active");
    }
  });
});