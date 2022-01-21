function isIsogram(str){
    //...

    
    let arr = [...str.toLowerCase()]
    let end = arr.length
    for (let i = 0; i < end; i++) {
        
        let w = arr.shift()
        
        if (arr) {
            if (arr.indexOf(w)> -1) return false
        }
    }
    return true
  }

//   console.log(isIsogram("Dermatoglyphics"), true );
//     console.log(isIsogram("isogram"), true );
//     console.log(isIsogram("aba"), false, "same chars may not be adjacent" );
//     console.log(isIsogram("moOse"), false, "same chars may not be same case" );
//     console.log(isIsogram("isIsogram"), false );
//     console.log(isIsogram(""), true);
    console.log(isIsogram("abcdefghijklmnopqrstuvwxyzV"), false);
    