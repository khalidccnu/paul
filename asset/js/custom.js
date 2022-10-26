// Menu Open
function menuOpen() {
    $('#fs-menu').css('height', '100%');
}

// Menu Close
function menuClose() {
    $('#fs-menu').css('height', '0');
}

// Navlink Active
function navlinkActive() {
    let position = $(window).scrollTop();

    $('section').each(function() {
        let target = $(this).offset().top;
        let id = $(this).attr('id');

        if (position >= (target - 200)) {
            $('#fs-menu a').removeClass('active');
            $('#fs-menu a[href="#' + id + '"]').addClass('active');
        }
    });
}

// Header Fixed
let header = $('header');
let headerHeight = header.outerHeight();

$('a[href*="#"]:not([href="#"])').click(function(event) {
    let href = $(this).attr('href');
    let targetPos = $(href).offset().top - headerHeight + 5;

    $('html, body').animate({
        scrollTop: targetPos
    }, 400);

    event.preventDefault();
});

// Header Sticky
function headerSticky() {
    if ($(window).scrollTop() > 100) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
}

// Portfolio Filter
$('.pf-filter').click(function(event) {
    let et = $(event.target);

    if (et.hasClass('filter-item')) {
        $('.pf-filter .active').removeClass('active');
        et.addClass('active');

        let filterValue = et.attr('data-filter');

        $('.pf-item').each(function(index) {
            let item = $('.pf-item').eq(index);

            if (item.hasClass(filterValue) || filterValue === 'all') {
                item.removeClass('hide').addClass('show');
            } else {
                item.removeClass('show').addClass('hide');
            }
        });
    }
});

// ===== Initial Load =====
navlinkActive();
headerSticky();

// ===== Window Scroll Event =====
$(window).scroll(function() {
    navlinkActive();
    headerSticky();
});