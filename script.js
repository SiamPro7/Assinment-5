let balance = 10000;
const history = [];


function renderHistory() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";

  history.forEach((entry, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("bg-white", "p-4", "rounded-lg", "shadow", "mb-4");

    listItem.innerHTML = `
      <p><strong>${entry.amount} Taka</strong> is Donated for ${entry.donatedAt}</p>
      <p class="text-gray-500 text-sm">Date: ${entry.date}</p>
    `;

    historyList.appendChild(listItem);
  });
}

// doantion modal controlling
const donationModal = document.getElementById("donation-modal");
const closeModalBtn = document.getElementById("close-modal");

const totatAmount = document.getElementById("total-amount");
totatAmount.innerText = `${balance}`;
// card-1
const donationBalanceOne = document.getElementById("donation-balance-one");
const donateInputOne = document.getElementById("donation-input-1");
const donationButtonOne = document.getElementById("first-donate-btn");

donationButtonOne.addEventListener("click", () => {
    
  const previous = parseFloat(donationBalanceOne.innerText);
  const amount = parseFloat(donateInputOne.value);

  const newTotal = previous + amount;

  balance -= amount;

  donationBalanceOne.innerText = `${newTotal}`;
  totatAmount.innerText = `${balance}`;

  const historyObj = {
    donatedAt: "Donate for Flood at Noakhali, Bangladesh",
    amount,
    date: new Date(),
  };
  history.push(historyObj);

  donateInputOne.value = "";

  renderHistory();

  donationModal.classList.remove("hidden");
});
// card -2
const donationBalanceTwo = document.getElementById("donation-balance-two");
const donateInputTwo = document.getElementById("donation-input-2");
const donationButtonTwo = document.getElementById("second-donate-btn");


donationButtonTwo.addEventListener("click", () => {

    

     

  const amount = parseFloat(donateInputTwo.value);
  balance -= amount;
   
    

  donationBalanceTwo.innerText = `${amount}`;
  totatAmount.innerText = `${balance}`;
  

  const historyObj = {
    donatedAt: "Donate for Flood Relief in Feni, Bangladesh",
    amount,
    date: new Date(),
    
  };
  history.push(historyObj);

  donateInputTwo.value = "";

  renderHistory();

  donationModal.classList.remove("hidden");
});
// card-3
const donationBalanceThree = document.getElementById("donation-balance-three");
const donateInputThree = document.getElementById("donation-input-3");
const donationButtonThree = document.getElementById("third-donate-btn");

donationButtonThree.addEventListener("click", () => {
  const amount = parseFloat(donateInputThree.value);
  balance -= amount;

  donationBalanceThree.innerText = `${amount}`;
  totatAmount.innerText = `${balance}`;

  const historyObj = {
    donatedAt: "Aid for Injured in the Quota Movement",
    amount,
    date: new Date(),
  };
  history.push(historyObj);
  console.log(history);

  donateInputThree.value = "";

  renderHistory();

  donationModal.classList.remove("hidden");
});

const donationSection = document.getElementById("donation-section");
const donationButton = document.getElementById("donation-btn");
const historySection = document.getElementById("history-section");
const historyButton = document.getElementById("history-btn");

donationButton.addEventListener("click", () => {
  // Toggle sections visibility
  donationSection.classList.remove("hidden");
  historySection.classList.add("hidden");

  // Update donation button styles
  donationButton.classList.add("bg-green-500", "text-white");

  // Update history button styles
  historyButton.classList.remove("bg-green-500", "text-white");
  historyButton.classList.add("text-green-500", "border-green-500", "border-2");
});

historyButton.addEventListener("click", () => {
  // Toggle sections visibility
  donationSection.classList.add("hidden");
  historySection.classList.remove("hidden");

  // Update history button styles
  historyButton.classList.add("bg-green-500", "text-white");

  // Update donation button styles
  donationButton.classList.remove("bg-green-500", "text-white");
  donationButton.classList.add(
    "text-green-500",
    "border-green-500",
    "border-2"
  );

  renderHistory();
});

closeModalBtn.addEventListener("click", () => {
  donationModal.classList.add("hidden");
});
