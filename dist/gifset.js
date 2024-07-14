console.log("Welcome to Gifting Area!")

const DOMStrings = {
    send : '.send',
    senderName :'.name-input',
    senderEmail :'.email-input',
    senderPhone: '.phone-input',
    subject: '.subject-input',
    messageAlert: '.dialog-overlay',
    messageAlertWarning: '.dialog-box-msg',
    closeMessageAlert: '.close-btn',
    discountEmail: '.emailvalue1',
    discountPhone: '.phonevalue1',
    discountButton: '.signup-button1',
 }


 // Email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) { 
    return emailRegex.test(email);
}


 //Open dialogue Box
function openBox(){
    document.querySelector(DOMStrings.messageAlert).style.visibility = 'visible'

}

//close Dialogue box 
document.querySelector(DOMStrings.closeMessageAlert).addEventListener('click', closeBox)

function closeBox(){
    document.querySelector(DOMStrings.messageAlert).style.visibility = 'hidden'
}


//Sign up and discount form
////////////////////////
document.querySelector(DOMStrings.discountButton).addEventListener('click', sendDiscountRequest)


function sendDiscountRequest(e){
    e.preventDefault()
    let signupEmail = document.querySelector(DOMStrings.discountEmail).value
    let signupPhone = document.querySelector(DOMStrings.discountPhone).value

    let getPhoneNumber = validateNigerianPhoneNumber(signupPhone)
    let getSignUpEmail = validateEmail(signupEmail)

    if(getPhoneNumber === false || getSignUpEmail === false){
        document.querySelector(DOMStrings.messageAlertWarning).innerHTML = 'Please enter correct email or phone number!'
        openBox()
    }else{
        document.querySelector(DOMStrings.messageAlertWarning).innerHTML = 'Signed Up Succesfully!'
        openBox()
        
        document.querySelector(DOMStrings.discountEmail).value = ''
        document.querySelector(DOMStrings.discountPhone).value = ''
        
    }

}


const nigeriaPhoneRegex = /^(?:\+234|0)?[789]\d{9}$/;

function validateNigerianPhoneNumber(phoneNumber) {
    return nigeriaPhoneRegex.test(phoneNumber);
}
