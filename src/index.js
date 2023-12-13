// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
// Your code goes here ...
for (const contact of threeContacts) {
  console.log(contact);
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>
  <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
  <button class="btn-delete">Delete</button>
  </td>
  <td>
  <button class="btn-like">
  <img src="./images/icon.png" alt="like" />
  </button>
  </td>
  `;
  tableBody.appendChild(row);
}

// ITERATION 2 - Delete Buttons
// Your code goes here ...
const buttonsDelete = document.querySelectorAll(".btn-delete");
buttonsDelete.forEach((button) => {
  button.addEventListener("click", deleteContact);
});

function deleteContact(event) {
  const clickedButton = event.target;
  const row = clickedButton.closest("tr");
  console.log("click!");
  row.remove();
}

// ITERATION 3 - Like Buttons

// Your code goes here ...
const buttonsLike = document.querySelectorAll(".btn-like");
buttonsLike.forEach((button) => {
  button.addEventListener("click", like);
});

function like(event) {
  const clickedButton = event.target.closest("button");
  console.log(clickedButton.className);
  clickedButton.classList.toggle("selected");
}
// Bonus: ITERATION 4 - Add Random Contacts
const buttonRandom = document.querySelector("#btn-add-random");
// console.log(buttonRandom);
buttonRandom.addEventListener("click", addRandom);

function addRandom() {
  // Splice 1 element from the contacts array at the random index
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  // Get the element from the spliced array
  const randomContact = splicedArr[0];
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td> ${randomContact.name} </td>
    <td> ${randomContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  
  tableBody.appendChild(exampleRow);}