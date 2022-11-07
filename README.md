# watermark-up
Pure js `Watermark` library that can be mounted on any specified HTML element instead of `document.body` only.

Modified from package `watermark-plus@1.6.0` for personal usage.
Original version: [link](https://gitee.com/yanhuakang/watermark)

The usage of this package is highly similar with the above package `watermark-plus`, except this package has introduced some new properties, such as the `parentElement` and the `parentElementId`.

A new mothod `load` is also introduced for some later modifications of the created watermark. However, most properties of such function can be reload but the `parentElement` that the watermark dom element has already been mounted on.

If the watermark-mounted `parentElement` is needed to be changed, generated a new `Watermark` instance and then delete the old one is recommanded.

Besides, compatibility problem of `IE 11` is solved in this library.

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
        content: "Bye"
    })
}, 5200)
```

