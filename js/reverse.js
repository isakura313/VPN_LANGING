//  есть функция
// на вход приходит слово
//  вернуть true, если оно читается задом наперед и нормально
// одинаково
function reverseWord(word){
    // топот -  true
    // торт - false 
    let reverse_word = ''
    for(let i = word.length-1; i >= 0; i--){
        reverse_word += word[i]
    }
    if(word == reverse_word){
        return true
    } else {
        return false
    }
}

console.log(reverseWord('топот'))
console.log(reverseWord('торт'))