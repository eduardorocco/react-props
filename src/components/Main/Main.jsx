import style from './Main.module.css'
import Card from "../Card/Card"

export default function Main() {
    return (
        <main>
            <div className="container">
                <div className={style.row}>
                    <Card></Card>
                </div>
            </div>
        </main>
    )
}