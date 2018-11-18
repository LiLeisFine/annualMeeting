$(function () {
    var colLi = $('.midColBox li'),closeBtn = $('.closeBtn'),flag = true;
    colLi.on('click',function () {
        var liIndex = $(this).index();
        console.log(1)
        if(flag){
            flag = !flag;
            if($(this).hasClass('unChosenLi')){
                $(this).removeClass('unChosenLi');
                $('.unChosenLi').animate({height:0},500);
                $('.midProductList').eq(liIndex).fadeIn(500);
            }else{
                $('.unChosenLi').animate({height:'4.8rem'});
                $('.midProductList').fadeOut(500);
                $(this).addClass('unChosenLi');
            }
            setTimeout(function () {flag = !flag;},500);
        }
    });
    closeBtn.on('click',function () {
        if(flag) {
            flag = !flag;
            $('.midColBox li:not(.unChosenLi)').addClass('unChosenLi');
            $('.unChosenLi').animate({height: '4.8rem'},500);
            $('.midProductList').fadeOut(500);
            setTimeout(function () {flag = !flag;},500);
        }
    });

});