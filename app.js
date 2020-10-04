//Selectors

const nameInput = document.querySelector('.nameInput');
const emailInput = document.querySelector('.emailInput');
const subjectInput = document.querySelector('.subjectInput');
const messageInput = document.querySelector('.messageInput');
const formSubmit = document.querySelector('.form-submit');

//Event Listeners
formSubmit.addEventListener('click', SendContactForm);


//Functions

function SendContactForm(event){
    //stop refresh
    event.preventDefault();
    //Gets dateTime for timestamp
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    //concatinate log
    const Responses = "Name: " + nameInput.value + " " + "Email: " + emailInput.value + " " + "Subject: " + subjectInput.value + " " + "Message: " + messageInput.value;
    console.log(dateTime + " " + Responses)
//Clear after input
   nameInput.value = "";
   emailInput.value = ""; 
   subjectInput.value = "";
    messageInput.value = "";
}
