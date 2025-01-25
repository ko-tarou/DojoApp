import React, { useState } from "react";
import { addQuiz } from "../../firebase/quizService"; // 作成した関数をインポート

export default function DataPage() {
// フォームの状態を管理
const [formData, setFormData] = useState({
	name: "",
	content: "",
	limit: "",
	input: "",
	output: "",
	input1: "",
	output1: "",
	input2: "",
	output2: "",
});

// 入力値を更新するハンドラ
const handleChange = (e) => {
	const { name, value } = e.target;
	setFormData({ ...formData, [name]: value });
};

// フォームの送信ハンドラ
const handleSubmit = async (e) => {
	e.preventDefault();
	try {
	await addQuiz(formData); // Firestoreにデータを追加
	alert("Quiz added successfully!");
	setFormData({
		name: "",
		content: "",
		limit: "",
		input: "",
		output: "",
		input1: "",
		output1: "",
		input2: "",
		output2: "",
	}); // フォームをリセット
	} catch (error) {
	console.error("Error adding quiz:", error);
	alert("Failed to add quiz. Please try again.");
	}
};

return (
	<div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
	<h1>Add Quiz</h1>
	<form onSubmit={handleSubmit}>
		{/* 各入力フィールド */}
		<div>
		<label>Name:</label>
		<input
			type="text"
			name="name"
			value={formData.name}
			onChange={handleChange}
			required
		/>
		</div>
		<div>
		<label>Content:</label>
		<textarea
			name="content"
			value={formData.content}
			onChange={handleChange}
			required
		/>
		</div>
		<div>
		<label>Time Limit:</label>
		<input
			type="text"
			name="limit"
			value={formData.limit}
			onChange={handleChange}
			required
		/>
		</div>
		<div>
		<label>Input:</label>
		<input
			type="text"
			name="input"
			value={formData.input}
			onChange={handleChange}
			required
		/>
		</div>
		<div>
		<label>Output:</label>
		<input
			type="text"
			name="output"
			value={formData.output}
			onChange={handleChange}
			required
		/>
		</div>
		<div>
		<label>Input 1:</label>
		<input
			type="text"
			name="input1"
			value={formData.input1}
			onChange={handleChange}
		/>
		</div>
		<div>
		<label>Output 1:</label>
		<input
			type="text"
			name="output1"
			value={formData.output1}
			onChange={handleChange}
		/>
		</div>
		<div>
		<label>Input 2:</label>
		<input
			type="text"
			name="input2"
			value={formData.input2}
			onChange={handleChange}
		/>
		</div>
		<div>
		<label>Output 2:</label>
		<input
			type="text"
			name="output2"
			value={formData.output2}
			onChange={handleChange}
		/>
		</div>
		<button type="submit" style={{ marginTop: "10px" }}>
		Add Quiz
		</button>
	</form>
	</div>
);
}
