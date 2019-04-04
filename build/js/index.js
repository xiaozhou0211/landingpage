$(document).ready(function() {

  console.log('tests');

  setInterval(function(){
    var collection1 = ['1', '2', '3', '4'];
    var rand1 = collection1[Math.floor(Math.random() * collection1.length)];
    var src1 = "images/collection/" + rand1 + ".jpg";
    $("#img1").attr("src",src1);
  }, 1000);

  setInterval(function(){
    var collection2 = ['1b', '2b', '3b', '4b'];
    var rand2 = collection2[Math.floor(Math.random() * collection2.length)];
    var src2 = "images/collection/" + rand2 + ".jpg";
    $("#img2").attr("src",src2);
  }, 1000);

  setInterval(function(){
    var collection3 = ['5', '6', '7'];
    var rand3 = collection3[Math.floor(Math.random() * collection3.length)];
    var src3 = "images/collection/" + rand3 + ".jpg";
    $("#img3").attr("src",src3);
  }, 1000);

  setInterval(function(){
    var collection4 = ['5b', '6b', '7b'];
    var rand2 = collection4[Math.floor(Math.random() * collection4.length)];
    var src4 = "images/collection/" + rand2 + ".jpg";
    $("#img4").attr("src",src4);
  }, 1000);


  $('#simplelybeCarousel').carousel({
    interval: 3000
  })
  $('.carousel .carousel-item').each(function(){
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i=0;i<2;i++) {
          next=next.next();
          if (!next.length) {
          	next = $(this).siblings(':first');
        	}

          next.children(':first-child').clone().appendTo($(this));
        }
  });

  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".animation_loading");

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];

      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });





});
