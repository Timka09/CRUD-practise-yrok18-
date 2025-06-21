const BASE_URL = "http://localhost:3000/";

// function addClient(updateClientInfo, clientId) {
//     const url = `${BASE_URL}clients/${clientId}`
//     const options = {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updateClientInfo),
//     };
//     return fetch(url, options).then(response => response.json())
// }

// addClient({
//     name: "Timohaaaaaaaa"
// },"fc5f" )

async function addClient(updateClientInfo, clientId) {
  const url = `${BASE_URL}clients/${clientId}`;
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateClientInfo),
  };
  try {
    const response = await fetch(url, options);
    const newClient = await response.json();
    return newClient;
  } catch (error) {
    console.log(error);
  }
}

addClient(
  {
    name: "Timohaaaaaaaa",
  },"fc5f");
