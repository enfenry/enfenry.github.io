// $('.navbar-collapse').on('show.bs.collapse', function() {
//     $('.navbar-toggle').removeClass('collapsed')
//  });

 $('.navbar-link').on('click', function() {
     let id = $(this).attr('aria-controls');
     $('#'+id).addClass('show')
 });
