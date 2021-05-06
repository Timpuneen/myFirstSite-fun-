/*
Код, приведенный ниже позволяет при появлении объекта на экране задать ему значение active(а точнее класс _active), 
то есть когда объект появляется на 1/4(значение animStart) на экране, то ему задается данное значение, и наоборот;

Данный код служит основой для анимации объекта при скроллинге, без закачки каких-либо сторонних библиотек, 
сама анимация производится через css(transition)(или любой другой вариант реализации, на ваше усмотрение), 
как только значение объетка становится active;
*/

////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function() {
const anime = document.querySelectorAll('.anims');

if(anime.length>0){
    window.addEventListener('scroll', animScroll);
    function animScroll(){
        for(let index = 0; index<anime.length;index++){
            const animItem=anime[index];
            const animItemHeight=animItem.offsetHeight;
            const animItemOffset=offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight/animStart;

            if(animItemHeight>window.innerHeight){
                animItemPoint = window.innerHeight-window.innerHeight/animStart;
            }

            if((pageYOffset>animItemOffset-animItemPoint)&&pageYOffset<(animItemOffset+animItemHeight)){
                animItem.classList.add("_active");
            }else{
                animItem.classList.remove("_active");
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft=window.pageXOffset||document.documentElement.scrollLeft,
        scrollTop=window.pageYOffset||document.documentElement.scrollTop;
        return{top: rect.top+scrollTop, left: rect.left + scrollLeft}
    }
}
};
////////////////////////////////////////////////////////////////////////////////////////////////////