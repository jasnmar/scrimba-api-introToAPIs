/**
 Challenge:

 With the 5 blog post objects, display the `title` and `body`
properties of the first 5 posts on the browser page.
 
 Hints: 
 * Create a `div` in the HTML file to store these items
 * Loop over the items creating a string of HTML elements you 
   can then put into the div with `innerHTML`
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
    .then(response => response.json())
    .then(data => {
        data.splice(5)
        console.log(data)
        const myDiv = document.createElement('div')
        document.body.appendChild(myDiv)
        let htmlToCreate = ""
        data.forEach(post => {
            htmlToCreate += `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            `
        });
        myDiv.innerHTML = htmlToCreate
    })