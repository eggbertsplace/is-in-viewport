/**
 *
 * @param {*} elem
 * Check if element is in viewport or not
 */

const isInViewport = function (elem) {
    const distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom  <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.bottom  <= (window.innerWidth || document.documentElement.clientWidth)
    );
};