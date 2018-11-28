//delay animation of check on form
var bar = document.getElementById("startCheck");

bar.addEventListener("animationend", wait)

function wait() {
    var oldclass = bar.className;
    bar.className = "fa fa-check-circle fa-fw";
    setTimeout(function () {
        bar.className = oldclass;
    }, 1500);
}

/* Script to change the column stacking for mobile to get list on bottom of form */
$(window).resize(function () {
    /*  console.log('resize called'); */
    var width = $(window).width();
     /* console.log(width); */
    /*  log the width to find out what what pixel to change the order at.
        The dev tools in browser might be different */
    //console.log(width); 
    if (width <= 750) { //991 752
        $('.topMobile').addClass('order-first');
        $('.bottomMobile').addClass('order-last');
    } else {
        $('.topMobile').removeClass('order-first');
        $('.bottomMobile').removeClass('order-last');
    }
})
    .resize();//trigger the resize event on page load.