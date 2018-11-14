$(function () {
 var colLi = $('.midColBox li'),closeBtn = $('.closeBtn');
    colLi.on('click',function () {
        var liIndex = $(this).index();
        console.log(liIndex);
        colLi.css('display','none');
        $(this).css('display','block').addClass('chosenLi').animate({left:0},500);
        $('.midProductList').eq(liIndex).fadeIn(500);
    });
    closeBtn.on('click',function () {
        $('.midProductList').fadeOut(500);
        $('.chosenLi').animate({left:300*$('.midColBox li').index($('.chosenLi'))+'px'}).removeClass('chosenLi');
        colLi.show();
    });
});