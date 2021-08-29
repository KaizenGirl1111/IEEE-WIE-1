const hamburger = () => {
  const navLinks = document.querySelectorAll(".nav-links li");

  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    
  });
};

hamburger();
