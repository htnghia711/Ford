// Sử lý menu
function reset() {
    document.getElementById("mega-box").style.opacity = "0";
    document.getElementById("mega-box").style.visibility = "hidden";

    document.querySelector(".header_nav .header_left ul li .menu_1_1").style.borderBottom = "none";

    document.getElementById("mega-box2").style.opacity = "0";
    document.getElementById("mega-box2").style.visibility = "hidden";

    document.querySelector(".header_nav .header_left ul li .menu_2_2").style.borderBottom = "none";

    document.getElementById("mega-box3").style.opacity = "0";
    document.getElementById("mega-box3").style.visibility = "hidden";

    document.querySelector(".header_nav .header_left ul li .menu_3_3").style.borderBottom = "none";

    document.getElementById("mega-box4").style.opacity = "0";
    document.getElementById("mega-box4").style.visibility = "hidden";

    document.querySelector(".header_nav .header_left ul li .menu_4_4").style.borderBottom = "none";

    document.getElementById("mega-box5").style.opacity = "0";
    document.getElementById("mega-box5").style.visibility = "hidden";

    document.querySelector(".header_nav .header_left ul li .menu_5_5").style.borderBottom = "none";



}




function myFunction1() {
    var c = document.querySelector(".header_nav .header_left ul .menu_1 ");
    var y = document.querySelector(".header_nav .header_left ul li .menu_1_1");
    var x = document.getElementById("mega-box");
    if (x.style.opacity === "1") {
        reset();
        x.style.opacity = "0";
        x.style.visibility = "hidden";
        y.style.borderBottom = "none";
        c.style.border = "none";
    } else {
        reset();
        x.style.opacity = "1";
        x.style.visibility = "visible";
        y.style.borderBottom = "3px solid #0276b3";

        // $(document).ready(function() {
        //     $(".header_nav .header_left ul .menu_1").hover(function() {
        //         $(this).css("border", "none");
        //     }, function() {
        //         $(this).css("border", "1px solid black");
        //     });
        // });
    }
}

function myFunction2() {
    var c = document.querySelector(".header_nav .header_left ul .menu_2 ");
    var y = document.querySelector(".header_nav .header_left ul li .menu_2_2");
    var x = document.getElementById("mega-box2");
    if (x.style.opacity === "1") {
        reset();
        x.style.opacity = "0";
        x.style.visibility = "hidden";
        y.style.borderBottom = "none";
        c.style.border = "none";
    } else {
        reset();
        x.style.opacity = "1";
        x.style.visibility = "visible";
        y.style.borderBottom = "3px solid #0276b3";

        // $(document).ready(function() {
        //     $(".header_nav .header_left ul .menu_2 ").hover(function() {
        //         $(this).css("border", "none");
        //     }, function() {
        //         $(this).css("border", "1px solid black");
        //     });
        // });
    }
}

function myFunction3() {
    var c = document.querySelector(".header_nav .header_left ul .menu_3 ");
    var y = document.querySelector(".header_nav .header_left ul li .menu_3_3");
    var x = document.getElementById("mega-box3");
    if (x.style.opacity === "1") {
        reset();
        x.style.opacity = "0";
        x.style.visibility = "hidden";
        y.style.borderBottom = "none";
        c.style.border = "none";

    } else {
        reset();
        x.style.opacity = "1";
        x.style.visibility = "visible";
        y.style.borderBottom = "none";
        c.style.border = "none";
        y.style.borderBottom = "3px solid #0276b3";

        // $(document).ready(function() {
        //     $(".header_nav .header_left ul .menu_3 ").hover(function() {
        //         $(this).css("border", "none");
        //     }, function() {
        //         $(this).css("border", "1px solid black");
        //     });
        // });
    }
}

function myFunction4() {
    var c = document.querySelector(".header_nav .header_left ul .menu_4 ");
    var y = document.querySelector(".header_nav .header_left ul li .menu_4_4");
    var x = document.getElementById("mega-box4");
    if (x.style.opacity === "1") {
        reset();
        x.style.opacity = "0";
        x.style.visibility = "hidden";
        y.style.borderBottom = "none";
        c.style.border = "none";

    } else {
        reset();
        x.style.opacity = "1";
        x.style.visibility = "visible";
        y.style.borderBottom = "none";
        c.style.border = "none";
        y.style.borderBottom = "3px solid #0276b3";

        // $(document).ready(function() {
        //     $(".header_nav .header_left ul .menu_4").hover(function() {
        //         $(this).css("border", "none");
        //     }, function() {
        //         $(this).css("border", "1px solid black");
        //     });
        // });
    }
}

function myFunction5() {
    var c = document.querySelector(".header_nav .header_left ul .menu_5 ");
    var y = document.querySelector(".header_nav .header_left ul li .menu_5_5");
    var x = document.getElementById("mega-box5");
    if (x.style.opacity === "1") {
        reset();
        x.style.opacity = "0";
        x.style.visibility = "hidden";
        y.style.borderBottom = "none";
        c.style.border = "none";

    } else {
        reset();
        x.style.opacity = "1";
        x.style.visibility = "visible";
        y.style.borderBottom = "none";
        c.style.border = "none";
        y.style.borderBottom = "3px solid #0276b3";

        // $(document).ready(function() {
        //     $(".header_nav .header_left ul .menu_5").hover(function() {
        //         $(this).css("border", "none");
        //     }, function() {
        //         $(this).css("border", "1px solid black");
        //     });
        // });
    }
}
//outsize
$('body').on('click', function(e) {
    if ($(e.target).closest('#header-fix').length == 0) {
        reset()
    }
})