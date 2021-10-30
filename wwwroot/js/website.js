$(document).ready(function () {
    $('#page-content-wrapper').load('main.html');
    $('#code').click(function () {
        $('#page-content-wrapper').load('code.html');
    })
    $('#threed').click(function () {
        $('#page-content-wrapper').load('threed.html');
    })
    $('#photo').click(function () {
        $('#page-content-wrapper').load('photo.html');
    })
})
