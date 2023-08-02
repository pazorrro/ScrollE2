# Scroll2.js - Scroll Animation Library

Scroll2.js is a JavaScript library that allows you to easily add scroll animations to elements on your webpage. It leverages the popular animate.css library for smooth and eye-catching animations. This library is designed to be lightweight and customizable, giving you the flexibility to create engaging scroll animations with minimal effort.

**Note: Scroll2.js accepts CSS selectors as keys, which can include class selectors (e.g., ".img"), element selectors (e.g., "p"), and ID selectors (e.g., "#example").**

## Getting Started

To use Scroll2.js, simply include the following script in your HTML file:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<script src="https://raw.githubusercontent.com/pazorrro/ScrollE2/main/scrollE2.js"></script>
```

## Basic Usage

The basic usage of Scroll2.js involves creating a dictionary that maps CSS selectors to their corresponding animations. Here's an example:

```javascript
// Example dictionary
const dict = {
  ".img": "animate__fadeInRight",
  "p": "animate__fadeInUp",
};

// Create Scroll2 instance and initialize
const scroll = new Scroll2(dict);
scroll.init();
```

In this example, all elements with the class "img" will have a fade-in animation from the right, and all "p" elements will have a fade-in animation from the bottom.

## Advanced Usage

Scroll2.js allows you to apply different animations to the same selector in sequence using an array of animations. For example:

```javascript
// Advanced example with array of animations
const dict = {
  ".img": ["animate__fadeInRight", "animate__fadeInLeft"],
};

// Create Scroll2 instance and initialize
const scroll = new Scroll2(dict);
scroll.init();
```

In this case, elements with the class "img" will alternate between a fade-in animation from the right and a fade-in animation from the left on each scroll event.

## Customization with Setters

Scroll2.js provides convenient setters to customize the scroll animation behavior. You can set the distance from the bottom of the page at which the animation should trigger, the animation duration, and whether elements should remain visible after scrolling. Here's an example:

```javascript
// Example with custom settings
const dict = {
  ".img": "animate__fadeInRight",
};

// Create Scroll2 instance with custom settings
const scroll = new Scroll2(dict)
  .setDistance(200)          // Set distance from the bottom of the page to trigger the animation (in pixels)
  .setTime(1)                // Set animation duration (in seconds)
  .setDisplayAfterScroll(true);  // Set whether elements should remain visible after scrolling

scroll.init();
```

With these settings, elements with the class "img" will start animating when they are 200 pixels above the bottom of the page, the animation duration will be 1 second, and elements will remain visible after scrolling.

## Conclusion

Scroll2.js provides a simple and powerful way to add scroll animations to your webpage elements. With its customizable settings and support for arrays of animations, you can create engaging and visually appealing scroll effects to enhance your user experience. Happy scrolling!
