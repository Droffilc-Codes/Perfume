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

const perfume = [
    {
        name: 'Chrome accusamus One',
        img: 'images/male1.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '120ML',
        cost: '₦5,000',
        gender: 'male'
    },
    {
        name: 'Chrome accusamus Two',
        img: 'images/male2.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '100ML',
        cost: '₦5,000',
        gender: 'male'

    },
    {
        name: 'Chrome accusamus Three',
        img: 'images/male3.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '120ML',
        cost: '₦5,000',
        gender: 'male'
    },
    {
        name: 'Chrome accusamus Four',
        img: 'images/male4.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '120ML',
        cost: '₦7,000',
        gender: 'male'

    },
]


const perfumeforWomen = [
    {
        name: 'Chrome accusamus Five',
        img: 'images/male1.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '120ML',
        cost: '₦5,000',
        gender: 'female'
    },
    {
        name: 'Chrome accusamus Six',
        img: 'images/male2.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '100ML',
        cost: '₦5,000',
        gender: 'female'
    },
    {
        name: 'Chrome accusamus Seven',
        img: 'images/male3.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '120ML',
        cost: '₦5,000',
        gender: 'female'
    },
    {
        name: 'Chrome accusamus Eight',
        img: 'images/male4.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '120ML',
        cost: '₦7,000',
        gender: 'female'
    }
]


const perfumeBoard = document.querySelector('.men-fragrance')
const perfumeSecondBoard = document.querySelector('.women-fragrance')

const createMenPerfumes = function(){
    for(let i = 0; i < perfume.length; i++){
        const clickPerfume = document.createElement('a')
        clickPerfume.setAttribute('href', '#')

        const perfumeBlock = document.createElement('div')
        perfumeBlock.setAttribute('class', `fragrance-1 male1 maleBrand-${i}`)
        perfumeBlock.setAttribute('data-index', i)

        const perfumeImage = document.createElement('img')
        perfumeImage.setAttribute('src', perfume[i].img)
        perfumeImage.setAttribute('class', 'fragrance-image')

        const perfumeName = document.createElement('h4')
        perfumeName.innerHTML =`${perfume[i].name}`


        perfumeBlock.appendChild(perfumeImage)
        perfumeBlock.appendChild(perfumeName)
        clickPerfume.appendChild(perfumeBlock)
        perfumeBoard.appendChild(clickPerfume)
    }
}

const createWomenPerfumes = function(){
    for(let i = 0; i < perfumeforWomen.length; i++){
        const clickPerfume = document.createElement('a')
        clickPerfume.setAttribute('href', '#')

        const perfumeBlock = document.createElement('div')
        perfumeBlock.setAttribute('class', `fragrance-1 female1 femalebrand-${i}`)
        perfumeBlock.setAttribute('data-index', i)


        const perfumeImage = document.createElement('img')
        perfumeImage.setAttribute('src', perfumeforWomen[i].img)
        perfumeImage.setAttribute('class', 'fragrance-image')

        const perfumeName = document.createElement('h4')
        perfumeName.innerHTML =`${perfumeforWomen[i].name}`


        perfumeBlock.appendChild(perfumeImage)
        perfumeBlock.appendChild(perfumeName)
        clickPerfume.appendChild(perfumeBlock)
        perfumeSecondBoard.appendChild(clickPerfume)
    }
}

createMenPerfumes()
createWomenPerfumes()


//Click a Product and Display

const malePerfume = document.querySelectorAll('.male1')

const femalePerfume = document.querySelectorAll('.female1')


function productInfo(dataSet, index){

    const product = dataSet[index]

    document.getElementById('dialog-product-name').innerText = product.name
    document.getElementById('dialog-perfume-image').src = product.img
    document.getElementById('dialog-brand-name').innerText = product.brandName
    document.getElementById('dialog-product-description').innerText = product.productDescription
    document.getElementById('dialog-product-size').innerText = product.productSize
    document.getElementById('dialog-product-cost').innerText = product.cost
    document.getElementById('product-dialog').style.visibility = 'visible'
    document.getElementById('Whatsapp-order').setAttribute('href', `https://wa.me/+2348036317828?text=Hello%2C%20I%20would%20like%20to%20order%20${product.name}.`)


   
}


malePerfume.forEach((db, index)=>{
    db.addEventListener('click', (e)=>{
        e.preventDefault()
        productInfo(perfume,index)
        
    })
})


femalePerfume.forEach((db, index)=>{
    db.addEventListener('click', (e)=>{
        e.preventDefault()
        productInfo(perfumeforWomen,index)
    })
})

document.getElementById('dialog-close').addEventListener('click', ()=>{
    document.getElementById('product-dialog').style.visibility = 'hidden'
})




//Sign up and discount form
////////////////////////
//Open dialogue Box
function openBox(){
    document.querySelector(DOMStrings.messageAlert).style.visibility = 'visible'

}
//close Dialogue box and clear fields
document.querySelector(DOMStrings.closeMessageAlert).addEventListener('click', closeBox)

function closeBox(){
    document.querySelector(DOMStrings.messageAlert).style.visibility = 'hidden'
}


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

// Email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) { 
    return emailRegex.test(email);
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
    // console.log(emptyArray);
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