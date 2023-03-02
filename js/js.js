let doc = document


let buton = doc.querySelector('.btn1')
let x = doc.querySelector('.x')
let none = doc.querySelector('.none')
let form = doc.querySelector('.form')



buton.onclick = () => {
    none.style.display = 'block'
}

x.onclick = () => {
    none.style.display = 'none'
}

let work_form = (event) => {
    event.preventDefault()
    let inps = doc.querySelectorAll('input')
    let arr = []
    let values = {
        name:'',
        gmail:'',
        tel:''
    }
    inps.forEach(i => {
        if(i.name == 'name_id'){
            values.name = i.value
        }else if(i.name == 'mail'){
            values.gmail = i.value
        }else{
            values.tel = i.value
        }
        i.value = ''
    })
    arr.push(values)
console.log(arr);


}

form.addEventListener('submit', work_form)
