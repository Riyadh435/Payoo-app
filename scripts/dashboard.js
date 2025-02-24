// Log out 

const logout = document.getElementById("btn-logout");
logout.addEventListener("click", function (e) {
  e.preventDefault();
  alert("লগআউট সফল হয়েছে");
  window.location.href = "./index.html";
});

// Toggle the sidebar

document.getElementById("sendmoney").addEventListener("click", function () {
  document.getElementById("send-money-section").style.display = "block";
  document.getElementById("add-money-section").style.display = "none"; // Hide the send money section
});
document.getElementById("addmoney").addEventListener("click", function () {
  document.getElementById("send-money-section").style.display = "none";
  document.getElementById("add-money-section").style.display = "block"; // Hide the send money section
});



// Add money to the account
document.getElementById("addMoneyBtn").addEventListener("click", function (event) {
    event.preventDefault(); 

    const mainBalanceElement = document.getElementById("main-balance");
    let balance = parseFloat(mainBalanceElement.innerText);

    const addAmountInput = document.getElementById("add-amount");
    let amount = parseFloat(addAmountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("❌ দয়া করে একটি বৈধ টাকার পরিমাণ লিখুন!");
        return;
    }

    // Update balance
    balance += amount;
    mainBalanceElement.innerText = balance.toFixed(2); // Format balance properly
    addAmountInput.value = "";

    alert(`✅ ${amount} টাকা সফলভাবে যোগ করা হয়েছে!`);
});

















// Send money to another account
document.getElementById("sendMoneyBtn").addEventListener("click", function (event) {
    event.preventDefault(); 

    const mainBalanceElement = document.getElementById("main-balance");
    let balance = parseFloat(mainBalanceElement.innerText);

    const sendAmountInput = document.getElementById("send-amount");
    let amount = parseFloat(sendAmountInput.value);

    // Ensure valid input
    if (isNaN(amount) || amount <= 0) {
        alert("❌ দয়া করে একটি বৈধ টাকার পরিমাণ লিখুন!");
        return;
    }

    // Check if balance is sufficient
    if (balance < amount) {
        alert("❌ আপনার ব্যালেন্স যথেষ্ট নেই!");
        return;
    }
    balance -= amount;
    mainBalanceElement.innerText = balance.toFixed(2); 

    
    sendAmountInput.value = "";

    alert(`💸 ${amount} টাকা সফলভাবে পাঠানো হয়েছে!`);
});
