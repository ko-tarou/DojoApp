import { useEffect, useState } from "react";
import QuizCard from "../../component/QuizCard";
import style from "../../styles/TopPage/TopPage.module.scss";
import Header from "../Header";
import { getQuizzes } from "../../firebase/quizService"; // Firestoreのデータ取得関数をインポート

export default function TopPage() {
	const [quizzes, setQuizzes] = useState([]); // クイズデータの状態管理

	useEffect(() => {
		// Firestoreからデータを取得
		const fetchQuizzes = async () => {
		try {
			const data = await getQuizzes(); // Firestoreからデータを取得
			setQuizzes(data); // 取得したデータを状態に保存
		} catch (error) {
			console.error("Error fetching quizzes:", error);
		}
		};

		fetchQuizzes();
	}, []); // 初回レンダリング時に実行

	return (
		<div className={style.toppage}>
			<Header />
			<div className={style.quizlist}>
				{quizzes.map((quiz) => (
				<QuizCard 
					key={quiz.id} 
					title={quiz.name} 
					score="100" 
					content={quiz.content} // contentも渡す
				/>
				))}
			</div>
		</div>
	);
}
