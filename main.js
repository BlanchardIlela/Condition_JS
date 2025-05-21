let jour;
let result;
// Ne pas toucher aux codes du dessus

// Ecrivez votre code ici

function verifierJour(jour) {

    if(jour == "lundi" || jour == "mardi" || jour == "mercredi" || jour == "jeudi" || jour == "vendredi"){
        return result = 'Jour ouvrable'
    }else if(jour == 'samedi' || jour == 'dimanche'){
        return result = 'Week-end'
    }else{
        return result = undefined
    }

}

console.log(verifierJour(jour))
