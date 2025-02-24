const loginbtn = document.getElementById('btn-login');
const number = document.getElementById('number');
const pin = document.getElementById('pin');

loginbtn.addEventListener('click', function(e) {
    e.preventDefault(); 
    if (number.value === '' || pin.value === '') {
        alert('অনুগ্রহ করে আপনার নম্বর এবং পিনটি দিন।');
    } else {
        if (pin.value === '1234') {
            alert('লগইন সফল হয়েছে');
            window.location.href = './dashboard.html'; 
        } else {
            alert('ভুল নম্বর বা পিন! অনুগ্রহ করে সঠিক তথ্য দিন।');
        }
    }
});
