// When the user scrolls the page, execute stickyHeader
window.onscroll = function () {
  //stickyHeader();
  highlightNavigation();
};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  // Get the navbar
  let navbar = document.getElementById("header-section");

  // Get the offset position of the navbar
  let sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  console.log("sticky added to nevbar");
}

function highlightNavigation() {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(
    "#header-section #header #menu ul li a"
  );
  let current = "";
  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = navLi[i];
    }
  }

  navLi.forEach((li) => {
    li.classList.remove("navigation-highlight");
  });
  current.classList.add("navigation-highlight");
}
