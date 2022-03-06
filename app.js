let rowNumber = 0,
    userName = document.getElementById('getName'),
    userCity = document.getElementById('getCity'),
    userCountry = document.getElementById('getCountry'),
    userAge = document.getElementById('getAge')

const editRow = document.querySelector('.Edit'),
    submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', () => {
    this.name = userName.value
    this.city = userCity.value
    this.country = userCountry.value
    this.age = userAge.value

    
})

