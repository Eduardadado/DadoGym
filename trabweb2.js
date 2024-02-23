// -----NOVO MENU -----
window.addEventListener("scroll", function(){
  var headerM = this.document.querySelector('.headerM')
  headerM.classList.toggle('rolagem', window.scrollY > 500)
})

// ----- CARROSEL -----
var radio = document.querySelector('.manual-btn')
var cont = 1
document.getElementById('radio1').checked = true
setInterval(() => {
 proximaImg()
}, 4000)

function proximaImg(){
    cont++
    if(cont > 4){
        cont = 1;
    }
    document.getElementById('radio'+cont).checked = true
}

//----- IMC -----
botao = document.querySelector("#bcalcular");

function imc(){
  peso = document.querySelector("#weight");
  altura = document.querySelector("#height");
  texto = document.querySelector("#mensage span");
  var textoMensagem = document.querySelector("#resultado span");

  peso = +peso.value
  altura = +altura.value
  imc = peso / (altura * altura);
  
  

  if (imc > 18.5 && imc <= 24.9) { 
    textoMensagem.innerText = `${imc.toFixed(2)} - Você está com peso normal!`; 
  } else if (imc >= 25 && imc <= 29.9) { 
    textoMensagem.innerText = `${imc.toFixed(2)} - Cuidado! Você está com excesso de peso!`; 
  } else if (imc >= 30 && imc <= 34.9) {
    textoMensagem.innerText = `${imc.toFixed(2)} - Cuidado! Você está com obesidade classe I!`; 
    } else { 
      textoMensagem.innerText = `${imc.toFixed(2)} - Cuidado! Você está abaixo do peso!`; 
  } 
  texto.innerText = imc.toFixed(2);

  

 

}
botao.addEventListener("click",imc);



// ------- MAPA ------

var map = L.map('mapid').setView([-22.9068, -43.1729], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-22.9068, -43.1729]).addTo(map)
  .bindPopup('Encontre as unidades disponíveis no Rio de Janeiro!')
  .openPopup();

// Acessibilidade
var scrollImage = document.getElementById("scrollImage")

    window.onscroll = function() {
       
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            
            scrollImage.style.display = "block"
        } else {
            
            scrollImage.style.display = "none"
        }
    }

//scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      })
  })
}) 