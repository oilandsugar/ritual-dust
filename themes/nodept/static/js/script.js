jQuery(function($) {
  function setStyleElements(theme) {
    document.documentElement.style.setProperty("--backColor", theme.backColor);
    document.documentElement.style.setProperty("--textColor", theme.textColor);
    document.documentElement.style.setProperty("--linkColor", theme.linkColor);
    document.documentElement.style.setProperty("--grey", theme.grey);
    document.documentElement.style.setProperty(
      "--cardBackColor",
      theme.cardBackColor
    );
  }

  function setLocalStorageStyle(theme) {
    localStorage.setItem("userBackColor", theme.backColor);
    localStorage.setItem("userTextColor", theme.textColor);
    localStorage.setItem("userLinkColor", theme.linkColor);
    localStorage.setItem("userGrey", theme.grey);
    localStorage.setItem("userCardBackColor", theme.cardBackColor);
  }

  $(document).ready(function() {
    var themeToggle = $("#theme-toggle");

    var light_theme = {
      backColor: "#fff",
      textColor: "#000",
      linkColor: "#000",
      grey: "#d4d4d4",
      cardBackColor: "#fff"
    };

    var dark_theme = {
      backColor: "#1e1c1f",
      textColor: "#fff",
      linkColor: "#fff",
      grey: "#000",
      cardBackColor: "#4e4e4e"
    };

    // check which theme is saved in local storage
    if (localStorage.getItem("userBackColor") == "#fff") {
      themeToggle.removeClass("dark").addClass("light");
      themeToggle.html('<i class="fas fa-moon"></i>Dark mode');
    } else if (localStorage.getItem("userBackColor") == "#1e1c1f") {
      themeToggle.removeClass("light").addClass("dark");
      themeToggle.html('<i class="fas fa-sun"></i>Light mode');
    }

    // Yank theme color from localStorage and use it
    document.documentElement.style.setProperty(
      "--backColor",
      localStorage.getItem("userBackColor")
    );
    document.documentElement.style.setProperty(
      "--textColor",
      localStorage.getItem("userTextColor")
    );
    document.documentElement.style.setProperty(
      "--linkColor",
      localStorage.getItem("userLinkColor")
    );
    document.documentElement.style.setProperty(
      "--grey",
      localStorage.getItem("userGrey")
    );
    document.documentElement.style.setProperty(
      "--cardBackColor",
      localStorage.getItem("userCardBackColor")
    );

    // toggle theme and save in local storage

    themeToggle.click(function(e) {
      e.preventDefault();
      if ($(this).hasClass("dark")) {
        setStyleElements(light_theme);
        setLocalStorageStyle(light_theme);
        $(this)
          .removeClass("dark")
          .addClass("light");
        $(this).html('<i class="fas fa-moon"></i>Dark mode');
      } else {
        setStyleElements(dark_theme);
        setLocalStorageStyle(dark_theme);
        $(this)
          .removeClass("light")
          .addClass("dark");
        $(this).html('<i class="fas fa-sun"></i>Light mode');
      }
    });

    // ISOTOPE GRID FOR OLD PROJECTS

    var old_projects = $(".old-row");

    old_projects.isotope({
      // options
      itemSelector: ".old-project",
      layoutMode: "fitRows",
      transitionDuration: "0"
    });

    $(".tag").click(function(e) {
      e.preventDefault();
      var filter_value = $(this).data("filter");
      console.log(filter_value);
      old_projects.isotope({ filter: filter_value });
      $(".tag")
        .find("[data-fa-i2svg]")
        .removeClass("fas")
        .addClass("far");
      $(this)
        .find("[data-fa-i2svg]")
        .addClass("fas");
    });
  });
});
