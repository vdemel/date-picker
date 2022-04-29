const pushIt = document.getElementById('push')
const getIt = document.getElementById('get')
const gender = document.getElementById('gender')
const activity = document.getElementById('activity')
const button = document.getElementById('button1')
const picture = document.getElementById('picture')
const buttonClick = document.getElementById('button')

buttonClick.addEventListener('click', () => {
    location.href = "datepage.html"
})

    const getRandomUserData = () => {
        
        fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const firstName = data.results[0].name.first
            const lastName = data.results[0].name.last
            const cityLocation = data.results[0].location.city
            const country = data.results[0].location.country
            const randomPicture = data.results[0].picture.large

            picture.innerHTML = `<img src="${randomPicture}" alt="" id="picture"></img>`
            picture.style.display = "flex";
            picture.style.alignItems = "center";
            picture.style.justifyContent = "center";
            picture.style.paddingTop = "10px";

            pushIt.innerHTML = firstName + " " + lastName
            getIt.innerHTML = "Age: " + data.results[0].dob.age
            gender.innerHTML = cityLocation + ", " + country
        })
    }

    const getRandomActivity = () => {
        fetch(`https://www.boredapi.com/api/activity/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            activity.innerHTML = "Task: " + data.activity
        })
    }

   button.addEventListener("click", function() {
    getRandomUserData()
    getRandomActivity()
  });

  