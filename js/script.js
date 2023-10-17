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