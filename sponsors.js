$(document).ready(function () {
	 var foodContent = $("#food");
	         var drinksContent = $("#drinks");
        var healthContent = $("#health");
        var insuranceContent = $("#insurance");
        var entertainmentContent = $("#entertainment");

foodContent.show();

drinksContent.hide();
healthContent.hide()
insuranceContent.hide()
entertainmentContent.hide()


    $("#foodClick").click(function () {
        foodContent.show();

drinksContent.hide();
healthContent.hide()
insuranceContent.hide()
entertainmentContent.hide()
    })

$("#drinksClick").click(function () {
        foodContent.hide();

drinksContent.show();
healthContent.hide()
insuranceContent.hide()
entertainmentContent.hide()
    })

$("#healthClick").click(function () {
        foodContent.hide();

drinksContent.hide();
healthContent.show()
insuranceContent.hide()
entertainmentContent.hide()
    })

$("#insuranceClick").click(function () {
        foodContent.hide();

drinksContent.hide();
healthContent.hide()
insuranceContent.show()
entertainmentContent.hide()
    })

$("#entertainmentClick").click(function () {
        foodContent.hide();

drinksContent.hide();
healthContent.hide()
insuranceContent.hide()
entertainmentContent.show()
    })

});