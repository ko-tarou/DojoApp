import React,{ useState } from "react"
import style from "../../styles/QuizPage/QuizPage.module.scss"
import Header from "../Header"

export default function QuizPage() {

	const [selectedLanguage,setSelectedLanguage] = useState("Python");
	const [code,setCode] = useState("");

	const handleLanguageChange = (e) => {
		setSelectedLanguage(e.target.value);
	}

	return (
		<div>
			<Header />
			<div className={style.quizpage}>
				<div className={style.quiz}>
					<div className={style.title}>
						問題のタイトル
					</div>
					<div className={style.question}>
						問題文
					</div>
					<div className={style.container}>
						正整数nの桁和を、nを10進法で表したときの各桁の和と定義します。
						例えば20252025の桁和は2+0+2+5=92+0+2+5=9です。正整数nがnの桁和で割り切れる時、nを良い整数と呼びます。
						例えば20252025はその桁和である99で割り切れるので良い整数です。
						正整数の組(a,a+1)(a,a+1)であってaとa+1a+1が共に良い整数であるものを双子の良い整数と呼びます。
						例えば(2024,2025)(2024,2025)は双子の良い整数です。
						正整数Nが与えられます。N≤aN≤aかつa+1≤2Na+1≤2Nであるような双子の良い整数(a,a+1)(a,a+1)を発見してください。
						そのような(a,a+1)(a,a+1)が存在しない場合はそのことを報告してください。
					</div>
				</div>
				<div className={style.answer}>
					<select
						id="language-dropdown"
						value={selectedLanguage}
						onChange={handleLanguageChange}
						className={style.language}
					>
						<option value="Python">Python</option>
						<option value="Java">Java</option>
						<option value="C">C</option>
						<option value="C++">C++</option>
						<option value="C#">C#</option>
					</select>

					<div className={style.codeeditorcontainer}>
						<div className={style.linenumbers}>
							{/* 行番号を動的に生成 */}
								{code.split("\n").map((_, index) => (
								<div key={index} className={style.numbers}>{index + 1}</div>
								))}
						</div>
						<textarea
							id="code-input"
							className={style.codeinput}
							value={code}
							onChange={(e) => setCode(e.target.value)}
							placeholder="Write your program here..."
							rows="15"
						></textarea>
					</div>
				</div>
			</div>
		</div>
	);
}