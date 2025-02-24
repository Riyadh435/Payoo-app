const logout = document.getElementById('btn-logout');
logout.addEventListener('click', function(e) {
    e.preventDefault();
    alert('লগআউট সফল হয়েছে');
    window.location.href = './index.html';
});


const sendmoneybtn = document.getElementById('sendmoney');

sendmoneybtn.addEventListener('click', function(event) {
    alert("টাকা পাঠানো হয়েছে");


});