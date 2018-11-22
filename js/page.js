$(function(){
    alert(1);
    $('.menu_list li').on('click',function(){
        $('.menu_list li').removeClass('current');
        $(this).addClass('current');
    })
})