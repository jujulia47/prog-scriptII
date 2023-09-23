import PrimeiroComponente from "@/components/primeiroComp";
import ValidaCPF from "@/components/ValidaCPF";

export default function AulaComp(){
    return(
        <>
            <PrimeiroComponente
                titulo="Meu primeiro Componente"
                subtitulo="Estamos apredendo NEXT.js com REACT"
            />

            <PrimeiroComponente
                titulo="Teste de chamada"
                subtitulo="uma nova tag"
            />

            <ValidaCPF cpf="12345678912"/>
            <ValidaCPF cpf="12345678"/>
        </>
    )
}