 
 
scriptURL= "https://script.google.com/macros/s/AKfycbyQLm3-j9_1keJVPUGqfx_LAs_JFfAvu-gg4fwV67ht-iJM_y_QNqYOkybi27JrgF-p/exec";
const form = document.forms['form1'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
    sendMail();
  })

const menuicon= document.querySelector('#menu-icon');
const navbar= document.querySelector('.navbar');
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
  
function sendMail(){ 
   var frm= document.getElementsByName('form1')[0];
     //var frm = document.getElementsByName('contact-form')[0];
    
   frm.reset();  // Reset all form data
   return false; // Prevent page refresh
}


function clearField(){
    document.getElementById('form1').reset();
}
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    
    if (checkBox.checked == true){
         alert('theme change');

      } else {
         alert('theme change');
      }
})

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
