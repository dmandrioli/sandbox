---
layout: default
title: deliteful/ViewStack
---

# deliteful/ViewStack

`deliteful/ViewStack` is a container that has multiple children, but shows only one child at a time. Moving from one child to another is accomplished via a transition.
 
Transition types:
 1. Slide (reverse=false)
 2. Reveal
 3. Flip
 4. Fade
 
![ViewStack Transitions](images/ViewStack.png)

##### Table of Contents
[Element Instantiation](#instantiation)  
[Element Configuration](#configuration)  
[Element Styling](#styling)  
[User Interactions](#interactions)  
[Mixins](#mixins)  
[Element Events](#events)  
[Enteprise Use](#enterprise)  

<a name="instantiation"></a>
## Element Instantiation

See [`delite/Widget`](/delite/docs/Widget) for full details on how instantiation lifecycle is working.

### Declarative Instantiation

```js
require(["delite/register", "deliteful/LinearLayout", "dojo/domReady!"], function (register) {
  register.parse();
});
```

```html
<html>
  <d-linear-layout vertical="false" style="width:100%, height:50px">
    <div style="width: 20%">Left (20%)</div>
    <div class="fill">Center (Fill Space)</div>
    <div style="width: 50px">Right (50px)</div>
  </d-linear-layout>
</html>
```

### Programmatic Instantiation

```js
require(["deliteful/LinearLayout", "dojo/domReady!"], function (LinearLayout) {
  var layout = new LinearLayout({vertical: false, width:"100%"});
  var leftChild = document.createElement("div"); 
  var centerChild = document.createElement("div");
  var rightChild = document.createElement("div");
  leftChild.style.width = "20%";
  centerChild.class = "fill";
  rightChild.style.width = "50px";
  layout.addChild(leftChild);
  layout.addChild(centerChild);
  layout.addChild(rightChild);
  layout.placeAt(document.body);
  layout.startup();
});
```


## Element Configuration

### Properties

The layout direction is controlled by the `vertical` property which is `true` by default.

In addition to the `fill` CSS class, this element provides two utility CSS classes: `width100` and `height100` that respectively set width and height to 100%.

<a name="styling"></a>
## Element Styling

Since `deliteful/LinearLayout` has no visual appearance, it does not provide CSS classes for styling.

If `vertical` is `true`, the height of `deliteful\LinearLayout` must be explicitly set, otherwise the width must be explictly set. 

To set the height of a `deliteful/LinearLayout` using a percentage expression, the height of all its ancestors (including `<body>`) must also be expressed as percentage.

## Styling Exceptions

Using `padding-top` and `padding-bottom` on the `deliteful/LinearLayout` is discouraged since it's not well supported on Firefox.

<a name="interactions"></a>
## User Interactions

`deliteful/LinearLayout` does not provide any user interaction.

<a name="enterprise"></a>
## Enterprise Use

### Accessibility

Rely on browser.

### Globalization

`deliteful/LinearLayout` does not provide any internationalizable bundle. 

Right to left orientation is supported by setting the `dir` attribute to `rtl`on the `deliteful/LinearLayout` element:

```js
<d-linear-layout dir="rtl"></d-linear-layout>
```

### Security

This widget as no specific security concern. Refers to `delite/Widget` documentation for general security advices on this base class that `deliteful/LinearLayout` is using.

### Browser Support

This widget supports all supported browsers except Internet Explorer 9.

## See also
### Samples
### Blog posts…


