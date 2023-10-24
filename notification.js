// This JavaScript code will handle the sending of birthday notifications.

// Request permission from the user to show notifications.
Notification.requestPermission().then(function(permission) {
    // If the user has granted permission to show notifications, enable the notification code.
    if (permission === 'granted') {
      // Enable the notification code.
  
      // Get the saved birthdays table body
      const savedBirthdaysTableBody = document.querySelector('#saved-birthdays tbody');
  
      // Add an event listener to the "Delete" button of each saved birthday row
      savedBirthdaysTableBody.addEventListener('click', function(event) {
        // Get the row that was clicked
        const row = event.target.closest('tr');
  
        // Get the birthday date from the row
        const birthday = row.querySelector('td:nth-child(2)').innerText;
  
        // Calculate the remaining days until the birthday
        const remainingDays = Math.floor((Date.parse(birthday) - Date.now()) / (1000 * 60 * 60 * 24));
  
        // If the birthday is in less than 5 minutes, send a notification
        if (remainingDays < 0.008333333333333333) {
          // Check if the user has granted permission to show notifications.
          if (Notification.permission !== 'granted') {
            // If the user has not granted permission to show notifications, do not show the notification.
            return;
          }
  
          // Create a new notification
          const notification = new Notification('Birthday Reminder!', {
            body: 'Your fav person birthday is coming up in 5 minutes!'
          });
  
          // Show the notification
          notification.show();
        }
      });
    }
  });
  