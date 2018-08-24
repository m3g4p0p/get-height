import { nextFrame, replaceWith } from './util'

export const getHeight = (
  element: HTMLElement,
  parse: Boolean | String = false
): Promise<String | Number> => {
  const wrapper = document.createElement('div')
  const { hidden, style: { display } } = element

  Object.assign(wrapper.style, {
    height: 0,
    margin: 0,
    padding: 0,
    overflow: 'hidden'
  })

  return nextFrame(() => {
    wrapper.appendChild(replaceWith(element, wrapper))
    element.style.display = 'block'
    element.hidden = false
  }).then(() => nextFrame(() => {
    const { height } = window.getComputedStyle(element)

    element.style.display = display
    element.hidden = hidden
    replaceWith(wrapper, element)

    switch (parse) {
      case 'float':
        return parseFloat(height)

      case 'int':
      case true:
        return parseInt(height, 10)

      default:
        return height
    }
  }))
}
