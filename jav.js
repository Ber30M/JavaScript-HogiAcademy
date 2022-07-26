// //dom
// document.addEventListener('click', (bouton) => {
//     const valeur = bouton.target.dataset.key;
//     calculer(valeur)
// })
// const touches = [...document.querySelectorAll('.bouton')];
// console.log('touches');

// const listeKeycode = touches.map(touche => touches.dataset.key);

// document.addEventListener('click', (e) => {
//     const valeur = e.target;
//     ecran.textContent = "";
// })
        // Button zose onClick zihe fonction imwe en paramètre ironka event.

        // Hama champ ijamwo ivyo banditse uyihe id

        // Muri fonction, ligne ya mbere ni 

        // var champ = getElementById("...")

        // ligne ya 2 ni

        // champ.value=event.target.innerText


//THE FUNCTIONNING CODE


function fonctionYoKwandika(x){
        document.getElementById("ecran").innerHTML +=x
};
function fonctionYoGufuta(){
        document.getElementById("ecran").innerHTML= ""
}


function fonctionYoGuharura(){
let inyishu = document.getElementById("ecran");
inyishu.innerText = eval(inyishu.innerText);

}