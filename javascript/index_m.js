    $(function () {
        var colLi = $('.midColBox li'),closeBtn = $('.closeBtn'),flag = true;
        colLi.on('click',function () {
            var liIndex = $(this).index();
            console.log(1)
            if(flag){
                flag = !flag;
                if($(this).hasClass('unChosenLi')){
                    $(this).removeClass('unChosenLi');
                    $('.unChosenLi').slideUp(500);
                    $('.midProductList').eq(liIndex).slideDown(500);
                }else{
                    $('.unChosenLi').slideDown(500);
                    $('.midProductList').slideUp(500);
                    $(this).addClass('unChosenLi');
                }
                setTimeout(function () {flag = !flag;},500);
            }
        });
        closeBtn.on('click',function () {
            if(flag) {
                flag = !flag;
                $('.midColBox li:not(.unChosenLi)').addClass('unChosenLi');
                $('.unChosenLi').slideDown(500);
                $('.midProductList').slideUp(500);
                setTimeout(function () {flag = !flag;},500);
            }
        });

    });