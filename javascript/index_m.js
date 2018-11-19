    $(function () {
        var colLi = $('.midColBox li'),closeBtn = $('.closeBtn'),flag = true;
        colLi.on('click',function () {
            var liIndex = $(this).index();
            if(flag){
                flag = !flag;
                if($(this).hasClass('unChosenLi')){
                    $(this).removeClass('unChosenLi');
                    $('.unChosenLi').slideUp(500);
                    $('.midProductList').eq(liIndex).slideDown(500);
                }else{
                    $('.midProductList').slideUp(500);
                    $('.unChosenLi').slideDown(500);
                    $(this).addClass('unChosenLi');
                }
                setTimeout(function () {flag = !flag;},500);
            }
        });
        closeBtn.on('click',function () {
            if(flag) {
                flag = !flag;
                $('.midColBox li:not(.unChosenLi)').addClass('unChosenLi');
                $('.midProductList').slideUp(500);
                $('.unChosenLi').slideDown(500);
                setTimeout(function () {flag = !flag;},500);
            }
        });

    });