# tldoc

[![npm](https://img.shields.io/npm/v/tldoc.svg)](https://www.npmjs.com/package/tldoc)

Parses documentation like this:

```tl
//@class MaskPoint @description Part of the face, relative to which a mask should be placed

//@description A mask should be placed relatively to the mouth
maskPointMouth = MaskPoint;

//@description A mask should be placed relatively to the chin
maskPointChin = MaskPoint;

//@description Position on a photo where a mask should be placed @point Part of the face, relative to which the mask should be placed
//@x_shift Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. (For example, -1.0 will place the mask just to the left of the default mask position)
//@y_shift Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. (For example, 1.0 will place the mask just below the default mask position)
//@scale Mask scaling coefficient. (For example, 2.0 means a doubled size)
maskPosition point:MaskPoint x_shift:double y_shift:double scale:double = MaskPosition;
```


TDLib [uses this](https://github.com/tdlib/td/blob/d1f1a14a37c8f11fb5ff82615678837f872eb752/td/generate/scheme/td_api.tl).

---

### Installation

```console
$ npm i tldoc
```
