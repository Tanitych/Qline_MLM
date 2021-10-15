$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$('.drop__language').click(function (event) {
    $('.drop__language, .drop__language__content').toggleClass('show');

});

window.onclick = function (event) {
    if (!event.target.matches('.drop__language__btn')) {
        var dropdowns = document.getElementsByClassName("drop__language__content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};


$(function () {
    $("#phone").mask("+7(999) 999-9999");
});


$(window).resize(function (event) {
    adaptive_function();
});
function adaptive_header(w, h) {
    var headerMenu = $('.responsive_contacts');
    var headerLang = $('.header__contacts');
    if (w < 1200) {
        if (!headerLang.hasClass('done')) {
            headerLang.addClass('done').appendTo(headerMenu);
        }
    } else {
        if (headerLang.hasClass('done')) {
            headerLang.removeClass('done').prependTo($('.desktop_contacts'));
        }
    }
}
function adaptive_function() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_header(w, h);
}
adaptive_function();


$('.minus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);

});

$('.plus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 1000) {
        value = value + 1;
    } else {
        value = 1000;
    }

    $input.val(value);
});

// function resizable(el, factor) {
//     var int = Number(factor) || 7.7;
//     function resize() { el.style.width = ((el.value.length + 1) * int) + 'px' }
//     var e = 'keyup,keypress,focus,blur,change'.split(',');
//     for (var i in e) el.addEventListener(e[i], resize, false);
//     resize();
// }
// resizable(document.getElementById('txt'), 7);

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        315: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        455: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    }
});