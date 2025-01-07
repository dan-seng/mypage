 
  
  
  const toggleButton = document.getElementById('toggleButton');
  const body = document.body;
  const modeIcon = document.getElementById('modeIcon');
  if(localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    modeIcon.classList.remove('fa-sun');
    modeIcon.classList.add('fa-moon');
  }
  toggleButton.addEventListener('click', function(){
    body.classList.toggle('dark-mode');


  if(body.classList.contains('dark-mode')) {
    modeIcon.classList.remove('fa-sun');
    modeIcon.classList.add('fa-moon');
    localStorage.setItem('dark-mode', 'enabled');
  } else{
    modeIcon.classList.remove('fa-moon');
    modeIcon.classList.add('fa-sun');
    localStorage.setItem('dark-mode', 'disabled');
  }
});

  function mail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
   const message =  document.getElementById("message").value;
   if(name !='' && email!='' && message !=''){
     alert("Message sent successfully!"); 
    }
}

let currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href.includes(currentPage)) {
    link.classList.add('active');
  }
});
