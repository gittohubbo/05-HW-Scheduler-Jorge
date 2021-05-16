let dt = luxon.DateTime;

var todayDate = dt.now().toFormat("EEEE, MMMM dd");
var day = dt.now().toFormat("d");

if (day === 1 || day === 21 || day == 31) {
    $("#currentDay").text(todayDate + "st");
} else if (day === 2 || day === 22) {
    $("#currentDay").text(todayDate + "nd");
} else if (day === 3 || day === 23) {
    $("#currentDay").text(todayDate + "rd");
} else {
    $("#currentDay").text(todayDate + "th");
}

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
   
    function hourChecker() {
        var hourNow = dt.now().toFormat("H");

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);

            if (blockHour < hourNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockHour === hourNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    hourChecker();
})