import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDP24rqGI6q3JqmLDnXRKBnEDiQq8-DvW0",
	authDomain: "programmingdojo-d7973.firebaseapp.com",
	projectId: "programmingdojo-d7973",
	storageBucket: "programmingdojo-d7973.firebasestorage.app",
	messagingSenderId: "755056413123",
	appId: "1:755056413123:web:3b49b883b607bcd88e1576",
	measurementId: "G-N0S108S8F3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Firestoreをエクスポート
