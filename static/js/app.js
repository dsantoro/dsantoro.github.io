console.time('loading')

$(document).ready(function(){

    console.log('We\'re all set')

    $('.toggle-nav').on('click', function(){

        $('body').toggleClass('menu-open')
    })

    function axysY() {

        return $(window).scrollTop()
    }

    function toggleColor(sections, target) {

        $(window).on('resize scroll load', function () {

            var topScroll = axysY()

            $(sections).each(function () {
                var el = $(this)
                var posSection = el.offset().top - 42
                var hSection = el.height()

                if (posSection <= topScroll && (posSection + hSection) > topScroll) {
                    if ($(this).hasClass('dark')) {

                        $(target).find('span').css({ 'backgroundColor': 'white' })
                    } else {

                        $(target).find('span').css({ 'backgroundColor': 'black' })
                    }
                }
            })
        })
    }

    toggleColor('.toggle-sections', '.toggle-nav')

    $(window).on('scroll load resize', function(){

        if (axysY() > ($('.skills-trigger').offset().top - ($(window).height()/2))) {

            $('.skill-bar').each(function(){

                var level = $(this).data('level')
                $(this).find('.percentage-bar').attr('title', level+'%').css({'width' : level+'%'})
            })

            $('.coffee').addClass('show')
        }
    })

})

console.timeEnd('loading')