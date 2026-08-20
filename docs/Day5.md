---




# Day 5 — GitHub API Integration

## Goal
Connect the JavaScript frontend to GitHub's REST API and retrieve real GitHub profile data.

## Work Done

### 1. Introduced `fetch()`

Learned how JavaScript can make HTTP requests using the `fetch()` API.

Basic flow:

Frontend → fetch() → GitHub API → JSON response → JavaScript → UI

### 2. GitHub User API

Started requesting real GitHub user information using a username.

The application could retrieve information such as:

- Username
- Name
- Profile picture
- Bio
- Followers
- Following
- Public repository count

### 3. JSON Responses

Learned how APIs return data in JSON format.

Example:


const data = await response.json();

console.log(data.name);
console.log(data.followers);