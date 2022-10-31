$(document).ready(function () {
  $(window).on("load", function () {
    $(".loader-style").hide();
  });

  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  var theme = document.getElementById("Theme");
  var hover = document.getElementById("hover");
  var loader = document.getElementById("preloader");
  window.addEventListener("load", function () {
    setTimeout(function () {
      loader.style.display = "none";
    }, 3000);
  });
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    // Theme set to dark.
    theme.setAttribute("href", "assets/css/Dark-Theme.css");
    hover.setAttribute("href", "assets/css/hover-min-dark.css");
  } else {
    // Theme set to light.
    theme.setAttribute("href", "assets/css/Light-Theme.css");
    hover.setAttribute("href", "assets/css/hover-min.css");
  }
});
