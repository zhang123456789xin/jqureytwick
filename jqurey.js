jQuery(window).scroll(function () {
    // add 'sticky-header' class to the header tag when the header top is scrolled out of view
    jQuery('header').toggleClass('sticky-header', jQuery(this).scrollTop() > jQuery('.site-header').height());
});
