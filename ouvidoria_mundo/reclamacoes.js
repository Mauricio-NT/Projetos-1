// Recuperar as reclamações armazenadas (pode ser em localStorage, banco de dados, etc.)
let complaints = JSON.parse(localStorage.getItem('complaints')) || [];

// Função para exibir todas as reclamações
function displayAllComplaints() {
  const complaintsContainer = document.getElementById('complaints-container');

  // Ordenar as reclamações pela data e hora (timestamp) de forma decrescente
  complaints.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  // Limpar qualquer conteúdo existente no contêiner
  complaintsContainer.innerHTML = '';

  // Iterar sobre todas as reclamações
  complaints.forEach(complaint => {
    // Verificar se as informações da reclamação são definidas
    if (
      complaint.name !== undefined &&
      complaint.city !== undefined &&
      complaint.state !== undefined &&
      complaint.complaint !== undefined &&
      complaint.timestamp !== undefined
    ) {
      const complaintDiv = document.createElement('div');
      complaintDiv.classList.add('complaint');

      // Criar elementos para exibir os detalhes da reclamação
      const nameElement = document.createElement('h3');
      nameElement.textContent = `Nome: ${complaint.name}`;

      const cityStateElement = document.createElement('p');
      cityStateElement.textContent = `Cidade: ${complaint.city}, Estado: ${complaint.state}`;

      const complaintTextElement = document.createElement('p');
      complaintTextElement.textContent = `Reclamação: ${complaint.complaint}`;

      const timestampElement = document.createElement('p');
      timestampElement.textContent = `Data e Hora: ${complaint.timestamp}`;

      // Adicionar elementos ao contêiner
      complaintDiv.appendChild(nameElement);
      complaintDiv.appendChild(cityStateElement);
      complaintDiv.appendChild(complaintTextElement);
      complaintDiv.appendChild(timestampElement);

      complaintsContainer.appendChild(complaintDiv);
    }
  });
}

// Chamar a função para exibir todas as reclamações quando a página carregar
displayAllComplaints();

// Função para voltar para a página inicial
function goBack() {
  window.location.href = 'index.html';
}
