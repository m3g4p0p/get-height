# get-height

Get the "potential" height of a hidden DOM element, that is, an element that has set `display: none` or `hidden=true`.

## Mkay

This can be useful if you want to apply a CSS driven slide-up animation to a previously hidden element, as you can't have a transition from `display: none` to `height: auto` (obviously). For example. It was the motivation for me at any rate...

```css
.hidden {
  display: none;
}

.about-to-slide-down {
  display: block;
  height: 0;
  overflow: hidden;
  transition: height .2s ease;
}
```

```javascript
import { getHeight } from 'get-height'

// Then at some point...
const element = document.querySelector('.hidden')

getHeight(element).then(height => {
  element.classList.add('about-to-slide-down')

  window.requestAnimationFrame(() => {
    element.style.height = height + 'px'
  })

  element.addEventListener('transitionend', () => {
    element.style.height = 'auto'
  }, { once: true })
})
```

## Installation

```
yarn add get-height
```


## API

```
getHeight(element: HTMLElement, includeMargins: boolean = true): Promise<number>
```

## Why asynchronous?

In order to determine the height the element would have on the page, the DOM has to be temporarily rearranged a bit. This is getting scheduled in animation frames to avoid layout thrashing and the performance issues of jQuery's [`outerHeight()`](https://api.jquery.com/outerHeight/) method (also, the element will not be visible at any point).

## License

MIT@m3g4p0p
