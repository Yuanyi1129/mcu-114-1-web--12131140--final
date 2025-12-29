function openMenu() {
  // 切換 mobile menu，使用 navToggle 與 nav__list
  const toggle = document.getElementById("navToggle");
  const navList = document.querySelector(".nav__list");
  if (!toggle || !navList) return;
  navList.classList.toggle("is-active");
}

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 70;
    const sectionId = current.getAttribute("id");
    const link = document.querySelector(
      'header nav a[href="#' + sectionId + '"]'
    );

    if (!link) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollActive);
document.addEventListener("DOMContentLoaded", function () {
  const navToggleEl = document.getElementById("navToggle");
  if (navToggleEl) navToggleEl.addEventListener("click", openMenu);
  scrollActive(); // 初始化 active
});
