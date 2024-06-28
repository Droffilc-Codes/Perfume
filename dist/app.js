//MakeUr Brand
// Pop up the Message delivery dialog box once the message fields are completed

//Views
//UI Contoller
const DOMStrings = {
   send : '.sendBrand',
   brandStory : 'moreInfo',
   scents :'scents',
   emailBrand :'.emailBrand',
   messageAlert: '.dialog-overlay',
   messageAlertWarning: '.dialog-box-msg',
   closeMessageAlert: '.close-btn',
   discountEmail: '.emailvalue1',
   discountPhone: '.phonevalue1',
   discountButton: '.signup-button1'
}

//Model
//Save messages
const saveUser = []

//Controller
//Send details
document.querySelector(DOMStrings.send).addEventListener('click', (e)=>{
    e.preventDefault()
    let getStory = document.getElementById(DOMStrings.brandStory).value //get the user's brand idea
    let getScent = document.getElementById(DOMStrings.scents).value // get the type of scent
    let getEmail = document.querySelector(DOMStrings.emailBrand).value // get the email of the user

    let rejectEmail = validateEmail(getEmail) //validation of email

    if(getEmail === '' || rejectEmail === false){ // if a wrong email is filled or nothing is filled display warning
            console.log("Plase enter email address")
            document.querySelector(DOMStrings.messageAlertWarning).innerHTML = 'Plase enter correct email address!'
            openBox()
        }else{
            //Show that message has been sent successfully
            document.querySelector(DOMStrings.messageAlertWarning).innerHTML = 'Message Sent Succesfully!'
            openBox()

                saveUser.push( //store user information
                    {
                        brandStory: getStory,
                        scents: getScent,
                        emailBrand: getEmail
                    }
                )
    }
})

//Open dialogue Box
function openBox(){
    document.querySelector(DOMStrings.messageAlert).style.visibility = 'visible'

}
//close Dialogue box and clear fields
document.querySelector(DOMStrings.closeMessageAlert).addEventListener('click', closeBox)

function closeBox(){
    document.querySelector(DOMStrings.messageAlert).style.visibility = 'hidden'
    clearFields()
}

function clearFields(){ // clear fields after dialog box is closed
    document.getElementById(DOMStrings.brandStory).value = "";
    document.getElementById(DOMStrings.brandStory).placeholder = "Tell us about your brand Story. Is it elegant and sophisticated, youthful and playful, luxurious and exclusive, natural and organic, or trendy and avant-garde?";

    document.getElementById(DOMStrings.scents).value = "";
    document.getElementById(DOMStrings.scents).selectedIndex = 0;

    document.querySelector(DOMStrings.emailBrand).value = "";
}


// Email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) { 
    return emailRegex.test(email);
}



//Sign up and discount form
document.querySelector(DOMStrings.discountButton).addEventListener('click', sendDiscountRequest)


function sendDiscountRequest(e){
    e.preventDefault()
    let signupEmail = document.querySelector(DOMStrings.discountEmail).value
    let signupPhone = document.querySelector(DOMStrings.discountPhone).value

    let getPhoneNumber = validateNigerianPhoneNumber(signupPhone)
    let getSignUpEmail = validateEmail(signupEmail)

    if(getPhoneNumber === false || getSignUpEmail === false){
        console.log("Please enter correct email or phone number")
        document.querySelector(DOMStrings.messageAlertWarning).innerHTML = 'Please enter correct email or phone number!'
        openBox()
    }else{
        console.log("You have signed up for news about Discounts!")
        document.querySelector(DOMStrings.messageAlertWarning).innerHTML = 'Message Sent Succesfully!'
        openBox()
        
        document.querySelector(DOMStrings.discountEmail).value = ''
        document.querySelector(DOMStrings.discountPhone).value = ''
        
    }

}



const nigeriaPhoneRegex = /^(?:\+234|0)?[789]\d{9}$/;

function validateNigerianPhoneNumber(phoneNumber) {
    return nigeriaPhoneRegex.test(phoneNumber);
}