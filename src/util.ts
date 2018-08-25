export const nextFrame = (callback: Function): Promise<any> => new Promise(resolve =>
  window.requestAnimationFrame(now =>
    resolve(callback ? callback(now) : now)))

export const replaceWith = (oldChild: Node, newChild: Node): Node => {
  const { parentNode } = oldChild

  if (!parentNode) {
    throw new ReferenceError('The old child has no parent node!')
  }

  parentNode.insertBefore(newChild, oldChild)
  parentNode.removeChild(oldChild)

  return oldChild
}

export const isHidden = (element: HTMLElement): boolean =>
  element.hidden || window.getComputedStyle(element).display === 'none'

export const addFloat = (...values: string[]): number =>
  values.reduce((sum, value) => sum + parseFloat(value), 0)

export const getOuterHeight = (element: HTMLElement, includeMargins: boolean): number => {
  const {
    height,
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    boxSizing
  } = window.getComputedStyle(element)

  const values = [height]

  if (includeMargins) {
    values.push(marginTop, marginBottom)
  }

  if (boxSizing !== 'border-box') {
    values.push(paddingTop, paddingBottom)
  }

  return addFloat(...values)
}
