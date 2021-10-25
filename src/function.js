function css(props) {
    const object = require("./utils/objects.json")
    const css = Object.entries(props).filter(([key, value]) => key in object).map(([key, value]) => `${object[key]}: ${value};`)
   // css += responsive(props)
    return css
}
function responsive(props) {
    const phone = props.responsive.phone
    const pc = props.responsive.pc 

    if(phone && pc) {
        return `
        ${pc};
        @media (min-width: 600px) {
            ${phone};
        }
        `
    }
}
export { css }