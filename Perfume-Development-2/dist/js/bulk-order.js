// BULK ORDER FORM
const products = [
  { name: 'Chrome accusamus doloru', unitPrice: 50, discount: 10 },
  { name: 'Woody accusamus dolorum', unitPrice: 60, discount: 15 },
  { name: 'Citrus dolorum', unitPrice: 45, discount: 5 },
  { name: 'Fruity dolorum', unitPrice: 55, discount: 12 },
  { name: 'Herbal/Green Orhama', unitPrice: 65, discount: 8 },
  { name: 'Oriental Gold', unitPrice: 70, discount: 10 },
  { name: 'Gourmand Ephraim', unitPrice: 75, discount: 20 },
];

// Function to populate select options from products array
function populateOptions() {
  const select = document.getElementById('pick');
  products.forEach(function (product) {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
  });
}

// Call function to populate options on page load
populateOptions();

let totalPrice = 0; // Variable to store total price

// Function to add a product to the summary table
let serialNumber = 1; // Initialize serial number counter
function addProduct() {
  // Get selected product and quantity
  const productName = document.getElementById('pick').value;
  const quantity = parseInt(document.getElementById('total-quantity').value);

  // Validate selected inputs
  if (
    productName === '' &&
    (quantity === '' ||
      isNaN(quantity) ||
      quantity < 1 ||
      !Number.isInteger(quantity))
  ) {
    showAlert(['Please select a product and valid quantity!'], 'error');
    return;
  }

  if (productName === '') {
    showAlert(['Please select a product!'], 'error');
    return;
  }

  if (
    quantity === '' ||
    isNaN(quantity) ||
    quantity < 1 ||
    !Number.isInteger(quantity)
  ) {
    showAlert(['Please enter a valid quantity !'], 'error');
    return;
  }

  // Find the selected product from the products array
  const selectedProduct = products.find(function (product) {
    return product.name === productName;
  });

  // Extract unit price and discount from selected product
  const unitPrice = selectedProduct.unitPrice;
  const discount = selectedProduct.discount;

  // Calculate total price for this item
  const totalPriceForItem = unitPrice * quantity * (1 - discount / 100); // Apply discount

  // Update total price variable
  totalPrice += totalPriceForItem;

  // Create table row and cells
  const table = document.getElementById('summaryTable');
  const row = table.querySelector('tbody').insertRow();

  // Get current number of rows in the table body
  const currentRowCount = table.rows.length - 1; // Subtract serial no... row

  // Insert S/N (Serial Number) cell
  const serialCell = row.insertCell(0);
  serialCell.innerText = currentRowCount; // Display serial number

  // Insert other cells
  const productCell = row.insertCell(1);
  const quantityCell = row.insertCell(2);
  const unitPriceCell = row.insertCell(3);
  const discountCell = row.insertCell(4);
  const actionCell = row.insertCell(5); // Added cell for Action (Remove button)

  // Create Remove button with icon
  const removeButton = document.createElement('span');
  removeButton.innerHTML = '&#10006;'; // Using X symbol as remove icon
  removeButton.classList.add('remove-icon');
  removeButton.setAttribute('onclick', 'removeProduct(this)');
  actionCell.appendChild(removeButton);

  // Assign values to the cells
  productCell.innerText = productName;
  quantityCell.innerText = quantity;
  unitPriceCell.innerText = '$' + unitPrice.toFixed(2); // Format unit price as currency
  discountCell.innerText = discount + '%';

  // Update total price display outside the table
  document.getElementById('totalPriceDisplay').innerText =
    '$' + totalPrice.toFixed(2);

  // Clear input fields after adding product
  document.getElementById('pick').value = ''; // Clear product selection
  document.getElementById('total-quantity').value = ''; // Clear quantity input
}

function showAlert(messages, type) {
  // Create the alert element
  const alertElement = document.createElement('div');
  alertElement.classList.add('alert', `alert-${type}`);

  // Create paragraphs for each message
  messages.forEach((message) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    alertElement.appendChild(paragraph);
  });

  // Get the form or section where you want to display alerts
  const form = document.querySelector('.order-form'); // Corrected class name

  // Remove any existing alerts
  const existingAlert = form.querySelector('.alert');
  if (existingAlert) {
    existingAlert.remove();
  }

  // Insert alert at the top of the form
  form.prepend(alertElement); // Use prepend to add the alert as the first child

  // Automatically dismiss the alert after 3 seconds
  setTimeout(function () {
    alertElement.remove();
  }, 3000);
}

// Function to remove a product from the summary table
function removeProduct(button) {
  const row = button.parentNode.parentNode; // Get the row containing the remove button

  // Extract the total price for the item to be removed
  const productName = row.cells[1].innerText.trim(); // Get the product name from the first cell of the row
  const quantity = parseInt(row.cells[2].innerText); // Get the quantity from the second cell of the row
  const selectedProduct = products.find(function (product) {
    return product.name === productName;
  });

  // Extract unit price and discount from selected product
  const unitPrice = selectedProduct.unitPrice;
  const discount = selectedProduct.discount;

  // Calculate total price for this item
  const totalPriceForItem = unitPrice * quantity * (1 - discount / 100); // Apply discount

  // Update the total price variable
  totalPrice -= totalPriceForItem;

  // Remove the row from the table
  row.parentNode.removeChild(row);

  // Update total price display outside the table
  document.getElementById('totalPriceDisplay').innerText =
    '$' + totalPrice.toFixed(2);

  // Update serial numbers after removing the row
  const table = document.getElementById('summaryTable');
  const rows = table.rows;

  // Loop through rows starting from the first data row (after the header)
  for (let i = 1; i < rows.length; i++) {
    rows[i].cells[0].innerText = i; // Update S/N to current index
  }
}

// Defien placeOrder() function
function placeOrder() {
  // Get the summary table and its rows
  const table = document.getElementById('summaryTable');
  const rows = table
    .getElementsByTagName('tbody')[0]
    .getElementsByTagName('tr');

  // Check if the table is empty
  if (rows.length === 0) {
    // Show alert for empty order summary
    showAlert(['No items placed for order!'], 'error');
    return; // Exit the function to prevent further actions
  }

  // Construct the order details message
  let orderMessage = 'Hello, I would like to place this order:\n';

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    const productName = cells[1].innerText;
    const quantity = cells[2].innerText;
    const unitPrice = cells[3].innerText;
    const discount = cells[4].innerText;

    orderMessage += `${
      i + 1
    }. ${productName} - Quantity: ${quantity}, Unit Price: ${unitPrice}, Discount: ${discount}\n`;
  }

  orderMessage += `Total Price: ${
    document.getElementById('totalPriceDisplay').innerText
  }`;

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(orderMessage);

  // WhatsApp target link with the encoded message
  const whatsappLink = `https://wa.me/+2348101336792?text=${encodedMessage}`;

  // Redirect to WhatsApp
  window.location.href = whatsappLink;

  // Show success alert
  showAlert(['Order placed successfully!'], 'success');

  // Clear the order summary table after placing order (optional)
  table.getElementsByTagName('tbody')[0].innerHTML = '';

  // Reset serial number to start from 1 again
  serialNumber = 1;

  // Reset total price
  totalPrice = 0;

  // Update total price display outside the table
  document.getElementById('totalPriceDisplay').innerText =
    '$' + totalPrice.toFixed(2);
}
