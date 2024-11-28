import style from './Card.module.css'
import placeHolder from '../../assets/placeholder.webp'

export default function Card({ title = '', content = '', tags = [], image = '' }) {


    return (
        <div className={style.card}>
            <div>
                <img className={style.image} src={image || placeHolder} alt="" />
                <div className={style.contentContainer}>
                    <div className={style.title}>{title}</div>
                    <div className={style.tags}>
                        {tags.map((tag, index) => (
                            <div key={index} className={style.tags}>
                                <div>
                                    {tag}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={style.text}>{content}</div>
                    <div className={style.button}>Leggi di più</div>
                </div>
            </div>
        </div>
    )
}