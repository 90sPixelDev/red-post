import Link from 'next/link';
import React from 'react';

export default function Footer() {
	const styles = {
		container:
			'b-0 w-full h-[50px] bg-gray-300 dark:bg-gray-700 flex flex-nowrap justify-between px-3 items-center',
		text: 'font-thin text-center 1fr',
		link: 'hover:text-red-700 dark:hover:text-red-300 text-center 1fr',
	};

	return (
		<div className={styles.container}>
			<p className={styles.text}>Created by Lien Font with ❤️</p>
			<a
				className={styles.link}
				href='https://lienfont.dev'
				rel='noopener noreferrer'
			>
				Portfolio Website
			</a>
		</div>
	);
}
