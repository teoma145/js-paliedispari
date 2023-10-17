let btn = document.getElementById('button');
let palindromatext=document.getElementById('palindromatext')


btn.addEventListener('click', function(){
    let palindromael = document.getElementById('palindromael').value;
    
    let checkpalindromo='';
    for(let i = palindromael.length-1 ; i >= 0; i--){
    checkpalindromo += palindromael[i];
    console.log(checkpalindromo)
}
    if(checkpalindromo===palindromael){
       palindromatext.innerHTML=`La tua parola è palindroma`
    }
    
    else{
        palindromatext.innerHTML=`la tua parola non è palindroma`
    }
 
})


let btnpari = document.getElementById('invia')

btnpari.addEventListener('click',function(){
   let sceltautente= document.getElementById('paridispari').value;
   let paridispariel = document.getElementById('paridisparitext');
   
   let numeroutente = parseInt(document.getElementById('usernumberpar').value);
   console.log(numeroutente)
   let numeropc =getRandomNumber(1, 5)
   console.log(numeropc)
   if(sceltautente=== "pari"){
    paridispariel.innerHTML=`il pc sceglie dispari e butta ${numeropc}`
   }
   else{
    paridispariel.innerHTML=`il pc sceglie dispari e butta ${numeropc}`
   }
   let risultato = sommaparidispari(numeroutente,numeropc)
   
   let winner = evennoteven(risultato)
   if(sceltautente === winner){
    paridispariel.innerHTML += `  ,Hai vinto`
   }
   else{
    paridispariel.innerHTML += `  ,Hai perso`
   }
})


function evennoteven (risultato){
    if(risultato % 2 === 0){
        return 'pari';
    }
    else{
        return 'dispari';
    }
}
function sommaparidispari(numeroutente,numeropc){
   let numerofinale = numeroutente + numeropc
   return numerofinale
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }