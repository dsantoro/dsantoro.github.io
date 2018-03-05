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

const skillBars = [].slice.call( document.querySelectorAll('.skill-bar') )

window.addEventListener('scroll', () => {

    let axys = axysY()

    if( axys > document.querySelector('.skills-trigger').offsetTop - window.outerHeight / 2 ) {

        skillBars.forEach(element => {

            let level = element.dataset.level
            element.querySelector('.percentage-bar').setAttribute('title', `${level}%`)
            element.querySelector('.percentage-bar').style.width = `${level}%`
        })

        document.querySelector('.coffee').classList.add('show')
    }
})

console.timeEnd('loading')