let animsDuration = 800;

$(document).ready(() => {

    $('.slider').slick({
        infinite: false,
        centerMode: true,
        centerPadding: '12%',
        slidesToShow: 3,
        speed: 500,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $(window).on("resize", () => {
        updateSliderDesc();
    });

    $("body").css({
        "background-image": "url(../common/img/bg.png)"
    });

    $("nav, nav *").show("blind", {direction: "up"}, animsDuration);

    updateSliderDesc();

    $("#exploreBtn").on("click", () => {
        alert("dsa");
    })
});

function updateSliderDesc(){
    $("#sliderDesc").css({
        "margin-top": `${window.innerHeight * 0.5}px`
    });
    $("#sliderExplore").css({
        "margin-top": `${parseInt($("#sliderDesc").css("margin-top").slice(0, -2)) + (window.innerHeight * 0.2)}px`
    });
}