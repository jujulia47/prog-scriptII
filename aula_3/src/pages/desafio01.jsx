// export default function Desafio(){
//     const spans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     const result = spans.map((spans) => spans) 
    
//     return(
//         <span>{result}</span>
//     )
// }

function List(valor = 10){
    let list = []
    for(let i = 0; i <= valor; i ++){
        list.push(<span>{i}</span>)
    }
    return list
}

export default function Desafio(){
    return(
        <div>
            {List()}
            {List(20)}
            {List()}
        </div>
    )
}
