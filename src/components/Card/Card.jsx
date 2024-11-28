import style from './Card.module.css'

export default function Card() {
    return (
        <div className={style.card}>
            <div>
                <img className={style.image} src="https://picsum.photos/600/400" alt="" />
                <div className={style.contentContainer}>
                    <div className={style.title}>Titolo del post</div>
                    <div className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure provident consectetur expedita natus quia doloribus asperiores beatae maxime reiciendis repellat numquam voluptate iusto corrupti quidem nulla placeat ut dicta et quo quod, rerum magni ab ipsum? Magnam delectus explicabo sunt! Consectetur hic debitis quo corrupti aliquam doloremque iste illo?</div>
                    <div className={style.button}>Leggi di più</div>
                </div>
            </div>
        </div>
    )
}