const PWNED_API = "https://haveibeenpwned.com/api/v2/breachedaccount/{account}";

fetch(PWNED_API)
.then(response => response.json())
.then(data => {

    console.log(data);
    var userEmail = document.querySelector("#userTextEmail");
console.log(userEmail);


})

































