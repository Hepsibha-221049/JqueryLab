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

// $(document).ready(function () {
//     $("#colorBtn").click(function () {
//         $(".box").css({
//             "background-color": "lightblue",
//             "color": "darkblue"
//         });
//     });
//     $("#addClassBtn").click(function () {
//         $(".box").addClass("highlight");
//     });

//     $("#removeClassBtn").click(function () {
//         $(".box").removeClass("highlight");
//     });
//     $("#toggleClassBtn").click(function () {
//         $(".box").toggleClass("highlight");
//     });

//     $("#checkClassBtn").click(function () {
//         if ($(".box").hasClass("highlight")) {
//             alert("Box has highlight class");
//         } else {
//             alert("Box does NOT have highlight class");
//         }
//     });
//     $("#themeBtn").click(function () {
//         $("body").toggleClass("dark-theme");
//     });

// });

// $(document).ready(function () {

//     $("#run").click(function () {

//         $(".highlight").removeClass("highlight");

//         // 🔹 PARENT TRAVERSAL

//         $(".special").parent().addClass("highlight");
//         // immediate parent (ul)

//         $(".special").parents().addClass("highlight");
//         // all ancestors (parent, grandparent, etc.)

//         $(".special").parentsUntil("#grandparent").addClass("highlight");
//         // until grandparent (excluding it)



//         // 🔹 CHILDREN TRAVERSAL

//         $("#parent").children().addClass("highlight");
//         // direct children

//         $("#parent").find("li").addClass("highlight");
//         // all descendant li



//         // 🔹 SIBLING TRAVERSAL

//         $(".special").siblings().addClass("highlight");
//         // all siblings

//         $(".special").next().addClass("highlight");
//         // next element

//         $(".special").nextAll().addClass("highlight");
//         // all next siblings

//         $(".special").nextUntil(":last").addClass("highlight");
//         // next until last

//         $(".special").prev().addClass("highlight");
//         // previous element

//         $(".special").prevAll().addClass("highlight");
//         // all previous siblings

//         $(".special").prevUntil(":first").addClass("highlight");
//         // previous until first



//         // 🔹 FILTERING METHODS

//         $("li").first().addClass("highlight");
//         // first element

//         $("li").last().addClass("highlight");
//         // last element

//         $("li").eq(2).addClass("highlight");
//         // index (0-based)

//         $("li").filter(".special").addClass("highlight");
//         // only special class

//         $("li").not(".special").addClass("highlight");
//         // except special

//     });

// });

// $(document).ready(function () {

//     // 🔹 BASIC EFFECTS

//     $("#show").click(function () {
//         $("#box").show();
//     });

//     $("#hide").click(function () {
//         $("#box").hide();
//     });

//     $("#toggle").click(function () {
//         $("#box").toggle();
//     });


//     // 🔹 FADE EFFECTS

//     $("#fadeIn").click(function () {
//         $("#box").fadeIn();
//     });

//     $("#fadeOut").click(function () {
//         $("#box").fadeOut();
//     });

//     $("#fadeToggle").click(function () {
//         $("#box").fadeToggle();
//     });

//     $("#fadeTo").click(function () {
//         $("#box").fadeTo(1000, 0.3); // speed, opacity
//     });


//     // 🔹 SLIDING EFFECTS

//     $("#slideDown").click(function () {
//         $("#box").slideDown();
//     });

//     $("#slideUp").click(function () {
//         $("#box").slideUp();
//     });

//     $("#slideToggle").click(function () {
//         $("#box").slideToggle();
//     });


//     // 🔹 CUSTOM ANIMATION

//     $("#animate").click(function () {
//         $("#box").animate({
//             left: "200px",   // move horizontally
//             opacity: 0.5,    // change opacity
//             width: "150px",  // resize
//             height: "150px"
//         }, 1000);
//     });

// });


$(document).ready(function () {

    // 🔹 START ANIMATION (creates queue)
    $("#start").click(function () {
        $("#box")
            .animate({ left: "200px" }, 1000)
            .animate({ top: "100px" }, 1000)
            .animate({ left: "0px" }, 1000)
            .animate({ top: "0px" }, 1000);
    });


    // 🔹 stop()
    $("#stop").click(function () {
        $("#box").stop();
    });


    // 🔹 finish()
    $("#finish").click(function () {
        $("#box").finish();
    });


    // 🔹 delay()
    $("#delay").click(function () {
        $("#box")
            .animate({ left: "200px" }, 1000)
            .delay(2000)
            .animate({ top: "100px" }, 1000);
    });


    // 🔹 clearQueue()
    $("#clear").click(function () {
        $("#box").clearQueue();
    });


    // 🔹 queue() + dequeue()
    $("#box").queue(function (next) {
        console.log("Step 1");
        next(); // go to next in queue
    });

    $("#box").queue(function (next) {
        console.log("Step 2");
        next();
    });

    // manually start queue
    $("#box").dequeue();

});