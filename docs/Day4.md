# Day 4 — JavaScript & DOM Interaction

## Goal
Start converting the static HTML/CSS website into an interactive JavaScript application.

## Work Done

### 1. JavaScript basics
Started connecting JavaScript with the existing HTML page.

Learned how JavaScript can:
- Store values in variables
- Create and call functions
- Read values from HTML elements
- Change HTML content dynamically

### 2. DOM Manipulation
Started working with the DOM (Document Object Model).

Used JavaScript to select HTML elements and modify them.

Important concepts:
- `document.getElementById()`
- `document.querySelector()`
- `.textContent`
- `.innerHTML`

Basic flow:

HTML → JavaScript selects element → JavaScript modifies it → Browser updates UI

### 3. Event Handling
Added event listeners to respond to user actions.

Example:

```js
button.addEventListener("click", function () {
    // code
});