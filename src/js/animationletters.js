// Wrap every letter in a span
$('.ml11 .letters').each(function () {
    $(this).html($(this).text().replace(/[a-z\u003F]/gi, "<span class='letter'>$&</span>"));
});
anime.timeline({
    loop: false
}).add({
    targets: '.ml11 .line',
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700
}).add({
    targets: '.ml11 .line',
    translateX: [0, $(".ml11 .letters").width() + 20],
    easing: "easeOutExpo",
    duration: 800,
    delay: 500
}).add({
    targets: '.ml11 .letter',
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function (el, i) {
        return 34 * (i + 1)
    }
}).add({
    targets: '.ml11',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});