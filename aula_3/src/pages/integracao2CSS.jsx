import PrimeiroComponente from '@/components/PrimeiroComp'
import styles from '@/styles/integracao2CSS.module.css'

export default function IntegracaoCSS(){
    return (
        <>
            <h1 className={styles.vermelho}>Teste CSS Modules</h1>
            <h1 className={styles.azul}>Teste CSS Modules</h1>
            <div className='integracao1'>
                <PrimeiroComponente titulo = "Teste com parametro" css = "verde"/>
            </div>            
        </>
    )
}