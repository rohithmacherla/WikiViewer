$(document).ready(function() {
    var submit_button = $("#search");
    var input_field = $("#input");
    var input_text = "";
    var entry_row = $(".entry");

    submit_button.click(function() {
        alert("button clicked"); 
    });

    entry_row.mouseenter(function() {
        //console.log(this.children().eq(1));
        $(this).children().eq(0).css("background-color","lightblue");
        $(this).children().eq(2).css("background-color","lightblue");
    });
    entry_row.mouseleave(function() {
        $(this).children().eq(0).css("background-color","white");
        $(this).children().eq(2).css("background-color","white");
    });
});