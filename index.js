let postsArray = []

fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
    .then(response => response.json())
    .then(data => {
        data.splice(5)
        postsArray = data
        console.log(postsArray)
        renderPosts()

    })

function renderPosts() {
    console.log("rendering posts")
    const postDiv = document.getElementById("post-data")
    let htmlToCreate = ""
    console.log(postsArray)
    postsArray.forEach(post => {
        console.log(post)
        htmlToCreate += `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr />
        `
    });
    postDiv.innerHTML = htmlToCreate
}

const postForm = document.getElementById("post-form")
postForm.addEventListener('submit', submitNewPost)

function submitNewPost(e) {
    e.preventDefault()
    const fData = new FormData(postForm)
    const pData = {
        title: fData.get("title"),
        body: fData.get("body")
    }
        /**
     * Challenge: Send this off to the server!
     * 
     * 1. BaseURL: https://apis.scrimba.com/jsonplaceholder/
     * 2. Endpoint: /posts
     * 3. method: ???
     * 4. Request body: ??? (Remember to turn it into JSON)
     * 5. Headers: ??? (Check the JSON Placeholder API docs or past casts for help)
     */
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(pData)
    })
        .then(res => res.json())
        .then(post => {
            const newPost = {
                title: post.title,
                body: post.body
            }
            postsArray.unshift(newPost)
            renderPosts()
            document.getElementById("post-form").reset()
            
        })
}