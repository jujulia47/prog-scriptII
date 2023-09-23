import Black from "@/component/black";
import White from "@/component/white";
import style from '../styles/tabuleiro.module.css'

export default function Tabuleiro() {
    const handleBlock = () => {
        const blocks = [];
        for (let i = 0; i < 8; i++) {
            if (i % 2 !== 0) {
                blocks.push(<White key={i} />);
            } else {
                blocks.push(<Black key={i} />);
            }
        }
        return blocks;
    }

    const handleBlock2 = () => {
        const blocks = [];
        for (let i = 0; i < 8; i++) {
            if (i % 2 !== 0) {
                blocks.push(<Black key={i} />);
            } else {
                blocks.push(<White key={i} />);
            }
        }
        return blocks;
    }

    return (
        <div className={style.tabuleiro}>
            <div className={style.line}>
                {handleBlock()}
            </div>

            <div className={style.line}>
                {handleBlock2()}
            </div>

            <div className={style.line}>
                {handleBlock()}
            </div>

            <div className={style.line}>
                {handleBlock2()}
            </div>

            <div className={style.line}>
                {handleBlock()}
            </div>

            <div className={style.line}>
                {handleBlock2()}
            </div>

            <div className={style.line}>
                {handleBlock()}
            </div>

            <div className={style.line}>
                {handleBlock2()}
            </div>
        </div>
    )
}