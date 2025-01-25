import { collection, addDoc, getDocs, doc, setDoc, deleteDoc,query,where } from "firebase/firestore";
import { db } from "../../firebase"; // Firebase設定ファイルをインポート

const quizCollection = collection(db, "quiz"); // /quiz コレクションへの参照

// **1. データを追加**
export const addQuiz = async (quizData) => {
try {
	const docRef = await addDoc(quizCollection, quizData);
	console.log("Quiz added with ID:", docRef.id);
	return docRef.id;
} catch (error) {
	console.error("Error adding quiz:", error);
	throw error;
}
};

// **2. データを取得**
export const getQuizzes = async () => {
try {
	const querySnapshot = await getDocs(quizCollection);
	const quizzes = querySnapshot.docs.map((doc) => ({
	id: doc.id,
	...doc.data(),
	}));
	console.log("Quizzes fetched:", quizzes);
	return quizzes;
} catch (error) {
	console.error("Error fetching quizzes:", error);
	throw error;
}
};

// **3. データを更新**
export const updateQuiz = async (id, updatedData) => {
try {
	const quizDoc = doc(db, "quiz", id); // 特定のドキュメントを指定
	await setDoc(quizDoc, updatedData, { merge: true }); // merge: true で部分更新
	console.log("Quiz updated with ID:", id);
} catch (error) {
	console.error("Error updating quiz:", error);
	throw error;
}
};

// **4. データを削除**
export const deleteQuiz = async (id) => {
try {
	const quizDoc = doc(db, "quiz", id); // 特定のドキュメントを指定
	await deleteDoc(quizDoc);
	console.log("Quiz deleted with ID:", id);
} catch (error) {
	console.error("Error deleting quiz:", error);
	throw error;
}
};

// 特定のタイトルに一致するクイズを取得
export const getQuizByTitle = async (title) => {
	try {
	  const quizQuery = query(
		collection(db, "quiz"), // "quiz"コレクションを参照
		where("name", "==", title) // "name"フィールドがtitleに一致するものを検索
	  );
	  const querySnapshot = await getDocs(quizQuery);
	  if (!querySnapshot.empty) {
		// 最初の一致するドキュメントを返す
		return querySnapshot.docs[0].data();
	  } else {
		return null; // 一致するデータがない場合
	  }
	} catch (error) {
	  console.error("Error getting quiz by title:", error);
	  throw error;
	}
};