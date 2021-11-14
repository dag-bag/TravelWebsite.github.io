let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let closeBtn = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
};
searchBtn.addEventListener("click", () => {
  searchBar.classList.remove("fa-search");
  searchBar.classList.add("fa-times");
  searchBar.classList.toggle("active");
});
// media quaries menu bar
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

// Form btn

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

// video buttons
videoBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute('data-src')
    document.querySelector('#video-slider').src = src;
    
  });
});

// var swiper = document.querySelector('.review-slider');

 var swiper = new Swiper(".swiper-container", {

  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints:{
    640:{
      slidesPerView:1,
    },
    768:{
      slidesPerView:2,
    },
    1024:{
      slidesPerView:3,
    },
    

  }
});
var swiper = new Swiper(".brand-slider", {

  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints:{
    450:{
      slidesPerView:2,
    },
    768:{
      slidesPerView:3,
    },
    991
    :{
      slidesPerView:4,
    },
    1024:{
      slidesPerView:5,
    },
    

  }
});


// FOrm CDN


  formcarry({
    form: "Yg_3jcXG1ME",
    // id or the class name of the form element, only form element allowed
    // works with css selectors
    // # <= for id
    // . <= for class
    element: "#my-formcarry",
    extraData: {
      // add whatever you want
      screenSize: `${window.screen.width}x${window.screen.height}`,
      language: window.navigator.language,
    },
    // Success callback, you can show alert messages
    // or redirect the user in this function
    onSuccess: function(response){
      alert(response)
    },
    // Error callback, a good place to show errors 🗿
    onError: function(error){
      alert(error)
    }
  });

    
