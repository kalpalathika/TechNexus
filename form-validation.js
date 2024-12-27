function validateForm() {
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const company = document.getElementById('company').value.trim();
    const subscribe = document.getElementById('subscribe').checked;


    if (!firstName) {
        alert("First Name is required.");
        return false;
    }

    if (!/^[a-zA-Z]+$/.test(firstName)) {
        alert("First Name should only contain letters.");
        return false;
    }

    if (lastName && !/^[a-zA-Z]+$/.test(lastName)) {
        alert("Last Name should only contain letters.");
        return false;
    }

    if (!email) {
        alert("Email is required.");
        return false;
    }

    if (company && !/^[a-zA-Z]+$/.test(company)) {
        alert("Organization should only contain letters.");
        return false;
    }

    if (!subscribe) {
        alert("You must agree to receive emails and accept the terms and conditions.");
        return false;
    }

    return true;
}
