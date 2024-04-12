/**
 Challenge:

 Style it up!
 
 * Add a short (~30px height) fixed navbar at the top with the text "BlogSpace". Remember to pad the top of your content so it doesn't get hidden behind the navbar.
 * Add a font from Google Fonts.
 * Any other styling you want to make it look nice!
 
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
    .then(response => response.json())
    .then(data => {
        data.splice(5)
        console.log(data)
        const myDiv = document.createElement('div')
        myDiv.id="post-data"
        document.querySelector("main").appendChild(myDiv)
        let htmlToCreate = ""
        data.forEach(post => {
            htmlToCreate += `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <hr />
            `
        });
        myDiv.innerHTML = htmlToCreate
    })

    /**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console

*/

const postForm = document.getElementById("post-form")
postForm.addEventListener('submit', submitNewPost)

function submitNewPost(e) {
    e.preventDefault()
    const fData = new FormData(postForm)
    console.log(fData.get("title"))
    const pData = {
        "title": fData.get("title"),
        "body": fData.get("body")
    }
    console.log(pData)


}