import React, { useState } from "react";
import { useRouter } from "next/router";
import style from "../../styles/QuizPage/QuizPage.module.scss";
import Header from "../Header";

export default function QuizPage() {
	const router = useRouter();
	const { title, content } = router.query; // クエリからタイトルと問題文を取得

	const [selectedLanguage, setSelectedLanguage] = useState("Python");
	const [code, setCode] = useState("");

	const handleLanguageChange = (e) => {
		setSelectedLanguage(e.target.value);
	};

	return (
		<div>
			<Header />
			<div className={style.quizpage}>
				<div className={style.quiz}>
					<div className={style.title}>
						{title || "タイトル"} {/* titleが取得されていない場合はデフォルト値 */}
					</div>
					<div className={style.question}>問題文</div>
					<div className={style.container}>
						{content || "問題文を読み込んでいます..."} {/* contentを表示 */}
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
							<div key={index} className={style.numbers}>
							{index + 1}
							</div>
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
