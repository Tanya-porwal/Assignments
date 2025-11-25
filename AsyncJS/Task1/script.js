const tableBody = document.querySelector("#userTable tbody");
const loader = document.getElementById("loader");

async function loadUsers() {
  try {
    loader.style.display = "block";
    tableBody.innerHTML = "";

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.forEach(person => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${person.name}</td>
        <td>${person.email}</td>
        <td>${person.address.city}</td>
      `;
      tableBody.appendChild(row);
    });

  } catch {
    tableBody.innerHTML = `<tr><td colspan="3">Oops… couldn't load users.</td></tr>`;
  } finally {
    loader.style.display = "none";
  }
}

document.getElementById("refreshBtn").addEventListener("click", loadUsers);

loadUsers();
