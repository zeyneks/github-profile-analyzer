# Day 3 - Bringing the Application to Life

## Goal

Transform the static webpage into an interactive web application using JavaScript and the GitHub REST API.

---

## Completed

### JavaScript Fundamentals

- Connected JavaScript with HTML elements
- Selected DOM elements using `querySelector()`
- Learned how the DOM represents HTML elements
- Created reusable functions
- Added click event handling using `addEventListener()`
- Implemented keyboard support (Press Enter to search)

---

### User Input

- Read user input using `.value`
- Removed unnecessary spaces using `.trim()`
- Validated empty input before making API requests
- Displayed alert for invalid searches

---

### GitHub API

- Made the first API request using `fetch()`
- Retrieved real-time user data from GitHub
- Parsed API response using `.json()`
- Learned the basic request-response cycle

---

### Dynamic Rendering

- Introduced `innerHTML`
- Generated HTML dynamically using JavaScript
- Displayed:

  - Profile Picture
  - Name
  - Username
  - Bio
  - Followers
  - Following
  - Public Repository Count

---

### Error Handling

- Detected invalid GitHub usernames
- Displayed a user-friendly "User Not Found" message

---

### Loading State

- Added a loading message while waiting for the API response
- Created a reusable `showLoading()` helper function

---

## JavaScript Concepts Learned

### DOM (Document Object Model)

JavaScript interacts with HTML through the DOM. Every HTML element becomes an object that JavaScript can access and modify.

---

### Event Listeners

Learned how JavaScript waits for user interactions such as button clicks and keyboard events.

Examples:

- click
- keydown

---

### Functions

Started organizing code into small reusable functions instead of writing everything inside one event listener.

Functions created:

- searchProfile()
- fetchGitHubProfile()
- displayProfile()
- showLoading()

---

### Objects

Learned how API responses are represented as JavaScript objects.

Accessed object properties using dot notation.

Examples:

- data.name
- data.login
- data.avatar_url
- data.followers

---

### Template Literals

Used backticks (``) together with `${}` to insert JavaScript values directly into HTML.

---

### Fetch API

Introduced asynchronous requests using `fetch()`.

Basic flow:

User → Browser → GitHub API → JSON Response → JavaScript Object → UI

---

## UI Improvements

- Added profile card
- Circular avatar image
- Better spacing
- Flexbox for profile statistics
- Keyboard search support (Enter key)

---

## Current Features

✅ Search GitHub profiles

✅ Display profile information

✅ Display profile image

✅ Display followers/following

✅ Public repository count

✅ Input validation

✅ Error handling

✅ Loading state

✅ Enter key support

---

## Lessons Learned

One function should ideally perform one responsibility.

Breaking code into smaller functions makes debugging, testing and future improvements much easier.

---

## Next Goals

- Display user's repositories
- Learn arrays
- Render multiple repository cards
- Improve loading animation
- Better error card design
- Responsive improvements
- Explore CSS Grid
- Refactor JavaScript using async/await