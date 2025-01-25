import { useRouter} from "next/router";
import style from "../../styles/component/QuizCard/QuizCard.module.scss";

export default function QuizCard({title, score,content}) {

    const router = useRouter();

    const handleButtonClick = () => {
        router.push({
            pathname: '/QuizPage',
            query: {title,content},
        })
    }

    return (
        <div className={style.card}>
            <div className={style.string}>
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.score}>
                    正答率：<span className={style.Bold}>{score}%</span>
                </div>
            </div>
            <button className={style.customButton} onClick={handleButtonClick}>挑戦</button>
        </div>
    );
}