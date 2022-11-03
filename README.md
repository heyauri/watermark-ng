# watermark-up
Watermark that can be mounted on any specified HTML element instead of `document.body` only.

Modified from package `watermark-plus@1.6.0` for personal usage
Original version: [link](https://gitee.com/yanhuakang/watermark)

The useage of this package is highly similar with the above package `watermark-plus`, except this package has introduced some new properties, the `parentElement` and the `parentElementId`.

A new mothod `load` is also offered for some modifications of the created watermark. However, most properties of such function can be reload but the `parentElement` that the watermark dom element has already been mounted on.

## Usage

```js
const watermark = new Watermark({
    content: 'Hello World!',
    parentElement: document.querySelector("#target")
});

watermark.create();

// to show the reload
setTimeout(() => {
    watermark.load({
        content: "1234567890"
    })
}, 5200)
```

