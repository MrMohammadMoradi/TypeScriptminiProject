let rowNumber = 0,
    userName = document.getElementById('getName') as HTMLElement,
    userCity = document.getElementById('getCity') as HTMLElement,
    userCountry = document.getElementById('getCountry') as HTMLElement,
    userAge = document.getElementById('getAge')  as HTMLElement,
    table = document.getElementsByClassName('InforamationTable')



const editRow = document.querySelector('.Edit'),
    submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', () => {
    let name = userName.value
    let city = userCity.value
    let country = userCountry.value
    let age = userAge.value

    rowNumber++
    
    let trOfTable = document.createElement('tr', '') as HTMLElement,
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

