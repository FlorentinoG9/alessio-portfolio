import Head from 'next/head';
import sections from '../components/sections';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Alessio Muyanni</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			

			<main className='max-w-7xl mx-auto'>
				{sections.map((Section, idx) => {
					return (
						<section id={Section.name} key={idx} className='scroll-mt-24'>
							<Section />
						</section>
					);
				})}
			</main>
		</div>
	);
}
