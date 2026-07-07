function calculateEMI() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value) / 12 / 100;
  const tenureYears = parseFloat(document.getElementById("loanTenure").value);
  const tenureMonths = tenureYears * 12;

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(tenureMonths)) {
    document.getElementById("emiResult").innerText = "Please enter valid values.";
    return;
  }

  const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, tenureMonths)) /
              (Math.pow(1 + interestRate, tenureMonths) - 1);

  document.getElementById("emiResult").innerText = `Monthly EMI: ₹${emi.toFixed(2)}`;
}

function calculateInterest() {
  const principal = parseFloat(document.getElementById("principalAmount").value);
  const rate = parseFloat(document.getElementById("interestRateDeposit").value);
  const time = parseFloat(document.getElementById("timePeriod").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    document.getElementById("interestResult").innerText = "Please enter valid values.";
    return;
  }

  const interest = (principal * rate * time) / 100;
  const total = principal + interest;

  document.getElementById("interestResult").innerText =
    `Interest: ₹${interest.toFixed(2)} | Total Amount: ₹${total.toFixed(2)}`;
}

function submitMembershipForm() {
  const name = document.getElementById("memberName").value;
  const email = document.getElementById("memberEmail").value;

  if (!name || !email) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Membership form submitted!\nName: ${name}\nEmail: ${email}`);
}

function calculateRBInterest() {
  const principal = parseFloat(document.getElementById("rbPrincipal").value);
  const rate = parseFloat(document.getElementById("rbRate").value);
  const days = parseFloat(document.getElementById("rbDays").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(days)) {
    document.getElementById("rbResult").innerText = "⚠️ Please enter valid values.";
    return;
  }

  // Formula: (Principal × ROI × Days) / 365
  const interest = (principal * rate * days) / 36500; // divide by 100 for %
  const total = principal + interest;

  document.getElementById("rbResult").innerText =
    `Interest: ₹${interest.toFixed(2)} | Total Amount: ₹${total.toFixed(2)}`;
}

