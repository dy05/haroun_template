window.onload = function() {
    if ($(window).width() > 992) {
        $(window).scroll(function(){  
            if ($(this).scrollTop() > 40) {
                $('#navbar_top').addClass("fixed-top");
                // add padding top to show content behind navbar
                $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
            }else{
                $('#navbar_top').removeClass("fixed-top");
                // remove padding top from body
                $('body').css('padding-top', '0');
            }   
        });
    } // end if


    let consentButton = document.querySelector('#cookies button')
    if (consentButton) {
        consentButton.addEventListener('click', function() {
            consentButton.parentElement.classList.add('d-none');
        })
    }
}