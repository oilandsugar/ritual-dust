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

    // when images are loaded

    $(".hover-slider").each(function() {
      let slider = $(this);
      slider.find('.img').imagesLoaded({ background: true }, function(instance, image) {
        slider.find('.images-container').removeClass('not-loaded');
      });
    });

    $(".old-project.video").each(function() {
      let images = $(this).find('.images');
      images.find('.img').imagesLoaded({ background: true }, function(instance, image) {
        images.find('.images-container').removeClass('not-loaded');
      });
    });

    $(".old-project.website").each(function() {
      let images = $(this).find('.images');
      images.find('.img').imagesLoaded({ background: true }, function(instance, image) {
        images.find('.images-container').removeClass('not-loaded');
      });
    });

    // hover slider on photo based projects

    let sliderWidth = $('.hover-slider').width();

    $(".hover-slider").each(function() {
      let slider = $(this);
      let images = $(this).find('.img');
      let indicator = $(this).find('.indicator');
      let container = $(this).find('.images-container');
      // only initialize if there is more than one image
      if(images.length > 1) {
        // set width of container
        let containerWidth = slider.width() * images.length;
        container.css('width', containerWidth + "px");
        // set width of images inside
        slider.find('.img').css('width', sliderWidth + "px");
        // position images
        slider.find('#image-2').css('left', sliderWidth + "px");
        slider.find('#image-3').css('left', sliderWidth * 2 + "px");
        // add indicator for each image
        $.each(images, function(key, value) {
          if(key == 0) {
            indicator.append('<div class="bar active"></div>');
          } else {
            indicator.append('<div class="bar"></div>');
          }
        });
      }
    });

    $(".hover-slider").mousemove(function(e) {
      let slider = $(this);
      let images = $(this).find('.img');
      let container = slider.find(".images-container");
      if(images.length > 1) {
        let parentOffset = slider.offset();
        var relX = e.pageX - parentOffset.left;
        let portionWidth = sliderWidth / images.length;
        // define positions to move slider
        // move slider to show image 1
        if(relX < portionWidth){
          container.css('left', 0);
          slider.find('.bar').removeClass('active');
          slider.find('.bar:nth-child(1)').addClass('active');
        }
        // move slider to show image 2
        if(relX >= portionWidth && relX < portionWidth * 2) {
          container.css('left', "-" + sliderWidth + "px");
          slider.find('.bar').removeClass('active');
          slider.find('.bar:nth-child(2)').addClass('active');
        }
        // move slider to show image 3
        if(images.length == 3 && relX >= portionWidth * 2){
          container.css('left', "-" + sliderWidth * 2 + "px");
          slider.find('.bar').removeClass('active');
          slider.find('.bar:nth-child(3)').addClass('active');
        }
      }
    });

    $(".hover-slider").mouseout(function() {
      let slider = $(this);
      let images = $(this).find('.img');
      let container = slider.find(".images-container");
      if(images.length > 1) {
        container.css('left', 0);
        slider.find('.bar').removeClass('active');
        slider.find('.bar:nth-child(1)').addClass('active');
      }
    });

  });
});
