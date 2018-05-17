jQuery(function($) {
  $(document).ready(function() {
    var themeToggle = $("#theme-toggle")

    // Yank theme color from localStorage and use it.
    console.log(localStorage.getItem("userBackColor"))

    if (localStorage.getItem("userBackColor") == "#fff") {
      themeToggle.removeClass("dark").addClass("light")
      themeToggle.html('<i class="fas fa-moon"></i>Dark mode')
    } else if (localStorage.getItem("userBackColor") == "#1e1c1f") {
      themeToggle.removeClass("light").addClass("dark")
      themeToggle.html('<i class="fas fa-sun"></i>Light mode')
    }

    document.documentElement.style.setProperty("--backColor", localStorage.getItem("userBackColor"))
    document.documentElement.style.setProperty("--textColor", localStorage.getItem("userTextColor"))
    document.documentElement.style.setProperty("--linkColor", localStorage.getItem("userLinkColor"))

    // toggle theme and save in local storage

    var light_theme = {
      backColor: "#fff",
      textColor: "#000",
      linkColor: "#000"
    }

    var dark_theme = {
      backColor: "#1e1c1f",
      textColor: "#fff",
      linkColor: "#fff"
    }

    themeToggle.click(function(e) {
      e.preventDefault()
      if ($(this).hasClass("dark")) {
        document.documentElement.style.setProperty("--backColor", light_theme.backColor)
        document.documentElement.style.setProperty("--textColor", light_theme.textColor)
        document.documentElement.style.setProperty("--linkColor", light_theme.linkColor)
        localStorage.setItem("userBackColor", light_theme.backColor)
        localStorage.setItem("userTextColor", light_theme.textColor)
        localStorage.setItem("userLinkColor", light_theme.linkColor)
        $(this)
          .removeClass("dark")
          .addClass("light")
        $(this).html('<i class="fas fa-moon"></i>Dark mode')
      } else {
        document.documentElement.style.setProperty("--backColor", dark_theme.backColor)
        document.documentElement.style.setProperty("--textColor", dark_theme.textColor)
        document.documentElement.style.setProperty("--linkColor", dark_theme.linkColor)
        localStorage.setItem("userBackColor", dark_theme.backColor)
        localStorage.setItem("userTextColor", dark_theme.textColor)
        localStorage.setItem("userLinkColor", dark_theme.linkColor)
        $(this)
          .removeClass("light")
          .addClass("dark")
        $(this).html('<i class="fas fa-sun"></i>Light mode')
      }
    })

    var old_projects = $(".old-row")

    old_projects.isotope({
      // options
      itemSelector: ".old-project",
      layoutMode: "fitRows",
      transitionDuration: "0"
    })

    $(".tag").click(function(e) {
      e.preventDefault()
      var filter_value = $(this).data("filter")
      console.log(filter_value)
      old_projects.isotope({ filter: filter_value })
      $(".tag")
        .find("[data-fa-i2svg]")
        .removeClass("fas")
        .addClass("far")
      $(this)
        .find("[data-fa-i2svg]")
        .addClass("fas")
    })
  })
})
