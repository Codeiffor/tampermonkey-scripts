// ==UserScript==
// @name         colorful-calendar
// @namespace    https://calendar.google.com/
// @version      0.1
// @description  random colors for calendar events
// @author       codeiffor
// @match        https://calendar.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

const defaultColor = 'rgb(102, 102, 102)';

const colors = [
  "rgb(0, 0, 139)",
  "rgb(34, 139, 34)",
  "rgb(65, 105, 225)",
  "rgb(255, 140, 0)",
  "rgb(102, 51, 153)",
  "rgb(139, 0, 0)",
  "rgb(0, 128, 128)",
  "rgb(148, 0, 211)",
  "rgb(205, 133, 63)",
  "rgb(50, 205, 50)",
  "rgb(128, 0, 128)",
  "rgb(39, 174, 96)",
  "rgb(108, 182, 125)",
  "rgb(0, 77, 102)",
  "rgb(255, 0, 0)"

];

function randomizeColors() {
    'use strict';

    // Your code here...

    const elems = document.querySelectorAll('[data-eventchip]');
    console.log(elems)
    elems.forEach(el => {
        const randomColor = colors[Math.floor(colors.length * Math.random())]
        if (el.style.backgroundColor === defaultColor) {
            el.style.backgroundColor = randomColor;
        } else if (el.style.borderColor === defaultColor) {
            el.style.borderColor = randomColor;
            if (el.childNodes && el.childNodes[1]) {
                el.childNodes[1].style.color = randomColor;
            }
        }
    });

}

let timer
function lazyUpdate() {
    if (timer != null) {
        clearTimeout(timer);
    }
    timer = setTimeout(randomizeColors, 200);
}

document.addEventListener("DOMSubtreeModified", function(){ lazyUpdate(); }, false);
