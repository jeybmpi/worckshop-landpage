//feature botton
let companyB = document.getElementsByClassName('header__izquierda__features');
let contenedorFlotan =document.getElementById('contenedorFlotante');
let containerF = document.getElementById('contentFlotante');

let mostrar = () =>{
    contenedorFlotan.classList.remove('hidden');
    containerF.innerHTML = '';
        containerF.innerHTML += `     
        <article class="cardFL">
            <div class="imageFLO">
                <img src="./images/icon-todo.svg"class="imageFLO1"><p class="letra">Todo list</p>
            </div>
            <div class="imageFLO">
                <img src="./images/icon-calendar.svg"class="imageFLO1"><p class="letra">Calendar</p>
            </div>
            <div class="imageFLO">
                <img src="./images/icon-reminders.svg"class="imageFLO1"><p class="letra">Reminders</p>
            </div>
            <div class="imageFLO">
                <img src="./images/icon-planning.svg"class="imageFLO1"><p class="letra">Planing</p>
            </div>
        </article>
        `
}

let mostrar1 = () =>{
    contenedorFlotan.classList.add('hidden');
}

companyB[0].addEventListener('mouseover',mostrar);
companyB[0].addEventListener('mouseout',mostrar1);

//company botton
let companyC = document.getElementsByClassName('header__izquierda__company');
let contenedorFlotan1 =document.getElementById('contenedorFlotante1');
let containerF1 = document.getElementById('contentFlotante1');

let mostra = () =>{
    contenedorFlotan1.classList.remove('hidden1');
    containerF1.innerHTML = '';
        containerF1.innerHTML += `     
        <article class="cardFL1">
            <div class="imageFLO2">
                <p class="letra1">History</p>
            </div>
            <div class="imageFLO2">
                <p class="letra1">Our team</p>
            </div>
            <div class="imageFLO2">
                <p class="letra1">Blog</p>
            </div>
        </article>
        `
        
}



let mostra1 = () =>{
    contenedorFlotan1.classList.add('hidden1');
}

companyC[0].addEventListener('mouseover',mostra);
companyC[0].addEventListener('mouseout',mostra1);

//hamburguer
let companyD = document.getElementsByClassName('header__derecha__hamburguer');
let contenedorFlotan2 =document.getElementById('contenedorFlotante2');
let containerF2 = document.getElementById('contentFlotante2');

let mostr = () =>{
    contenedorFlotan2.classList.remove('hidden2');
    containerF2.innerHTML = '';
        containerF2.innerHTML += `     
        <article class="cardFL2">
            <div class="header__izquierda__featuress">Features
                <img src="/images/icon-arrow-down.svg" alt="" class="header__izquierda__featuress__img">
                <div id="contenedorFlotantes" class="hiddens">
                    <div id="contentFlotantes">
    
                    </div>
    
                </div>
            </div>
            <div class="header__izquierda__companyy">Company
            <img src="/images/icon-arrow-down.svg" alt="" class="header__izquierda__companyy__img">
            <div id="contenedorFlotantey" class="hiddeny">
                <div id="contentFlotantey">

                </div>

            </div>
            </div>
            <div class="carrersAnd">
            <div class="imageFLO3">
                <p class="letra2">Carrers</p>
            </div>
            <div class="imageFLO3">
                <p class="letra2">About</p>
            </div>
            </div>
            
            <div class="loginnAndRegistrer">
            <div class="loginn">Login</div>
            <div class="registerr">Register</div>
            </div>
            
        </article>
        `
        //________________________feature
let companyS = document.getElementsByClassName('header__izquierda__featuress');
let contenedorFlotan2s =document.getElementById('contenedorFlotantes');
let containerF2s = document.getElementById('contentFlotantes');
let mostrS = () =>{
    contenedorFlotan2s.classList.remove('hiddens');
    containerF2s.innerHTML = '';
        containerF2s.innerHTML += `     
        <article class="cardFL2">
        <div class="imageFLO">
        <img src="./images/icon-todo.svg"class="imageFLO1"><p class="letras">Todo list</p>
    </div>
    <div class="imageFLO">
        <img src="./images/icon-calendar.svg"class="imageFLO1"><p class="letra">Calendar</p>
    </div>
    <div class="imageFLO">
        <img src="./images/icon-reminders.svg"class="imageFLO1"><p class="letra">Reminders</p>
    </div>
    <div class="imageFLO">
        <img src="./images/icon-planning.svg"class="imageFLO1"><p class="letra">Planing</p>
    </div>
        </article>
        `   
}
let mostr1S = () =>{
    contenedorFlotan2s.classList.add('hiddens');
}
companyS[0].addEventListener('mouseover',mostrS);
companyS[0].addEventListener('mouseout',mostr1S);
//__________________
//__________companyy
let companyY = document.getElementsByClassName('header__izquierda__companyy');
let contenedorFlotan2y =document.getElementById('contenedorFlotantey');
let containerF2sy = document.getElementById('contentFlotantey');
let mostry = () =>{
    contenedorFlotan2y.classList.remove('hiddeny');
    containerF2sy.innerHTML = '';
    containerF2sy.innerHTML += `     
    <article class="cardFL2y">
        <div class="imageFLO2y">
            <p class="letra1">History</p>
        </div>
        <div class="imageFLO2y">
            <p class="letray">Our team</p>
        </div>
        <div class="imageFLO2y">
            <p class="letray">Blog</p>
        </div>
        </article>
        `   
}
let mostr1y = () =>{
    contenedorFlotan2y.classList.add('hiddeny');
}
companyY[0].addEventListener('mouseover',mostry);
companyY[0].addEventListener('mouseout',mostr1y);
//___________
}



let mostr1 = () =>{
    contenedorFlotan1.classList.add('hidden2');
}

companyD[0].addEventListener('mouseover',mostr);
companyD[0].addEventListener('mouseout',mostr1);


