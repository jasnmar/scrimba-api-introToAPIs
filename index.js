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
        document.body.appendChild(myDiv)
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