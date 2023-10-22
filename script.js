
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const dateInput = document.getElementById('date');
const nrpInput = document.getElementById('nrp');


form.addEventListener('submit', function (e) {
    let isValid = true;

    // Validate Full Name
    if (nameInput.value.trim() === '') {
        alert('Full Name is required');
        isValid = false;
    }

    // Validate Email Address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Invalid Email Address');
        isValid = false;
    }

    // Validate Password
    if (passwordInput.value.length < 8) {
        alert('Password must be at least 8 characters');
        isValid = false;
    }

    // Validate Birth Date
    if (dateInput.value.trim() === '') {
        alert('Birth Date is required');
        isValid = false;
    }

    // Validate Referral Code
    if (nrpInput.value.trim() === '' || isNaN(nrpInput.value) || nrpInput.value.length !== 10) {
        alert('Invalid Referral Code. It should be a 10-digit number');
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault(); // jika ada salah satu yang tdk valid, maka tdk bisa submit
    }
});
