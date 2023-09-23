export default function CpfValidator(){
    function seila(){
        // let help = e.target
        // console.log(help);
    }

    return(
        <div>
            <label htmlFor="">Digite seu CPF</label>
            <input type="text" placeholder="Digite seu CPF" className="cpf-input" onKeyDown={seila()}/>
        </div>

    )
}