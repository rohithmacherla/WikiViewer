$(document).ready(function() {
    var submit_button = $("#search");
    var input_field = $("#input");
    var input_text = "";
    var entry_row = $(".entry");

    submit_button.click(function() {

    });

    // Change color of side bars when user hovers mouse

    entry_row.mouseenter(function() {
        $(this).children().eq(0).css("background-color","lightblue");
        $(this).children().eq(2).css("background-color","lightblue");
    });
    entry_row.mouseleave(function() {
        $(this).children().eq(0).css("background-color","white");
        $(this).children().eq(2).css("background-color","white");
    });

    //change content of entries using wiki api

    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=bob&format=json&callback=?";


    $.getJSON(api, function(data) {
        var prefixH = "#sh";
        var prefixP = "#sp";
        var prefixA = "#a";
        var count = 1;
        for(var i = 1; i <= 7; i++) {
            var curr_h = prefixH + i;
            var curr_p = prefixP + i;
            var curr_a = prefixA + i;
            console.log(data[1][count])
            $(curr_h).html(data[1][count]);
            $(curr_p).html(data[2][count]);
            $(curr_a).attr('href', data[3][count]);
            count++;
        }
    });


});