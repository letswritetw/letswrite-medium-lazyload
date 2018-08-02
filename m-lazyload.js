$(window).on('load', () => {
  // 自由尺寸，先處理 padding-bottom
  if($('.w-free').length > 0) {
    $('.w-free').each(function() {
      const w = $(this).find('.js-get-img').data('width'),
            h = $(this).find('.js-get-img').data('height'),
            pd = (h / w) * 100;
      $(this).find('.js-get-img').css('paddingBottom', pd + '%');
    });
  }


  // 監聽 scroll，加載圖片
  $('.lazy-image').each(function() {
    const self = $(this);
    const waypoint = new Waypoint({
      element: self[0],
      handler() {
        const src = self.find('.js-get-img').data('img'); // 抓原始圖路徑

        // 建立物件
        const img = new Image();
            img.src = src;
        
        // 圖片載入完，append 進 div 裡
        $(img).on('load', () => {
          self.find('.js-get-img').append(img);
          setTimeout(function(){
            self.find('.js-get-img').addClass('show');
          }, 50);
        });

        // destroy 該 div 的監聽 scroll
        this.destroy();
      },
      offset: '75%'
    });
  });
})