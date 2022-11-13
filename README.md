# watermark-ng
Pure js `Watermark` library that can be mounted on any specified HTML block element instead of the `document.body` only.

Extended from package `watermark-plus@1.6.0` for personal usage. [Original version here](https://gitee.com/yanhuakang/watermark)

What have been promoted in this package:
- ✅ Custom parment that the watermark can be mounted on instead of only the `body`
- ✅ Compatible with IE 11
- ✅ a watermark removed callback is introduced
- ✅ easier to reload some later content, tips or any other properties for the created watermak

## Detail Introduction

The watermark DOM element now can be mounted on any specified HTML block element via two properties: the `parentElement` and the `parentElementId`.

A new mothod `load` is also introduced for some later modifications of the created watermark. However, most properties of such function can be reload including the `parentElement` that the watermark DOM element has already been mounted on.

If the watermark-mounted `parentElement` is needed to be changed, generated a new `Watermark` instance and then delete the old one is highly recommanded.

Besides, compatibility problem of `IE 11` is solved in this library.

Under some circumstances, the watermark DOM element will be removed not in an appropriate way that not follow a regular manner of the website and result in some unforeseenable consequnces. Hence, there is a callback `onWatermarkRemove` will be triggered when the observer find out that the watermark is removed by any methods other than the `destory` function.

## Usage

### install
```shell
npm install watermark-ng
```

### basic usage
```js
import Watermark from "watermark-ng"

const watermark = new Watermark({
    content: 'Hello World!',
    parentElement: document.querySelector("#target"),
    onWatermarkRemove:function(){
        alert("Oops...the watermark is removed!");
    }
});

watermark.create();

// to show the reload
setTimeout(() => {
    watermark.load({
        content: "Bye",
        parentmentId: "targetNext"
    })
}, 1234);
```

