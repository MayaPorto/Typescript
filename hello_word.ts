/** tipagem no typescript
 * 
 * coloca o nome da var  e o tipo dela
 * tipagem implicita - var tem um tipo mas no código não vê
 * 
 *  */

/**let username = 'shaolin_matador_de_porco'
username = 678 //ela não vai aceitar pq username é string não tipo number*/
let username = 'shaolin_matador_de_porco'
username = 'flavioDoPneu'

//tipagem explícita
//const pi: number = 3.1415
//let logado: boolean = true
const pi: number = 3.1415
pi:  23

//union types - informar que a variável vai gauardar outro tipo de dado
let idade: number | string | boolean = 25 //var vai poder guardar 2 tipos de valores

let generico: any = []//qnd há um extenso ou não sabe o valor da var
generico = {
    a: '',
    b: 8,
    c: true
}
generico = 'Eu sou generico'
generico = 6.89

//pra criar um array, tem que colocar[]
const listaDeNomes: string [] = ['João Pedro', 'César', 'Vitor']
listaDeNomes.push('Roberta')

const valores: Array<string | number> = ['azul', 55] //generico informa p o objeto que ele vai trabalhar com um tipo de dado
const arr: Array<boolean> = [true, false]
//const lista: Array<any>
//