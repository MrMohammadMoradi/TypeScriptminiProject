"use strict";

// set basic variabels
var rowNumber = 0,
    counter = 0,
    userName = document.getElementById('getName'),
    userCity = document.getElementById('getCity'),
    userCountry = document.getElementById('getCountry'),
    userAge = document.getElementById('getAge'),
    submitBtn = document.getElementById('submit');
var list = []; // table = document.getElementsByClassName('InformationTable'),
// Event Click 

submitBtn.addEventListener('click', function () {
  var name = userName.value,
      city = userCity.value,
      country = userCountry.value,
      age = userAge.value;
  rowNumber++;
  counter++; // build tr and td for add to table 

  var table = document.createElement('table', ''),
      trOfTable = document.createElement('tr', ''),
      rowInTable = document.createElement('td'),
      nameInTable = document.createElement('td'),
      cityInTable = document.createElement('td'),
      countryInTable = document.createElement('td'),
      ageInTable = document.createElement('td'),
      editInTable = document.createElement('td'),
      deleteInTable = document.createElement('td');
  editRow = document.createElement("button");
  editValue = document.createTextNode(" Edit");
  editRow.appendChild(editValue);
  deleteRow = document.createElement("button");
  deleteValue = document.createTextNode(" Delete");
  deleteRow.appendChild(deleteValue); // srt style for tr and td

  trOfTable.style.color = 'rgb(243, 249, 249)';
  trOfTable.style.fontSize = 'bold';
  rowInTable.style.paddingRight = '20px';
  nameInTable.style.paddingRight = '60px';
  cityInTable.style.paddingRight = '50px';
  countryInTable.style.paddingRight = '70px';
  ageInTable.style.paddingRight = '65px';
  editRow.style.padding = '10px';
  deleteRow.style.padding = '10px';
  editInTable.style.paddingRight = '75px';
  deleteInTable.style.paddingRight = '60px'; //set variables amount

  rowInTable.innerHTML = rowNumber;
  nameInTable.innerHTML = name;
  cityInTable.innerHTML = city;
  countryInTable.innerHTML = country;
  ageInTable.innerHTML = age;
  editInTable.innerHTML = editRow.value;
  deleteInTable.innerHTML = deleteRow.value; //append td in tr and tr in table

  editInTable.appendChild(editRow);
  deleteInTable.appendChild(deleteRow);
  trOfTable.appendChild(rowInTable);
  trOfTable.appendChild(nameInTable);
  trOfTable.appendChild(cityInTable);
  trOfTable.appendChild(countryInTable);
  trOfTable.appendChild(ageInTable);
  trOfTable.appendChild(editInTable);
  trOfTable.appendChild(deleteInTable);
  table.appendChild(trOfTable);
  document.body.appendChild(table); //add edit and delete function

  editRow.addEventListener('click', function (e) {
    var userName = document.getElementById('getName'),
        userCity = document.getElementById('getCity'),
        userCountry = document.getElementById('getCountry'),
        userAge = document.getElementById('getAge');
    eParent = e.parentNode.parentNode;
    var trOfTable = document.createElement('tr', ''),
        nameInTable = document.createElement('td'),
        cityInTable = document.createElement('td'),
        countryInTable = document.createElement('td'),
        ageInTable = document.createElement('td');
    nameInTable.innerHTML = '<input type="text" id="getName1" placeholder="نام خود را وارد کنید " required>';
    cityInTable.innerHTML = '<input type="text" id="getCity1" placeholder="شهر خود را وارد کنید" required>';
    countryInTable.innerHTML = '<input type="text" id="getCountry1" placeholder="کشور خود را وارد کنید "required>';
    ageInTable.innerHTML = '<input type="number" id="getAge1" placeholder=" سن خود را وارد کنید" required>';
    editInTable.innerHTML = '<input id="subEdit" type="Button" value="Edit">';
    deleteInTable.innerHTML = '<input id="delete" type="Button" value="Delete">';
    trOfTable.replaceChild(rowInTable);
    trOfTable.replaceChild(nameInTable);
    trOfTable.replaceChild(cityInTable);
    trOfTable.replaceChild(countryInTable);
    trOfTable.replaceChild(ageInTable);
    trOfTable.replaceChild(editInTable);
    trOfTable.replaceChild(deleteInTable);
    table.replaceChild(trOfTable);
  });
  deleteRow.addEventListener('click', function (e) {
    var delbtn = e.target;
    delbtn.closest('table').remove();
    counter--;
  });
  console.log(counter);
});