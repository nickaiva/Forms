"use strict";
// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementsByTagName('form')[0];
const result = document.getElementById('result');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

email.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (email.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.textContent = ''; // Reset the content of the message
        emailError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showEmailError();
    }
});

form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit

    if (!email.validity.valid) {
        // If it isn't, we display an appropriate error message
        showEmailError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
    if (!country.validity.valid) {
        // If it isn't, we display an appropriate error message
        showCountryError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    } 
    if (!zip.validity.valid) {
        // If it isn't, we display an appropriate error message
        showZipError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    } 
    if (!password.validity.valid) {
        // If it isn't, we display an appropriate error message
        showPasswordError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    } 
    if (!confirm.validity.valid) {
        // If it isn't, we display an appropriate error message
        showConfirmError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    } 
    if(confirm.value !== password.value){
        alert("Passwords do not match!");
        event.preventDefault();
    } else {
        result.innerText="Successfully saved!";
    }
    
});

function showEmailError() {
    if (email.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        emailError.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address
        // display the following error message.
        emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if (email.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    }

    // Set the styling appropriately
    emailError.className = 'error active';
}
/* Country */
const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');

country.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (country.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        countryError.textContent = ''; // Reset the content of the message
        countryError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showCountryError();
    }
});



function showCountryError() {
    if (country.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        countryError.textContent = 'You need to enter a valid country!';
    } else if (country.validity.typeMismatch) {
        // If the field doesn't contain a country
        // display the following error message.
        countryError.textContent = 'Entered value needs to be valid country!';
    } else if (country.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        countryError.textContent = `Country should be at least ${ country.minLength } characters; you entered ${ country.value.length }.`;
    }

    // Set the styling appropriately
    countryError.className = 'error active';
}
/* Zip */
const zip = document.getElementById('zip');
const zipError = document.querySelector('#zip + span.error');

zip.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (zip.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        zipError.textContent = ''; // Reset the content of the message
        zipError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showZipError();
    }
});



function showZipError() {
    if (zip.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        zipError.textContent = 'You need to enter a valid zip!';
    } else if (zip.validity.typeMismatch) {
        // If the field doesn't contain a zip
        // display the following error message.
        zipError.textContent = 'Entered value needs to be valid zip!';
    } else if (zip.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        zipError.textContent = `Zip should be at least ${ zip.minLength } characters; you entered ${ zip.value.length }.`;
    }

    // Set the styling appropriately
    zipError.className = 'error active';
}
/* Password */ 
const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

password.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (password.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        passwordError.textContent = ''; // Reset the content of the message
        passwordError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showPasswordError();
    }
});



function showPasswordError() {
    if (password.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        passwordError.textContent = 'You need to enter a valid password!';
    } else if (password.validity.typeMismatch) {
        // If the field doesn't contain a value
        // display the following error message.
        passwordError.textContent = 'Entered value needs to be valid password!';
    } else if (password.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        passwordError.textContent = `Password should be at least ${ password.minLength } characters; you entered ${ password.value.length }.`;
    }

    // Set the styling appropriately
    passwordError.className = 'error active';
}

/* confirm */
const confirm = document.getElementById('confirm');
const confirmError = document.querySelector('#confirm + span.error');

confirm.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (confirm.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        confirmError.textContent = ''; // Reset the content of the message
        confirmError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showConfirmError();
    }
});



function showConfirmError() {
    if (confirm.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        confirmError.textContent = 'You need to enter a valid confirmation!';
    } else if (confirm.validity.typeMismatch) {
        // If the field doesn't contain a confirm
        // display the following error message.
        confirmError.textContent = 'Entered value needs to be valid confirmation';
    } else if (confirm.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        confirmError.textContent = `Confirmation should be at least ${ confirm.minLength } characters; you entered ${ confirm.value.length }.`;
    }

    // Set the styling appropriately
    confirmError.className = 'error active';
}

