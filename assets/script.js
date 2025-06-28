console. log("Hello, world");

//1.binding ikat form yang sudah ada
//2. masukkan data dari form ke dalam variable
//3. simpan data ke dalam local storage

const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const messageInput = document.getElementById("message");

var firstName = "";
var lastName = "";
var message = "";

firstNameInput.addEventListener('input', function(Event) {
    firstName= Event.target.value;
    localStorage.setItem('first_name', firstName);
    console.log(firstName)
})

lastNameInput.addEventListener('input', function(Event) {
    lastName= Event.target.value;
    localStorage.setItem('last_name',lastName);
    console.log(lastName)
})

messageInput.addEventListener('input', function(Event) {
    message= Event.target.value;
    localStorage.setItem('message', message);
    console.log(message)
})

//tahapan submit data
//1. binding/ikat tag form yang sudah ada
//2. ambil data dari localstorage
//3. tampilkan data ke dalam alter

const formElement = document.getElementById("form-contact");

formElement.addEventListener('submit', function(Event) {
    Event.preventDefault();

    if (!firstName || !lastName ||!message) {
        alert("please fill in all fields");
    }

    const objectInput = {
        firstName: localStorage.getItem('first_name'),
        lastName: localStorage.getItem('last_name'),
        message: localStorage.getItem('message')
    }

    alert(`first Name: ${objectInput.firstName}\nlast Name: ${objectInput.
    lastName}\nMessage: ${objectInput.message}`);
})