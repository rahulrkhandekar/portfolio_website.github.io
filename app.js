$(document).ready(function() {
 $('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
 });

let hamberger=document.querySelector('.hamberger');
let times=document.querySelector('.times');
let mobileNav=document.querySelector('.mobile-nav')


hamberger.addEventListener('click',function(){
    mobileNav.classList.add('open');

});
times.addEventListener('click',function(){
    mobileNav.classList.remove('open');

});
hamberger.addEventListener('click',function(){
    hamberger.classList.add('display');

});
times.addEventListener('click',function(){
    hamberger.classList.remove('display');

});

});


