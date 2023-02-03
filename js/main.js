$("#home").on('click', function(){

    $("#homeSection").removeClass("d-none");
    $("#aboutSection").addClass("d-none");
    $("#contactSection").addClass("d-none");
    $("#portfolioSection").addClass("d-none");
    $("#serviceSetion").addClass("d-none");

});

$("#about").on('click', function() {
    
    $("#aboutSection").removeClass("d-none");
    $("#homeSection").addClass("d-none");
    $("#contactSection").addClass("d-none");
    $("#portfolioSection").addClass("d-none");
    $("#serviceSetion").addClass("d-none");

});

$("#contact").on('click', function() {

    $("#contactSection").removeClass("d-none");
    $("#aboutSection").addClass("d-none");
    $("#homeSection").addClass("d-none");
    $("#portfolioSection").addClass("d-none");
    $("#serviceSetion").addClass("d-none");

});

$("#portfolio").on('click', function() {

    $("#portfolioSection").removeClass("d-none");
    $("#contactSection").addClass("d-none");
    $("#aboutSection").addClass("d-none");
    $("#homeSection").addClass("d-none");
    $("#serviceSetion").addClass("d-none");

});

$("#service").on('click', function() {

    $("#serviceSetion").removeClass("d-none");
    $("#portfolioSection").addClass("d-none");
    $("#contactSection").addClass("d-none");
    $("#aboutSection").addClass("d-none");
    $("#homeSection").addClass("d-none");

});

