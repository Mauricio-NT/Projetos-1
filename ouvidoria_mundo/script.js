function submitComplaint() {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const complaintText = document.getElementById('complaint').value;
    const anonymous = document.getElementById('anonymous').checked;
  
    const complaintsCarousel = document.getElementById('complaintsCarousel');
  
    const complaintElement = document.createElement('div');
    complaintElement.className = 'complaint';
  
    const complaintTextContent = anonymous ? 'Anônimo: ' + complaintText : name + ' (' + city + ', ' + state + '): ' + complaintText;
    complaintElement.textContent = complaintTextContent;
  
    complaintsCarousel.appendChild(complaintElement);
  
    // Salvar a reclamação no armazenamento local
    saveComplaint(complaintTextContent);
  
    // Limpar o formulário após a submissão
    document.getElementById('complaintForm').reset();
  }
  
  // Função para salvar a reclamação no armazenamento local
  function saveComplaint(complaint) {
    let storedComplaints = localStorage.getItem('complaints');
  
    if (!storedComplaints) {
      storedComplaints = [];
    } else {
      storedComplaints = JSON.parse(storedComplaints);
    }
  
    storedComplaints.push(complaint);
    localStorage.setItem('complaints', JSON.stringify(storedComplaints));
  }
  
  // Função para obter todas as reclamações do armazenamento local
  function getAllComplaints() {
    const storedComplaints = localStorage.getItem('complaints');
  
    if (storedComplaints) {
      return JSON.parse(storedComplaints);
    }
  
    return [];
  }
  
  // Função para redirecionar para a página de Todas as Reclamações
  function redirectTodasReclamacoes() {
    window.location.href = 'reclamacoes.html';
  }
  