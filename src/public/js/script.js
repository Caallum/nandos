(function () {

    $('.elements').hide();

    const select = (Element, all = false) => {
        Element = Element.trim()
        if(all) {
            return [...document.querySelectorAll(Element)]
        } else {
            return document.querySelector(Element)
        }
    }

    let preloader = select(".loading")
    window.addEventListener("load", () => {
        setTimeout(() => {
            if(preloader) {
                preloader.remove()
                $('.elements').show()

                AOS.init({
                    duration: 1000,
                    once: true,
                    easing: "ease-in-out",
                    mirror: false
                })

                document.body.style.backgroundColor = "#d00424";
            }
        }, 1000)
    })
})()