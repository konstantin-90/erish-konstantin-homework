function showTable() {
    // Отримати значення полів форми
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;
    const languages = document.querySelectorAll('input[name="languages"]:checked');
  
    // Створити HTML таблицю та заповнити її даними
}

