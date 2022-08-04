$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

$('.link > a').click(function () {
    $('.active').removeClass('active');

    $(this).addClass('active');
});

$('.link-one').click(function () {
    $('.active').removeClass('active');

    $(this).addClass('active');
});

$('.submenu > li').click(function () {
    $('.active').removeClass('active');
    $(this).addClass('active');

    //$(this).parent('ul').prev('a').addClass('active');

});
