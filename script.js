 
 
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





const rootElement = document.documentElement;

// Use getComputedStyle to get all computed styles of the element
const styles = getComputedStyle(rootElement);

// Retrieve the value of the CSS variable
const bgColor = 'rgba(80, 104, 212, 0.7)' ;

 

// Retrieve the value of the CSS variable
const mainColor = styles.getPropertyValue('--main-color').trim();

const gridcolor= 'rgb(80, 104, 212,0.5)';
const anglelines = 'rgba(80, 104, 212, 0.2)';

const txtcolor = 'rgb(80, 104, 212)';

const data =  {
    labels: ['Python', 'Java', 'C', 'C#', 'HTML/CSS', 'JavaScript' ],
    datasets: [{
      label: 'Languages',
      data: [89, 80, 30, 75, 85, 80 ],
      backgroundColor: bgColor ,
      borderColor: anglelines,
      pointHoverBorderColor: bgColor,
      borderWidth: 3
    }]
  };

const ctx=document.getElementById('chart1');
	new Chart(ctx,{
		type:'radar',
		data: data,
		options:{
			 
			responsive:true,
			maintainAspectRatio:false,
            scales: {
                  
                r:{
                    angleLines: {
                        color: anglelines
                      },

                      pointLabels: {
                        color: txtcolor,
			      font: {
                            size:14
                        }
                      },

                      grid: {
                        color: gridcolor
                     } ,

                     ticks:{
                        display: false 
                    }

                },
 
            },

            plugins: {
                title: {
                   color: txtcolor,
			font: {
                            size:14
                        }
                    
                }
            }
		}
	});

const data2 =  {
        labels: ['Tensorflow', 'Scikit-Learn', 'Seaborn & Matplotlib', 'Pandas', 'NLTK', 'PyTorch' ],
        datasets: [{
          label: 'Libraries',
          data: [87,82,70,80,89,77 ],
          backgroundColor: bgColor ,
          borderColor: 'light blue',
          pointHoverBorderColor: 'black',
          borderWidth: 1
        }]
      };
    
const ctx2=document.getElementById('chart2');
new Chart(ctx2,{
    type:'radar',
    data: data2,
    options:{
			 
        responsive:true,
        maintainAspectRatio:false,
        scales: {
              
            r:{
                angleLines: {
                    color: anglelines
                  },

                  pointLabels: {
                    color: txtcolor,
			  font: {
                            size:14
                        }
                  },

                  grid: {
                    color: gridcolor
                 } ,

                 ticks:{
                    display: false 
                }

            },

        },

        plugins: {
            title: {
               color: txtcolor,
               padding: 10
            }
        }
    }
});

const data3 =  {
    labels: ['SQL', 'MongoDB', 'Firebase', 'Pinecone'  ],
    datasets: [{
      label: 'Databases',
      data: [92, 86, 77,91 ],
      backgroundColor: bgColor ,
      borderColor: 'light blue',
      pointHoverBorderColor: 'black',
      borderWidth: 1
    }]
  };
    
const ctx3=document.getElementById('chart3');
new Chart(ctx3,{
    type:'radar',
    data: data3,
    options:{
			 
        responsive:true,
        maintainAspectRatio:false,
        scales: {
              
            r:{
                angleLines: {
                    color: anglelines
                  },

                  pointLabels: {
                    color: txtcolor,
			  font: {
                            size:14
                        }
                  },

                  grid: {
                    color: gridcolor
                 } ,

                 ticks:{
                    display: false 
                }

            },

        },

        plugins: {
            title: {
               color: txtcolor,
                
            }
        }
    }
});

const data4 =  {
    labels: ['PowerBI', 'AWS', 'Azure', 'Docker', 'Git'  ],
    datasets: [{
      label: 'Tools',
      data: [80,85,87,82 ,80 ],
      backgroundColor: bgColor ,
      borderColor: 'light blue',
      pointHoverBorderColor: 'black',
      borderWidth: 1
    }]
  };
    
const ctx4=document.getElementById('chart4');
new Chart(ctx4,{
    type:'radar',
    data: data4,
    options:{
			 
        responsive:true,
        maintainAspectRatio:false,
        scales: {
              
            r:{
                angleLines: {
                    color: anglelines
                  },

                  pointLabels: {
                    color: txtcolor,
			  font: {
                            size:14
                        }
                  },

                  grid: {
                    color: gridcolor
                 } ,

                 ticks:{
                    display: false 
                }

            },

        },

        plugins: {
            title: {
               color: txtcolor,
                
            }
        }
    }
});
