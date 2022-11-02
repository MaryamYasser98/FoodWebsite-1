let bar = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let links = document.querySelectorAll(".navbar a");




bar.addEventListener("click", () => {
  bar.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});







// loader
function loading() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
window.onload = function () {
  setInterval(loading, 3000);
};




window.addEventListener("scroll", () => {

  //navbar
  bar.classList.remove("fa-times");
  navbar.classList.remove("active");



  // active link when scroll
  var current = "";

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  }); //end of foreach sections

  links.forEach((li) => {
    li.classList.remove("active");

    if (li.href.includes(current)) {
      li.classList.add("active");
    }
  }); //end of foreach links
  


  //button scroll top
  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
    document.querySelector("header").classList.remove("active");
  }



}); //end of on scroll






// links.forEach((ele) => {
//     ele.addEventListener("click", () => {
//       links.forEach((link) => {
//         link.classList.remove("active");
//       });
//       ele.classList.add("active");
//     }); //end of on click
//   }); //end of forEach




