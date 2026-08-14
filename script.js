const usernameInput = document.querySelector("#username");
const searchButton = document.querySelector("#search-btn");
const profileContainer = document.querySelector("#profile-container");
const reposContainer = document.querySelector("#repos-container");

searchButton.addEventListener("click", searchProfile);
usernameInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        searchProfile();

    }

});

function searchProfile() {

    const username = usernameInput.value.trim();

    if (username === "") {
        alert("Please enter a GitHub username.");
        return;
    }
    showLoading();

    fetchGitHubProfile(username);
    fetchGitHubRepos(username);
}

function fetchGitHubProfile(username) {

    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
      .then(data => {

    if (data.message === "Not Found") {

        profileContainer.innerHTML = `
            <h2>User Not Found 😢</h2>
        `;

        return;
    }

    displayProfile(data);

});

}
function fetchGitHubRepos(username) {

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {

            console.log(data);

        });

}

function displayProfile(data) {

    profileContainer.innerHTML = `
        <div class="profile-card">

            <img src="${data.avatar_url}" alt="${data.login}">

            <h2>${data.name}</h2>

            <p>@${data.login}</p>

            <p>${data.bio}</p>

            <div class="stats">

                <p>Followers: ${data.followers}</p>

                <p>Following: ${data.following}</p>

                <p>Repositories: ${data.public_repos}</p>

            </div>

        </div>
    `;

}
function showLoading() {

    profileContainer.innerHTML = `
        <div class="loading">

            Loading profile...

        </div>
    `;

}