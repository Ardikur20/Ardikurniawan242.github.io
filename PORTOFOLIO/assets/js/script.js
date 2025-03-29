const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

// Navlist
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navlist a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
        console.log(current);
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});

var recentModal = "";

document.querySelectorAll(".btn-modal").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var modalId = this.getAttribute("data-modal-id");
    recentModal = modalId;
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflowY = "hidden";
  });
});

document.querySelectorAll(".close-modal").forEach(function (closeBtn) {
  closeBtn.addEventListener("click", function () {
    document.getElementById(recentModal).style.display = "none";
    document.body.style.overflowY = "auto";
  });
});
