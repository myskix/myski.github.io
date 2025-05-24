const tabs = document.querySelectorAll(".skills-tab");
const contents = {
  tech: document.getElementById("tech"),
  tools: document.getElementById("tools"),
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Reset active tab
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Show target grid
    const target = tab.dataset.target;
    for (let key in contents) {
      contents[key].classList.toggle("d-none", key !== target);
    }
  });
});

// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
