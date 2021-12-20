import Head from 'next/head';
import Hero from '../components/Hero';
import sections from '../components/sections';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Alessio Muyanni</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Hero />

			<main>
				{sections.map((Section, idx) => {
					return (
						<section key={idx}>
							<Section />
						</section>
					);
				})}
			</main>
		</div>
	);
}
