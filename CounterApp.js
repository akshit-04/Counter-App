var i = 0;
// $('#main').load().text(i);
function zero() {
    $('#main').text(i);
    $('#minus').prop("disabled",true);
    // $("#minus").hide();
    $('#plus').prop("disabled",false);
}
// $('button').click(function (){
$('#res').click(function () {
    i = 0;
    $('#minus').prop("disabled",true);
    $('#main').text(i);
    $('#plus').prop("disabled",false);});
$('#minus').click(function () {
    i--;
    if (i == 0) {
        $('#minus').prop("disabled",true);
    }
    if (i < 9) {
        $('#plus').prop("disabled",false);
    }
    if (i % 2 == 0) {
        $('body').css("background-color", "aqua");
        $('#main').css("color", "white");
    }
    if (i % 2 != 0) {
        $('body').css("background-color", "rgba(44, 44, 44, 0.596)");
        $('#main').css("color", "red");
    }
    $('#main').text(i);
})
$('#plus').click(function () {
    i++;
    if (i > 0) {
        $('#minus').prop("disabled",false);
        
    }
    if (i == 9) {
        $('#plus').prop("disabled",true);
    }
    if (i % 2 == 0) {
        $('body').css("background-color", "aqua");
        $('#main').css("color", "white");
    }
    if (i % 2 != 0) {
        $('body').css("background-color", "rgba(44, 44, 44, 0.596)");
        $('#main').css("color", "red");
    }
    $('#main').text(i);
})


// });