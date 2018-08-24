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

export const addFloat = (...values: string[]): number => values.reduce((sum, value) => sum + parseFloat(value), 0)
