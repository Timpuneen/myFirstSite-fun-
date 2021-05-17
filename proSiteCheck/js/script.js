/*
Код, приведенный ниже позволяет при появлении объекта на экране задать ему значение active(а точнее класс _active), 
то есть когда объект появляется на 1/4(значение animStart) на экране, то ему задается данное значение, и наоборот;

Данный код служит основой для анимации объекта при скроллинге, без закачки каких-либо сторонних библиотек, 
сама анимация производится через css(transition)(или любой другой вариант реализации, на ваше усмотрение), 
как только значение объетка становится active;
*/

////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function () {
////////////////////////////////////////////////////////
    window.addEventListener('scroll', scroller);
    function scroller() {
        let el = $('#trigger').attr('class');
        if (!el.includes('_active')) {
            $('#upBtn').addClass("_activ");
        }
        else {
            $('#upBtn').removeClass("_activ");
        }
    }
////////////////////////////////////////////////////////
    const anime = document.querySelectorAll('.anims, #trigger');

    if (anime.length > 0) {
        window.addEventListener('scroll', animScroll);
        function animScroll() {
            for (let index = 0; index < anime.length; index++) {
                const animItem = anime[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add("_active");
                } else {
                    if (!animItem.classList.contains('anim_noHide')) {
                        animItem.classList.remove("_active");
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        animScroll();
        scroller();
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////

//------Код для плавной прокрутки к элементу------//
$(function () {
    $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});
