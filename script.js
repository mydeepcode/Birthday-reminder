// This JavaScript code will handle the form submission and the display of saved birthdays.

// Get the form elements
const nameInput = document.querySelector('#add-birthday input[type="text"]');
const birthdayInput = document.querySelector('#add-birthday input[type="date"]');
const notificationCheckbox = document.querySelector('#add-birthday input[type="checkbox"]');

// Get the saved birthdays table body
const savedBirthdaysTableBody = document.querySelector('#saved-birthdays tbody');

// Add an event listener to the form submission button
document.querySelector('#add-birthday button').addEventListener('click', function() {
  // Get the birthday date
  const birthday = birthdayInput.value;

  // Validate the form inputs
  if (!nameInput.value || !birthday) {
    // Show an error message
    alert('Please enter a name and birthday.');
    return;
  }

  // Calculate the remaining days until the birthday
  const remainingDays = Math.floor((Date.parse(birthday) - Date.now()) / (1000 * 60 * 60 * 24));

  // Create a new row for the saved birthdays table
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${nameInput.value}</td>
    <td>${birthday}</td>
    <td>${remainingDays}</td>
    <td><input type="checkbox" name="notification"></td>
    <td><button type="button">Delete</button></td>
  `;

  // Add the new row to the saved birthdays table
  savedBirthdaysTableBody.appendChild(newRow);

  // Clear the form inputs
  nameInput.value = '';
  birthdayInput.value = '';
  notificationCheckbox.checked = false;
});


// Add an event listener to the "Delete" button of each saved birthday row
savedBirthdaysTableBody.addEventListener('click', function (event) {
    if (event.target.type === 'button') {
      // Handle the delete button
      const row = event.target.closest('tr');
      row.remove();
    }
  });
  




  