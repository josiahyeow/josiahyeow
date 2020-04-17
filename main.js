var app = new Vue({
  el: "#app",
  data: {
    linkedIn: "https://www.linkedin.com/in/josiah-yeow/",
    github: "https://github.com/josiahyeow",
    email: "jsiahyeow@gmail.com",
    apps: [
      {
        name: "COVID-19 Dashboard",
        image: "./images/covid-19-dashboard-icon.png",
        url: "https://josiahyeow.github.io/covid-19-dashboard",
        type: "React",
        desc: "Dashboard for COVID-19 data",
      },

      {
        name: "PocketLint",
        image: "./images/pocketlint-icon.png",
        url: "https://github.com/josiahyeow/PocketLint",
        type: "iOS",
        desc: "Image Scanner App",
      },
      {
        name: "Flush",
        image: "./images/flush-icon.png",
        url: "https://devpost.com/software/flush-d69mqj",
        type: "Android",
        desc: "Task manager App",
      },
    ],
    designs: [
      {
        name: "Property Search",
        image: "./images/property-screens.png",
        thumb: "./images/thumbs/property-screens-thumb.png",
        desc: "",
      },
      {
        name: "Real Estate",
        image: "./images/realestate-screens.png",
        thumb: "./images/thumbs/realestate-screens-thumb.png",
        desc: "",
      },
      {
        name: "Flush Design",
        image: "./images/flush-screens.png",
        thumb: "./images/thumbs/flush-screens-thumb.png",
        desc: "",
      },
    ],
  },
  computed: {
    age: function () {
      var today = new Date();
      var birthDate = new Date("1996/09/27");
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
});
$(document).ready(function () {
  $(".fadeInImage").hide();
});

$(window).on("load", function () {
  $(".fadeInImage").each(function (i) {
    $(this)
      .delay((i + 1) * 100)
      .fadeIn();
  });
});
var lightbox = new SimpleLightbox(".designs-grid a", {});
