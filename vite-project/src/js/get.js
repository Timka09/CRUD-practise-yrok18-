const BASE_URL = "http://localhost:3000";

// функція на GET запити

// function fetchUsers(userId) {
//   return fetch(`${BASE_URL}/clients`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// fetchUsers()

// function fetchUsers(userId) {
//   return fetch(`${BASE_URL}/clients/${userId}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// fetchUsers(1);

// async await

// async function fetchUsers() {
//     try {
//         const response = await fetch(`${BASE_URL}/clients`);
//         const clients = await response.json()
//         return clients
//     } catch (error) {
//         console.error(error);
//     }
// }
// fetchUsers();

async function fetchUsers(userId) {
  try {
    const response = await fetch(`${BASE_URL}/clients/${userId}`);
    const clients = await response.json();
    return clients;
  } catch (error) {
    console.error(error);
  }
}
fetchUsers(1);
