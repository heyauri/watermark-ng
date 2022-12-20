# watermark-ng
Pure js `Watermark` library that can be mounted on any specified HTML block element instead of the `document.body` only.

Extended from package `watermark-plus@1.6.0` for personal usage. [Original version here](https://gitee.com/yanhuakang/watermark)

What have been promoted in this package:
- ✅ Any custom block element that the watermark can be mounted on instead of only the `body`
- ✅ Compatible with IE 11
- ✅ Introduce a new callback while the watermark is removed under inappropriate method (via `Dev tools` or other code)
- ✅ Easier to reload some later content, tips or any other properties for the created watermark
- ✅ More than one watermark instance can now be applied within the same web-page as long as each instance has specified different `outerId` and `innerId`
- ✅ After the web page is resized, the watermark will reload automatically, which will prevent any display issues of the watermark

## Detail Introduction

The watermark DOM element now can be mounted on any specified HTML block element via two properties: the `parentElement` and the `parentElementId`.

A new method `load` is also introduced for some later modifications of the created watermark. Nearly every properties can be reload using this method including the `parentElement` that the watermark DOM element has already been mounted on.

If the watermark-mounted `parentElement` is needed to be changed, delete the old one and then  generated a new `Watermark` instance is recommended.

Besides, compatibility problem of `IE 11` is solved in this library.

Under some circumstances, the watermark DOM element will be removed not in an appropriate way that not follow a regular manner of the website and result in some unforeseeable consequences. Hence, there is a callback `onWatermarkRemove` will be triggered when the observer find out that the watermark is removed by any methods other than the `destroy` function.

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
        parentElementId: "targetNext"
    })
}, 1234);
```

### (Part of the) Options 

| Name              | Type        | Default         | Description                                                                                                                                                                                                       |
| ----------------- | ----------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| content           | String      | `''`            | The text content of the watermark                                                                                                                                                                                 |
| tip               | String      | `''`            | The second text content of the watermark. If it is undefined, only the `content` will be shown                                                                                                                    |
| parentElementId   | String      | `''`            | The id of the element that the watermark instance will be mounted on                                                                                                                                              |
| parentElement     | DOM Element | `document.body` | The element that the watermark instance will be mounted on (higher priority)                                                                                                                                      |
| fontSize          | Number      | `18`            | Font size                                                                                                                                                                                                         |
| rotate            | Number      | `330`           | Rotate of the text (in degree)                                                                                                                                                                                    |
| fontFamily        | String      | `'sans-serif'`  | Font family                                                                                                                                                                                                       |
| alpha             | Number      | `0.25`          | Text alpha                                                                                                                                                                                                        |
| color             | String      | `'#666666'`     | Text color                                                                                                                                                                                                        |
| onSuccess         | Function    | `function(){}`  | Called after the watermark is created successfully                                                                                                                                                                |
| onDestroy         | Function    | `function(){}`  | Called after the watermark is destroyed successfully                                                                                                                                                              |
| onWatermarkRemove | Function    | `function(){}`  | Called after the watermark is removed not in appropriate way (via `Dev Tools` or other code)                                                                                                                             |
| innerId           | String      | `'wm-ng-inner'` | If you need to applied more than one watermark instances within the same web-page, at least one watermark instance should have specified a different innerId. Otherwise the display of watermark may be affected. |
| outerId           | String      | `'wm-ng'`       | If you need to applied more than one watermark instances within the same web-page, at least one watermark instance should have specified a different outerId. Otherwise the display of watermark may be affected. |


### Examples 

How to applied two watermark within the same page:
```js
// Watermark One
const watermark = new Watermark({
    content: 'Hello World!',
    parentElementId: "target1",
});
watermark.create();

// Watermark Two
const watermark2 = new Watermark({
    content: 'Second watermark',
    parentElementId: "target2",
    innerId:"wm2-inner",
    outerId:"wm2-outer",
});
watermark2.create();
```
