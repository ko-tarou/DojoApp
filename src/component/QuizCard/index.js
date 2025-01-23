import style from "../../styles/component/QuizCard/QuizCard.module.scss";

export default function QuizCard({title, score}) {
    return (
        <div className={style.card}>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.score}>
                正答率：<span className={style.Bold}>{score}%</span>
            </div>
        </div>
    );
}