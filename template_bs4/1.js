 $(function() {
     khoimonan = $('.nhieumon').isotope({
         // options
         itemSelector: '.motmon',
         layoutMode: 'masonry'
     });
     $('.tieudect a').click(function() {
         dulieu = $(this).data('monan');
         console.log(dulieu);
         khoimonan.isotope({ filter: dulieu })
         return false;
         // click vào a thì nó ko làm gi het
     });
     new WOW().init();
 })