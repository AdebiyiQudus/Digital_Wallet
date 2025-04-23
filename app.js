document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('userName').innerText = document.getElementById('name').value;
  alert('Signup successful!');
});

function openSignup() {
  document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
}

function sendMoney() {
  let history = document.getElementById('history-list');
  let newTransaction = document.createElement('li');

  newTransaction.innerText = 'Sent $100 to another user';
  history.appendChild(newTransaction);
  alert('Money sent successfully!');
}

function donateZakat() {
  let history = document.getElementById('history-list');
  let newTransaction = document.createElement('li');

  newTransaction.innerText = 'Donated $50 as Zakat';
  history.appendChild(newTransaction);
  alert('Zakat donation successful!');
}

function requestWithdrawal() {
  let amount = prompt('Enter withdrawal amount:');
  if (amount && !isNaN(amount)) {
      let history = document.getElementById('history-list');
      let newTransaction = document.createElement('li');
      
      newTransaction.innerText = `Requested withdrawal of $${amount}`;
      history.appendChild(newTransaction);
      alert('Withdrawal request submitted!');
  } else {
      alert('Invalid amount');
  }
}

function scanQR() {
  alert('QR Payment feature coming soon!');
}

function investNow() {
  alert('Explore Islamic investment opportunities coming soon!');
}