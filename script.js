// let arr = []
// while(arr.length < 50){
//     arr.push(getNumber())
// }
// console.log(arr)

////
// function foo(){
//     arr.push(`<td style="background-color: ${getNumber()};">${getNumber()}</td>`)
// }
let table = ``
function func1(){
    for(let i = 0; i <= 5; i++){
        let a = getNumber()
        let b = getNumber()
        let c = getNumber()
        let d = getNumber()
        let e = getNumber()

        table += `
        <tr>
        <td style="background-color: ${getColor(a)};">${a}</td>
        <td style="background-color: ${getColor(b)};">${b}</td>
        <td style="background-color: ${getColor(c)};">${c}</td>
        <td style="background-color: ${getColor(d)};">${d}</td>
        <td style="background-color: ${getColor(e)};">${e}</td>
        </tr>
    `}
}
func1()

///
let tr = ''
let counter = 0;
// let table2 = table
// console.log(table2)
// html = ""
function func2(){
    counter++

    let q = getNumber();
    let td1 = ``;
    let td2 = ``;
    let td3 = ``;
    let td4 = ``;
    let td5 = ``;

    if(counter == 1){
        td1 = `<td style="background-color: ${getColor(q)};">${q}</td>`
        tr += td1
        table += td1
    } else if(counter == 2){
        td2 = `<td style="background-color: ${getColor(q)};">${q}</td>`
        tr += td2
        table += td2
    } else if(counter == 3){
        td3 = `<td style="background-color: ${getColor(q)};">${q}</td>`
        tr += td3
        table += td3
    } else if(counter == 4){
        td4 = `<td style="background-color: ${getColor(q)};">${q}</td>`
        tr += td4
        table += td4
    } else if (counter == 5) {
        td5 = `<td style="background-color: ${getColor(q)};">${q}</td>`
        tr += td5
        table += td5
        table += `<tr>${tr}</tr>`
        counter = 0;
        tr = ''
    }
    
    // tr = `
    // <td>${td1}</td>
    // <td>${td2}</td>
    // <td>${td3}</td>
    // <td>${td4}</td>
    // <td>${td5}</td>
    // `


    // table += `<tr>${tr}</tr>`

    html = `<table>${table}</table>`
    // console.log(document.body.lastElementChild.previousElementSibling.previousElementSibling)
    document.body.lastElementChild.innerHTML = ""

    document.body.innerHTML += html
}
// let wer = document.body.firstChild.nextSibling.nextSibling.nextSibling.nextSibling
// console.log(wer)
// func2()


let html = ""

html+= `<table>${table}</table><hr>`
// html+= `<table>${func2()}</table>`

document.body.innerHTML += html



