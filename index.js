// Git form and color div
const colorBoxForm = document.querySelector('form')
const boxColorArea = document.querySelector('#color-boxes')
const resetall = document.querySelector('#reset_all')
//function serOrGet the the data
function setOrGetData (){
    let colorDb = localStorage.getItem('colorBoxes') 
    if(colorDb){
        return JSON.parse(colorDb)
    }

    localStorage.setItem('colorBoxes',JSON.stringify([]))
}
let colorDb = setOrGetData() || []
// Event Listner function start
colorBoxForm.addEventListener('submit' , function(event){
    event.preventDefault()
    let colorFld = event.target.color
    createBox(colorFld.value)
    insertData({id:colorFld.value})
    colorFld.value = null
})

//Resetall EventListner function 
resetall.addEventListener('click',function(event){
    event.preventDefault()
    localStorage.removeItem('colorBoxes' , JSON.stringify(colorDb))
    boxColorArea.remove()
})

//Create box div and append boxColrArea
function createBox(color){
    let box = document.createElement('div')
    box.classList.add('box')
    box.style.backgroundColor = color;
    box.textContent= color;
    boxColorArea.append(box)
}

//insert data function
function insertData(color){
    colorDb.push(color)
    localStorage.setItem('colorBoxes' , JSON.stringify(colorDb))
}

//load data data function
function loadData(){
    if(colorDb.length){
        colorDb.forEach(color => {
        createBox(color.id)            
        });
    }
}
loadData()




