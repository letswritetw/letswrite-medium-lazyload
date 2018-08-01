$(window).on('load', function() {
  // 自由尺寸，先處理 padding-bottom
  if($('.w-free').length > 0) {
    $('.w-free').each(function() {
      var w = $(this).find('.js-get-img').data('width');
      var h = $(this).find('.js-get-img').data('height');
      var pd = (h / w) * 100;
      $(this).find('.js-get-img').css('paddingBottom', pd + '%');
    });
  }

  $('.lazy-image').each(function() {
    var self = $(this);
    var waypoint = new Waypoint({
      element: self[0],
      handler: function() {
        var src = self.find('.js-get-img').data('img');
        var img = new Image();
            img.src = src;
        
        $(img).on('load', function() {
          self.find('.js-get-img').append(img);
          setTimeout(function(){
            self.find('.js-get-img').addClass('show');
          }, 50);
        });
        this.destroy();
      },
      offset: '75%'
    });
  });
})