function saveData() {
    const firstName = document.getElementById("first__name").value;
    const lastName = document.getElementById("last__name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;
    const languages = document.querySelectorAll('input[type="checkbox"]:checked');
  
    let table = document.getElementById("data").getElementsByTagName("tbody")[0];
    let row = table.insertRow();
  
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = birthdate;
    cell4.innerHTML = gender;
    cell5.innerHTML = city;
    cell6.innerHTML = address;
    cell7.innerHTML = languages;

}


