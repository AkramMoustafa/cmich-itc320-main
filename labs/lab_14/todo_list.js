"use strict";

const domain = "https://jsonplaceholder.typicode.com";

async function displayUsers() {
    try {
        const response = await fetch(`${domain}/users`);
        const users = await response.json();

        const usersSelect = document.getElementById("users");
 
        usersSelect.innerHTML = "";
     
        users.forEach(user => {
            const option = document.createElement("option");
            option.value = user.id;
            option.text = user.name;
            usersSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}
async function displayTodoList(userId) {
    try {
        const response = await fetch(`${domain}/todos/?userId=${userId}`);
        const todos = await response.json();

        const listDiv = document.getElementById("list");
        listDiv.innerHTML = ""; 

        if (todos.length > 0) {
            const table = document.createElement("table");
            table.innerHTML = `
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            `;

            todos.forEach(todo => {
                const row = table.insertRow();
                row.innerHTML = `
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed ? "Yes" : "No"}</td>
                `;
            });

            listDiv.appendChild(table);
        } else {
            listDiv.textContent = "No to-do items found.";
        }
    } catch (error) {
        console.error("Error fetching to-do items:", error);
    }
}


document.addEventListener("DOMContentLoaded", async () => {
    await displayUsers();

    document.getElementById("view_list").addEventListener("click", async () => {
        const selectedUserId = document.getElementById("users").value;
        await displayTodoList(selectedUserId);
    });
});