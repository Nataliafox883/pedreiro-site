




        
    function sendToWhatsApp(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
    
        // Substitua pelo seu número de WhatsApp com o formato internacional (ex.: 55 para Brasil)
        const whatsappNumber = '5528999156629';
    
        // Cria a mensagem para enviar ao WhatsApp
        const whatsappMessage = `Olá, meu nome é ${name} tel: ${phone} . ${message}`;
    
        // Link para abrir o WhatsApp com a mensagem
        const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    
        // Redireciona o usuário para o WhatsApp
        window.open(whatsappLink, '_blank');
}


 
function clickMenu() {
    var menuMobile = document.getElementById("menuMobile");
    if (menuMobile.style.display === 'block') {
        menuMobile.style.display = "none";
       
    } else {
        menuMobile.style.display = 'block';
       
    }
}

function toggleMenu() {
    const menuMobile = document.querySelector('menuMobile');
    menuMobile.style.display = menuMobile.style.display === 'flex' ? 'none' : 'flex';
  }



  
