export const closest = (el, selector) => {
    while (el) {
        if (el === selector || el.matches(selector)) {
            return el
        }
        el = el.parentElement
    }
}
