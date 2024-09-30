let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function validForm(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let address = document.getElementById("address")
    let phone = document.getElementById("phone")
    let conditions = document.getElementById("condition")

    if(name.value.length == 0) {
        alert("Please fill in your name!");
    }   
    else if(email.value.length == 0){
        alert("Please fill in your email!");
    }
    else if(password.value.length == 0){
        alert("Please fill in your password!");
    }
    else if(address.value.length == 0){
        alert("Please fill in your address!");
    }
    else if(phone.value.length == 0){
        alert("Please fill in your phone number!");
    }
    else if(isNaN(phone.value)){
        alert("Please Fill using numbers");
    }
    else if(conditions.checked == false){
        alert("Please agree if you've checked your data throroughly!");
    }
    else if(message.value.length == 0){
        alert("Please fill in message!");
    }

}
