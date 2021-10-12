// функция, которая вовзращает случайное число от 
// аргумента x до аргумента y
// Math.random()
// Math.round() - математически честное
// Math.floor() -округление вниз
// Math.ceil() - округление вверх
const materials = ['камень', 'ножницы', 'бумага']

function createElement(tag, content, className){
    let el = document.createElement(tag);
    el.textContent = content;
    el.classList.add(className)
    document.body.appendChild(el)
    el.onclick = () =>{
        let choose = el.textContent; 
        let choose_comp = materials[getRandomNumber(2)]
        if (choose === choose_comp){
            alert("Ничья ")
        } else if(choose === 'бумага' && choose_comp === 'камень'){
            alert("вы выйграли!")
        } else if(choose === 'ножницы' && choose_comp === 'камень'){
            alert("вы проиграли!")
        } else if(choose === 'бумага' && choose_comp === 'ножницы'){
            alert("вы проиграли!")
        } else if(choose === 'камень' && choose_comp === 'ножницы'){
            alert("вы выйграли!")
        } else if(choose === 'камень' && choose_comp === 'бумага'){
            alert("вы проиграли!")
        } else if(choose === 'ножницы' && choose_comp === 'бумага'){
            alert("вы выигрывайте!")
        }
    }
}
materials.map((item)=>{
    createElement('button', item, "btn")
})

function getRandomNumber(y) {
    return Math.round(Math.random() * y)
}


console.log(getRandomNumber(3));





