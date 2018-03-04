console.time('loading')

console.log('We\'re all set')

const btnOpenMenu = document.querySelector('.toggle-nav')

btnOpenMenu.addEventListener('click', () => {

    document.querySelector('body').classList.toggle('menu-open')
})

const axysY = () => {

    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
}

const sections = [].slice.call( document.querySelectorAll('.toggle-sections') )

const target = document.querySelector('.toggle-nav')

window.addEventListener('scroll', () => {

    let topScroll = axysY()

    sections.forEach(element => {

        let posSection = element.offsetTop - 42
        let hSection = element.offsetHeight

        if (posSection <= topScroll && (posSection + hSection) > topScroll) {

            if (element.classList.contains('dark')) {

                target.classList.remove('black-children')
                target.classList.add('white-children')
                return
            } else {
                target.classList.remove('white-children')
                target.classList.add('black-children')
                return
            }
        }
    })
})

    /*

    $(window).on('scroll load resize', function () {

        if (axysY() > ($('.skills-trigger').offset().top - ($(window).height() / 2))) {

            $('.skill-bar').each(function () {

                var level = $(this).data('level')
                $(this).find('.percentage-bar').attr('title', level + '%').css({ 'width': level + '%' })
            })

            $('.coffee').addClass('show')
        }
    })*/

console.timeEnd('loading')