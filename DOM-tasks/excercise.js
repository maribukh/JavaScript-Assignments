const tableBody = document.querySelector('#MyTable tbody');

// draw Table 
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
      <td><button onclick="removeRow(${person.id})">Remove</button></td>
    `;
    tableBody.appendChild(tableRow);
  });
};

// Add New Row
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

// function -> remove Row 
function removeRow(id) {
  const index = persons.findIndex(person => person.id === id);
  if (index !== -1) {
    persons.splice(index, 1);
    drawTable(persons);
  }
}


drawTable(persons);
