

$(document).ready(function(){
    $(".question-container").hide();
    $(".video-frame").show();
    $(".video-button img").attr("src", "business-template-assets/btn-video-pressed.png");
    $(".question-button img").attr("src", "business-template-assets/btn-question-normal-sel.png");
});


$(".question-button").click(function(){
    $(".question-button img").attr("src", "business-template-assets/btn-question-pressed.png");
    $(".video-button img").attr("src", "business-template-assets/btn-video-normal-sel.png");
    $(".question-container").show();
    $(".video-frame").hide();
});

$(".video-button").click(function(){
    $(".video-button img").attr("src", "business-template-assets/btn-video-pressed.png");
    $(".question-button img").attr("src", "business-template-assets/btn-question-normal-sel.png");
    $(".question-container").hide();
    $(".video-frame").show();
});
