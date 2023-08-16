$(function () {
    $('body').prepend('<header id="header"></header>')
    $('body').append('<footer id="footer"></footer>')
    $("#header").load("inc.html .head, .quick-box");
    $("#footer").load("inc.html .footer-con");
});

