import { nextFrame, replaceWith, getOuterHeight, isHidden } from './util'

export const getHeight = (element: HTMLElement, includeMargins: boolean = true): Promise<number> => {
  if (!isHidden(element)) {
    return Promise.resolve(getOuterHeight(element, includeMargins))
  }

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
    const height = getOuterHeight(element, includeMargins)

    element.style.display = display
    element.hidden = hidden
    replaceWith(wrapper, element)

    return height
  }))
}
