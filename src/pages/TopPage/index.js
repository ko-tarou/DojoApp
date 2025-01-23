import QuizCard from "../../component/QuizCard";
import style from "../../styles/TopPage/TopPage.module.scss"
import Header from "../Header";

export default function TopPage() {
	return (
		<div className={style.toppage}>
			<Header />
			<div className={style.quizlist}>
				<QuizCard
					title="Quiz Title"
					score="100"
				/>
				<QuizCard
					title="Quiz Title"
					score="100"
				/>
				<QuizCard
					title="Quiz Title"
					score="100"
				/>
			</div>
		</div>
	);
}