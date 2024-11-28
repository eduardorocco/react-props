import style from './Card.module.css'

export default function Card({title = '', content = '', tags =[], image = ''}) {

    const description = tags.join(', ')
    

    return (
        <div className={style.card}>
            <div>
                <img className={style.image} src={image} alt="" />
                <div className={style.contentContainer}>
                    <div className={style.title}>{title}</div>
                    <div className={`${style.tags}`}>{description}</div>
                    <div className={style.text}>{content}</div>
                    <div className={style.button}>Leggi di più</div>
                </div>
            </div>
        </div>
    )
}