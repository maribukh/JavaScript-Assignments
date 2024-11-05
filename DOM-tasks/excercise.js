
const tableBody = document.querySelector('table tbody')
console.log(tableBody)

const removeElement = (id) => {
  // console.log(row)
  // row.remove()
  // console.log(id)
  const foundIndex = persons.findIndex((item) => item.id === id)
  persons.splice(foundIndex, 1)
  drawTable(persons)
}

const drawTable = (data) => {
  tableBody.innerHTML = ''
  for (let i = 0; i < data.length; i++) {
    const tableRow = document.createElement('tr')
    tableRow.innerHTML = `
        <td>${data[i].id}</td>
        <td>${data[i].first_name}</td>
        <td>${data[i].last_name}</td>
        <td>${data[i].email}</td>
        <td>${data[i].gender}</td>
    `

    const removeTd = document.createElement('td')
    const removeButton = document.createElement('button')
    removeButton.addEventListener('click', () => { removeElement(data[i].id) })
    removeButton.innerHTML = 'remove'

    removeTd.appendChild(removeButton)
    tableRow.appendChild(removeTd)
    tableBody.appendChild(tableRow)
  }
}
  
drawTable(persons)

function addRowToTable(persons) {
  const tableBody = document.querySelector('.table-body');
  const tableRow = document.createElement('tr');

  tableRow.innerHTML = `
    <td>${data.id}</td>
    <td>${data.first_name}</td>
    <td>${data.last_name}</td>
    <td>${data.email}</td>
    <td>${data.gender}</td>
  `;

  tableBody.appendChild(tableRow);

  const addTd = document.createElement('td')
    const addButton = document.createElement('button')
    addButton.addEventListener('click', () => { addRowToTableElement(data[i].id) })
    addButton.innerHTML = 'add'

}


// const ulElements = document.querySelector('#paren ul')
// const newElement = document.createElement('li')
// newElement.innerHTML = 'new li element'
// console.log(ulElements.children)
// ulElements.insertBefore(newElement, ulElements.children[1])

// const button = document.querySelector('button')
// const addButton = document.querySelector('addButton')

// button.addEventListener("click")

// function submit() {
//   alert("Function called")
// }

// const button = document.querySelector('button')
// const addButton = document.querySelector('.addbutton')
// console.log(menu.classlist.contains('active'))

// console.log(addbutton.classlist.contains)

// const showAdd = () => {

//   if (menu.classlist.contains('active')) {
//     menu.classlist.remove
//   }
// }

// button.addEventListener('click', showMenu)

