import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>ホームページ</h1>
            <Link href="/TopPage">TopPage</Link>
            <Link href="/QuizPage">QuizPage</Link>
            <Link href="/DataPage">DataPage</Link>
        </div>
    );
}
