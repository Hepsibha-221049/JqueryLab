$(document).ready(function () {
    $("#run").click(function () {
        $("p").css("color", "blue");
        $("#title").css('color', 'red');
        $(".text").css("background", "yellow");
        $("h2,p").css("border", "2px solid green");
    });

    $("div p").css({ "color": "purple", "background": "lightblue" });//selects all p inside div
    $("div > p").css("font-weight", "bold");//parent>child selects only direct child not deep
    $("h2+p").css("font-weight", "bold");//prev+next sibling
    $("h2~p").css("font-weight", "bold");//prev+next siblings(all)

    $("p:first").css("background", "pink");
    $("p:last").css("background", "orange");

    $("p:eq(2)").css("border", "3px solid red");
    $("li:even").css("background", "lightgreen");
    $("li:odd").css("background", "lightgray");
    $("p:not(.text)").css("color", "brown");


    $('[type]').css("border", "2px solid blue");
    $("[type='text']").css("background", "yellow");
    $("[name^='user']").css("color", "red");//starts with 
    $("[name$='word']").css("background", "lightpink");//ends with 
    $("[name*='mail']").css("border", "3px dashed green");//contains
});


$(document).ready(function () {
    $("#changeImg").click(function () {
        $("#myImg").attr("src", "../image2.jpg");
    });
    $("#disableCheck").click(function () {
        $("#check").prop("disabled", true);
    });
    $("#getValue").click(function () {
        alert("entered:" + $("#name").val());
    });
    $("#remove").click(function () {
        $("#myImg").removeAttr("width");
    });

});