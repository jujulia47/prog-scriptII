function GerarLista(valor = 10){
    let lista = [];
    for(let i = 0; i <= valor; i++){
        lista.push(<span>{i}</span>)
    }
    return lista
}

export default function Desafio (){
    return( //diamante
        <> 
            {GerarLista()}
            {GerarLista(20)}
            {GerarLista(30)}
        </>        
    )
}