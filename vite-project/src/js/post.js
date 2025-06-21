const BASE_URL = "http://localhost:3000/";

// function addClient(client) {
//     const url = `${BASE_URL}clients`
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(client)
//     }
//     return fetch(url, options).then(response => response.json())
// }

function renderClientInfo(client) {
  return console.log(client);
}
const client = {
  name: "Timoha2",
  username: "bobik2",
  email: "Timoha@eshkere.tv2",
};

addClient(client)
  .then(renderClientInfo)
  .catch((error) => console.log(error));

// async await

async function addClient(client) {
  const url = `${BASE_URL}clients`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(client),
  };
  try {
    const response = await fetch(url, options);
    const newClient = await response.json();
    return newClient;
  } catch (error) {
    console.log(error);
  }
}
