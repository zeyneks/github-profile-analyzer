export default {
    async fetch(request) {

        const url = new URL(request.url);
        const username = url.searchParams.get("username");

        if (!username) {
            return new Response(
                JSON.stringify({
                    error: "Username is required"
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
        }

        try {

            const response = await fetch(
                `https://api.github.com/users/${username}`
            );

            if (!response.ok) {
                return new Response(
                    JSON.stringify({
                        error: `GitHub API returned ${response.status}`
                    }),
                    {
                        status: response.status,
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                );
            }

            const data = await response.json();

            return new Response(
                JSON.stringify(data),
                {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

        } catch (error) {

            return new Response(
                JSON.stringify({
                    error: "Failed to contact GitHub"
                }),
                {
                    status: 500,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
        }
    }
};