// Função para enviar reclamação
function sendComplaint() {
    // Obter os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const anonymous = document.getElementById('anonymous').checked;
    let complaintText = document.getElementById('complaint').value;

    // Limitar a quantidade de caracteres a 130
    const maxLength = 130;
    if (complaintText.length > maxLength) {
        complaintText = complaintText.slice(0, maxLength);
    }

    // Obter a data e hora atual
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    // Criar objeto de reclamação
    const complaint = {
        name: anonymous ? 'Anônimo' : name,
        city: city,
        state: state,
        complaint: complaintText,
        timestamp: formattedDate // Adicionar a data e hora
    };

    // Armazenar a reclamação (pode ser em localStorage, banco de dados, etc.)
    // Aqui, estou apenas simulando armazenamento em localStorage para exemplo
    let complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    complaints.push(complaint);
    localStorage.setItem('complaints', JSON.stringify(complaints));

    // Exibir mensagem de confirmação
    openModal();

    // Limpar os campos do formulário após o envio
    clearForm();
}

// Função para abrir o modal de confirmação
function openModal() {
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'block';

    // Fechar o modal após 3 segundos
    setTimeout(closeModal, 3000);
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'none';
}

// Função para limpar os campos do formulário
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('anonymous').checked = false;
    document.getElementById('complaint').value = '';
}

// Função para visualizar todas as reclamações
function viewAllComplaints() {
    // Redirecionar para a página de Todas as Reclamações
    window.location.href = 'reclamacoes.html';
}

// Adicionar um ouvinte de evento de entrada ao campo de reclamação
document.getElementById('complaint').addEventListener('input', function () {
    // Limitar a quantidade de caracteres a 130
    const maxLength = 130;
    const complaintTextarea = document.getElementById('complaint');
    const currentLength = complaintTextarea.value.length;

    // Se o comprimento atual for maior que maxLength, truncar o texto
    if (currentLength > maxLength) {
        complaintTextarea.value = complaintTextarea.value.slice(0, maxLength);
    }
});

function updateCharCount() {
    const maxChars = 130;
    const complaintTextarea = document.getElementById('complaint');
    const charCountElement = document.getElementById('charCount');
    const remainingChars = maxChars - complaintTextarea.value.length;
    charCountElement.textContent = `Caracteres restantes: ${remainingChars}`;
}
