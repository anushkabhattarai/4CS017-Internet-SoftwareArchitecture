//first function
function getFruit(fruitName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fruitName === 'watermelon') {
        reject(new Error("Sorry, we're out of watermelons"));
      } else {
        resolve(`Here is your ${fruitName}`);
      }
    }, 1000);
  });
}
getFruit('apple')
  .then(message => console.log(message))
  .catch(error => console.log(error.message));

getFruit('watermelon')
  .then(message => console.log(message))
  .catch(error => console.log(error.message));


  
//second function
function arrayManipulation(array, operation, filter) {
    const manipulatedArray = array.map(operation);
    const filteredArray = manipulatedArray.filter(filter);
    return filteredArray;
  }

  
//third function
async function fetchUserData(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
  
    const user = await response.json();
  
    return { name: user.name, email: user.email };
  }
  
  
//fourth function
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

fetch(apiUrl)
  .then(response => response.json())
  .then(todos => {
    const filteredTodos = todos.filter(todo => todo.completed && todo.id <= 50);

    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    const tableRow = document.createElement('tr');
    const userIdHeader = document.createElement('th');
    const titleHeader = document.createElement('th');
    const statusHeader = document.createElement('th');

    userIdHeader.textContent = 'User ID';
    titleHeader.textContent = 'Title';
    statusHeader.textContent = 'Status';

    tableRow.appendChild(userIdHeader);
    tableRow.appendChild(titleHeader);
    tableRow.appendChild(statusHeader);

    tableHead.appendChild(tableRow);
    table.appendChild(tableHead);

    filteredTodos.forEach(todo => {
      const row = document.createElement('tr');
      const userIdCell = document.createElement('td');
      const titleCell = document.createElement('td');
      const statusCell = document.createElement('td');

      userIdCell.textContent = todo.userId;
      titleCell.textContent = todo.title;
      statusCell.textContent = todo.completed ? 'Completed' : 'Not Completed';

      row.appendChild(userIdCell);
      row.appendChild(titleCell);
      row.appendChild(statusCell);

      tableBody.appendChild(row);
    });

    table.appendChild(tableBody);

    document.body.appendChild(table);
  })
  .catch(error => console.log(error));