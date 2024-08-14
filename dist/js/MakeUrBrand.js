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
   discountButton: '.signup-button1',
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




//SEARCH BOX 

// Define variables
const searchWrapper = document.querySelector('.search-input');
const inputBox = searchWrapper.querySelector('input');
const suggBox = searchWrapper.querySelector('.autocomplete-list');
const searchIcon = document.querySelector('.search-icon');

// Sample suggestions array
const suggestions = [
  'Calvin klein',
  'Chanel',
  'Dior',
  'Versace',
  'Giorgio Armani',
];

// On key up event Function
inputBox.onkeyup = (e) => {
  let userData = e.target.value; // enter user data-value
  let emptyArray = [];

  if (userData) {
    // Filter array value(s) to lowercase and return data that only start with entered word
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    // Map method() iterates through emptyArray and modifies the data, by adding li
    emptyArray = emptyArray.map((data) => {
      return (data = '<li>' + data + '</li>');
    });
    console.log(emptyArray);
    // Add classlist to search-input variable
    searchWrapper.classList.add('active'); // shows suggBox
    showSuggestions(emptyArray);
    let allList = document.querySelectorAll('li');
    for (let i = 0; i < allList.length; i++) {
      // Add onclick attribute to all li tags
      allList[i].setAttribute('onclick', 'select(this)');
    }

    // Save user input to local storage
    localStorage.setItem('searchInput', userData);
  } else {
    searchWrapper.classList.remove('active'); // hides suggBox
  }
};

// Define select() function
function select(element) {
  let selectUserData = element.textContent.trim();
  inputBox.value = selectUserData; // passes the selected user data list-item into the input-field (inputbox)
  searchWrapper.classList.remove('active'); // hides suggBox

  // Check if selected suggestion is valid
  if (!suggestions.includes(selectUserData)) {
    showAlert(['Please enter a valid brand!'], 'error');
    inputBox.value = ''; // Clear input field or handle invalid input as needed
  }
}

// Define showSuggestions callback function()
function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = '<li>' + userValue + '</li>';
  } else {
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}

// Show alert function
function showAlert(messages, type) {
  // Create the alert box
  const alertBox = document.createElement('div');

  // Add a className
  alertBox.className = 'alert-box'; // Default class for alert box

  // Create a paragraph element for messages and append to alertBox...
  alertBox.appendChild(document.createElement('p'));

  // Append the alert box to the body
  document.body.appendChild(alertBox);

  // Set the alert type
  alertBox.className = `alert-box ${type}`; // Add type class

  // Set the alert messages
  alertBox.querySelector('p').textContent = messages.join(' ');

  // Show the alert box
  alertBox.classList.add('show');

  // Hide the alert box after 3 seconds
  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 3000);
}

// Click event Listener for searchIcon
searchIcon.addEventListener('click', () => {
  let currentInputValue = inputBox.value.trim().toLowerCase();

  if (!currentInputValue) {
    // If input is empty, show alert
    showAlert(['Please enter a brand name!'], 'error');
    return; // Exit function early
  }

  // Redirect based on the currentInputValue directly
  switch (currentInputValue) {
    case 'calvin klein':
      window.location.href = 'result_calvin_klein.html';
      break;
    case 'chanel':
      window.location.href = 'result_chanel.html';
      break;
    case 'dior':
      window.location.href = 'result_dior.html';
      break;
    case 'versace':
      window.location.href = 'result_versace.html';
      break;
    case 'giorgio armani':
      window.location.href = 'result_giorgio_armani.html';
      break;
    default:
      showAlert(['Please enter a valid brand!'], 'error');
      break;
  }
});

// Add click event listener to document body to clear input and hide suggestions on click outside searchWrapper
document.body.addEventListener('click', (e) => {
  if (!searchWrapper.contains(e.target)) {
    // Clicked outside searchWrapper
    inputBox.value = ''; // Clear input field
    suggBox.innerHTML = ''; // Clear suggestion box content
    searchWrapper.classList.remove('active'); // Hide suggestion box

    // Clears saved user input from local storage when User clicks outside searchWrapper
    // localStorage.removeItem('searchInput');
  }
});