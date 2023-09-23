export default function PrimeiroComponente(props){
    return(
        <>
            <div className="wrap">
                <h1 className='title'>{props.titulo}</h1>
                <h2>{props.subtitulo}</h2>
            </div>
        </>
    )
}