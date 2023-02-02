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
    let q = getNumber()

    counter++

    td = `
    <td style="background-color: ${getColor(q)};">${q}</td>
    `
    
    table += `<td${td}</td>`

    html = `<table><tr>${table}</tr></table>`

    document.body.innerHTML += html
}
// let wer = document.body.firstChild.nextSibling.nextSibling.nextSibling.nextSibling
// console.log(wer)
// func2()


let html = ""

html+= `<table>${table}</table>`
// html+= `<table>${func2()}</table>`

document.body.innerHTML += html



