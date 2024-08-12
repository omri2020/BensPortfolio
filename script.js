document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(
    ".sidebar__btn, .mobile-menu__nav-btn"
  );
  const sections = document.querySelectorAll("section");
  const mobileMenuButton = document.querySelector(".mobile-menu__button");
  const mobileMenuTitle = document.querySelector(".mobile-menu__title");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get the target section id
      const target = button.getAttribute("data-target");
      const targetName = button.querySelector("span").textContent;
      mobileMenuTitle.textContent = targetName;

      const targetSection = document.getElementById(target);

      // Hide all sections with fade-out effect
      sections.forEach((section) => {
        if (section !== targetSection) {
          section.classList.remove("active");
          section.style.display = "none";
        }
      });

      // Show the target section with fade-in effect
      setTimeout(() => {
        targetSection.style.display = "flex";
        setTimeout(() => {
          targetSection.classList.add("active");
        }, 10);
      }, 10);

      // Hide scrollbar
      document.body.style.overflow = "hidden";
      // Show scrollbar if the target section overflows
      targetSection.addEventListener(
        "transitionend",
        () => {
          if (targetSection.scrollHeight > window.innerHeight) {
            document.body.style.overflow = "";
          }
        },
        { once: true }
      );

      // Close mobile menu if open
      const burger = document.querySelector(".burger input");
      const mobileMenu = document.querySelector(".mobile-menu");
      if (burger && burger.checked) {
        mobileMenu.classList.remove("open");
        burger.checked = false;
      }
    });
  });

  // Optionally, trigger click on the first sidebar button to show the first section by default
  const firstSidebarButton = document.querySelector(".sidebar__btn");
  if (firstSidebarButton) {
    firstSidebarButton.click();
  }

  // Optionally, trigger click on the first mobile menu button to show the first section by default
  const firstMobileMenuButton = document.querySelector(".mobile-menu__nav-btn");
  if (firstMobileMenuButton) {
    firstMobileMenuButton.classList.add("active");
  }

  const burger = document.querySelector(".burger input");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".mobile-menu__close");

  burger.addEventListener("change", () => {
    if (burger.checked) {
      mobileMenu.classList.add("open");
    } else {
      mobileMenu.classList.remove("open");
    }
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    burger.checked = false;
  });
});
