const tableBody = document.querySelector('#MyTable tbody');
let sortOrder = {
  id: true,
  first_name: true,
  last_name: true,
  email: true,
  gender: true
};

// draw table
const drawTable = (data) => {
  tableBody.innerHTML = '';
  data.forEach((person) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${person.id}</td>
      <td>${person.first_name}</td>
      <td>${person.last_name}</td>
      <td>${person.email}</td>
      <td>${person.gender}</td>
      <td><button onclick="removeRow(${person.id})">Remove</button></td>`;
    tableBody.appendChild(tableRow);
  });
};

// add new row
function addNewRow() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;

  if (!firstName || !lastName || !email || !gender) {
    alert("Please fill all fields!");
    return;
  }

  const newPerson = {
    id: persons.length + 1,
    first_name: firstName,
    last_name: lastName,
    email: email,
    gender: gender
  };

  persons.push(newPerson);
  drawTable(persons);

  document.getElementById("firstName").value = '';
  document.getElementById("lastName").value = '';
  document.getElementById("email").value = '';
  document.getElementById("gender").value = '';
}

// remove row
function removeRow(id) {
  const index = persons.findIndex(person => person.id === id);
  if (index !== -1) {
    persons.splice(index, 1);
    drawTable(persons);
  }
}


function sortByField(field) {
  persons.sort((a, b) => {
    if (a[field] > b[field]) return sortOrder[field] ? 1 : -1;
    if (a[field] < b[field]) return sortOrder[field] ? -1 : 1;
    return 0;
  });
  sortOrder[field] = !sortOrder[field];
  drawTable(persons);
}


document.getElementById("MyTable").querySelectorAll("th").forEach((header, index) => {
  const fields = ["id", "first_name", "last_name", "email", "gender"];
  if (index < fields.length) {
    header.addEventListener("click", () => {
      sortByField(fields[index]);
    });
  }
});

drawTable(persons);

// // const sort = document.querySelectorAll('#MyTable tbody');
// let sortedRows = Array.from(tableBody.rows)
// .slice(1)
// .sort((rowA, RowB) =>  {
//    return rowA.cells[1].innerHTML - RowB.cells[1].innerHTML
// })
// tableBody.tBodies[0].append(...sortedRows)

