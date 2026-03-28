// $(document).ready(function () {
//     $("#run").click(function () {
//         $("p").css("color", "blue");
//         $("#title").css('color', 'red');
//         $(".text").css("background", "yellow");
//         $("h2,p").css("border", "2px solid green");
//     });

//     $("div p").css({ "color": "purple", "background": "lightblue" });//selects all p inside div
//     $("div > p").css("font-weight", "bold");//parent>child selects only direct child not deep
//     $("h2+p").css("font-weight", "bold");//prev+next sibling
//     $("h2~p").css("font-weight", "bold");//prev+next siblings(all)

//     $("p:first").css("background", "pink");
//     $("p:last").css("background", "orange");

//     $("p:eq(2)").css("border", "3px solid red");
//     $("li:even").css("background", "lightgreen");
//     $("li:odd").css("background", "lightgray");
//     $("p:not(.text)").css("color", "brown");


//     $('[type]').css("border", "2px solid blue");
//     $("[type='text']").css("background", "yellow");
//     $("[name^='user']").css("color", "red");//starts with
//     $("[name$='word']").css("background", "lightpink");//ends with
//     $("[name*='mail']").css("border", "3px dashed green");//contains
// });


// $(document).ready(function () {
//     $("#changeImg").click(function () {
//         $("#myImg").attr("src", "../image2.jpg");
//     });
//     $("#disableCheck").click(function () {
//         $("#check").prop("disabled", true);
//     });
//     $("#getValue").click(function () {
//         alert("entered:" + $("#name").val());
//     });
//     $("#remove").click(function () {
//         $("#myImg").removeAttr("width");
//     });

// });

// $(document).ready(function () {
//     $("#btn").click(function () {
//         alert("Button Clicked");
//     });
//     $("#dblBtn").dblclick(function () {
//         alert("Double Clicked");
//     });
//     $("#box").mouseenter(function () {
//         $(this).css("background", "lightblue");
//     });
//     $("#box").mouseleave(function () {
//         $(this).css("background", "lightgray");
//     });
//     $("#box").hover(
//         function () { $(this).css("border", "3px solid red"); },
//         function () { $(this).css("border", "none"); }
//     );
//     $("#box").mousedown(function () {
//         $(this).text("Mouse Down");
//     });
//     $("#box").mouseup(function () {
//         $(this).text("Mouse Up");
//     });
//     $("#keyboard").keypress(function () {
//         console.log("Key Pressed");
//     });
//     $("#keyboard").keydown(function () {
//         console.log("Key Down");
//     });
//     $("#keyboard").keyup(function () {
//         console.log("Key Up");
//     });
//     $("#myForm").submit(function (e) {
//         e.preventDefault(); // prevent page reload
//         alert("Form Submitted");
//     });
//     $("#course").change(function () {
//         alert("Selected: " + $(this).val());
//     });

//     // focus
//     $("#name").focus(function () {
//         $(this).css("background", "lightyellow");
//     });

//     // blur
//     $("#name").blur(function () {
//         $(this).css("background", "white");
//     });
//     $("#btn").on("mouseover", function () {
//         $(this).css("background", "green");
//     });

//     // off (remove event)
//     $("#removeEvent").click(function () {
//         $("#btn").off("click");
//         alert("Click event removed");
//     });

// });

$(document).ready(function () {
    $("#colorBtn").click(function () {
        $(".box").css({
            "background-color": "lightblue",
            "color": "darkblue"
        });
    });
    $("#addClassBtn").click(function () {
        $(".box").addClass("highlight");
    });

    $("#removeClassBtn").click(function () {
        $(".box").removeClass("highlight");
    });
    $("#toggleClassBtn").click(function () {
        $(".box").toggleClass("highlight");
    });

    $("#checkClassBtn").click(function () {
        if ($(".box").hasClass("highlight")) {
            alert("Box has highlight class");
        } else {
            alert("Box does NOT have highlight class");
        }
    });
    $("#themeBtn").click(function () {
        $("body").toggleClass("dark-theme");
    });

});