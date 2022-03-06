let rowNumber = 0,
    userName = document.getElementById('getName'),
    userCity = document.getElementById('getCity'),
    userCountry = document.getElementById('getCountry'),
    userAge = document.getElementById('getAge'),
    table = document.getElementsByClassName('InforamationTable')



const editRow = document.querySelector('.Edit'),
    submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', () => {
    this.name = userName.value
    this.city = userCity.value
    this.country = userCountry.value
    this.age = userAge.value

    rowNumber++
    
    let trOfTable = document.createElement('tr', ''),
        rowInTable = document.createElement('td'),
        nameInTable = document.createElement('td'),
        cityInTable = document.createElement('td'),
        countryInTable = document.createElement('td'),
        ageInTable = document.createElement('td'),
        editInTable = document.createElement('td'),
        deleteInTable = document.createElement('td')

    rowInTable.innerHTML = rowNumber
    nameInTable.innerHTML = name
    cityInTable.innerHTML = city
    countryInTable.innerHTML = country
    ageInTable.innerHTML = age
    editInTable.innerHTML = "Edit"
    deleteInTable.innerHTML = "Delet"

    trOfTable.appendChild(rowInTable)
    trOfTable.appendChild(nameInTable)
    trOfTable.appendChild(cityInTable)
    trOfTable.appendChild(countryInTable)
    trOfTable.appendChild(ageInTable)
    trOfTable.appendChild(editInTable)
    trOfTable.appendChild(deleteInTable)

    document.body.appendChild(trOfTable)

})

