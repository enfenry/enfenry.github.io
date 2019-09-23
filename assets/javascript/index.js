$(document).ready(function () {
    // let aboutNav = $('#about-nav');
    // console.log(aboutNav.attr('class'));
    // aboutNav.removeClass('active');

    // aboutNav.attr("class", "nav-link navbar-link")


    $('.navbar-link').on('click', function () {
        let id = $(this).attr('aria-controls');
        $('#' + id).addClass('show')
    });

});