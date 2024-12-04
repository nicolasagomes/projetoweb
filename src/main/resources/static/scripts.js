function navigateToForm(id = null) {
    const url = id ? `user-form.html?id=${id}` : 'user-form.html';
    window.location.href = url;
}

function navigateToList() {
    window.location.href = 'user-list.html';
}

async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:8080/api/usuarios');
        if (!response.ok) throw new Error('Erro ao buscar usuários');

        const users = await response.json();
        const tableBody = document.querySelector('#users-table tbody');
        tableBody.innerHTML = '';

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nome}</td>
                <td>${user.email}</td>
                <td>${user.permissao}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Erro ao carregar usuários:', error);
    }
}

if (window.location.pathname.endsWith('user-list.html')) {
    fetchUsers();
}

async function submitForm(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('user-form'));
    const user = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:8080/api/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            alert('Usuário salvo com sucesso!');
            navigateToList();
        } else {
            alert('Erro ao salvar usuário. Verifique os dados e tente novamente.');
        }
    } catch (error) {
        console.error('Erro ao salvar usuário:', error);
        alert('Erro ao salvar usuário. Verifique os dados e tente novamente.');
    }
}

if (window.location.pathname.endsWith('user-form.html')) {
    document.getElementById('user-form').addEventListener('submit', submitForm);
}
