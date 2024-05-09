
function printList(lista){
    const unorderedList = document.createElement("ul")

    const lengthLista = lista.length
    var count = 0
    while (count < lengthLista){
        const temp = document.createElement("li")
        temp.innerText = lista[count]
        unorderedList.appendChild(temp)
        console.log(lista[count])
        count++
    }
    document.querySelector("body").appendChild(unorderedList)
}

function parseList(lista){
    lista = lista.split("\n")
    const result = []
    for (let i = 0; i < lista.length; i++){
        if (lista[i].length > 2){
            result.push(lista[i])
        }
    }

    return result
}

lista = `
zucchero
gelato
caramelle
nutella
`

printList(parseList(lista))

