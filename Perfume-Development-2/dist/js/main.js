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

//  Trigger "active class" on nav-links
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

  navLinks.forEach(function (navLink) {
    // Check if the current URL matches the href of the nav-link
    if (navLink.href === window.location.href) {
      navLink.classList.add('active');
    }

    navLink.addEventListener('click', function (event) {
      // Remove 'active' class from all nav-links
      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });

      // Add 'active' class to the clicked nav-link
      this.classList.add('active');
    });
  });
});
