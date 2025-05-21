let number;
let result;
// Ne pas toucher aux codes au-dessus

// Ecrivez votre code ici

if(Number.isNaN(number) || typeof number !== 'number'){
    result = null
}else{
    if(number < 0 || number === 0){
        result = false
    }else{
        result = true
    }
}

console.log(result);
