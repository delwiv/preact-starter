import { h } from 'preact';
import { Link } from 'preact-router';

export default function ({ formName }) {
	return (
		<header className="header">
			<h1>formName</h1>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/blog">Blog</Link>
				<Link href="/credit">Credit</Link>
			</nav>
		</header>
	)
}
