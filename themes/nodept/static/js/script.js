jQuery(function($) {

  $(document).ready(function() {

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
