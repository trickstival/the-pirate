export const closest = (el, selector) => {
    while (el) {
        if (el === selector || el.matches(selector)) {
            return el
        }
        el = el.parentElement
    }
}

/**
 * Scrolls to element
 * @param {String|Element} targetEl Element or query selector
 */
export const scrollTo = (targetEl) => {
    const el = typeof targetEl === 'string' 
        ? document.querySelector(targetEl)
        : targetEl

    const behavior = 'smooth'
    if (el.scrollIntoView) {
        el.scrollIntoView({ behavior, block: 'start' })
        return
    }
    const elementY = window.pageYOffset + el.getBoundingClientRect().top
    window.scroll({
        top: elementY,
        left: 0,
        behavior
    })
}
