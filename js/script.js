let btn = document.getElementById('button');



btn.addEventListener('click', function(){
    let palindromael = document.getElementById('palindromael').value;
    
    let checkpalindromo='';
    for(let i = palindromael.length-1 ; i >= 0; i--){
    checkpalindromo += palindromael[i];
    console.log(checkpalindromo)
}
    
 
})