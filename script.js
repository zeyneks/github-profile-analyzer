const usernameInput = document.querySelector("#username");
const searchButton = document.querySelector("#search-btn");
const profileContainer = document.querySelector("#profile-container");


// Search when button is clicked
searchButton.addEventListener("click", searchProfile);


// Search when Enter is pressed
usernameInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        searchProfile();
    }

});


function searchProfile() {

    const username = usernameInput.value.trim();

    // Check if username is empty
    if (username === "") {

        alert("Please enter a GitHub username.");
        return;

    }

    showLoading();

    fetchGitHubProfile(username);

}


function showLoading() {

    profileContainer.innerHTML = `
        <div class="loading">
            Loading profile...
        </div>
    `;

}


function fetchGitHubProfile(username) {

    fetch(`https://api.github.com/users/${username}`)

        .then(response => {

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }

            return response.json();

        })

        .then(data => {

            displayProfile(data);

        })

        .catch(error => {

            console.error(error);

            profileContainer.innerHTML = `
                <div class="error-message">
                    <h2>Unable to load profile</h2>
                    <p>Something went wrong while contacting GitHub.</p>
                </div>
            `;

        });

}


function displayProfile(data) {

    profileContainer.innerHTML = `
        <div class="profile-card">

            <img
                src="${data.avatar_url}"
                alt="${data.login}"
            >

            <h2>${data.name || data.login}</h2>

            <p>@${data.login}</p>

            <p>${data.bio || "No bio available."}</p>

            <div class="stats">

                <p>Followers: ${data.followers}</p>

                <p>Following: ${data.following}</p>

                <p>Repositories: ${data.public_repos}</p>

            </div>

        </div>
    `;

}
