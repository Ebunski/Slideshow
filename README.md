# 7. Slideshow

Slideshow with react

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Features:
Slideshow on click and auto-slide.

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover and active states for all interactive elements on the page
- Slide between the slides

### Screenshot

![](./screenshot.jpg)

### Links


- Live Site URL: https://ebunski-slideshow.netlify.app/

### Built with

- React javascript
- CSS custom properties and dynamically rendered css classes
- Flexbox and grid

## My process

- I went through the mobile and desktop styles on the css files
- Created the layout of the components
- Gave the page life with the magic of javascript.

### What I learnt

1. React:

How to use setInterval and clearInterval - cleanup
Dynamically render prev,active and next classes
Accounted for current index being 0 in calculating previous - checking if its index === data.length-1 (end-of-array error)

2. Css

Slides are initially stacked due to the absolute class of article
Dynamic styles with transform properties are used to place them left or right - activeSlide,lastSlide,nextSlide(default)
Opacity and overflow to hide.

Overall it was a very wonderful project.

## Author

- Website - [coming soon...]
- LinkedIn - https://www.linkedin.com/in/ebunoluwa-oyebola-1490021b1
- Twitter - [@Ebun_ski](https://www.twitter.com/Ebun_ski)
- Email - [ebunoyebola03@gmail.com]

## Acknowledgments

Thank you freecodecamp for this series.
