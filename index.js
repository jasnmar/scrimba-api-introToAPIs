

/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API

*/

const findBtn = document.getElementById("get-idea")

findBtn.addEventListener('click', function(e) {
    e.preventDefault()
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            const activityEl = document.getElementById("activity-name")
            activityEl.textContent = data.activity
        })
        }
)












/*
document.getElementById("bored-bot").addEventListener("click", getIdea)

function getIdea() {
    fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json())
        .then(data => {
            document.body.classList.add("fun")
            document.getElementById("idea").textContent = data.activity
            document.getElementById("title").textContent = "🦾 HappyBot🦿"
        })
}
*/

// //Challenge 2
// const placementDiv = document.getElementById("info-here")
// const paraEl = document.createElement("p")

// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(response => response.json())
//     .then(data => {
//         paraEl.textContent = data.activity
//         placementDiv.appendChild(paraEl)
//     })