// import { use, useEffect, useState } from 'react';

export const ThemeToggle = () => {
	const style = {
		container:
			'flex items-center justify-center w-full h-full transition-colors duration-200',
		icon: 'flex items-center w-8 h-8 rounded-full items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-pointer',
	};

	return (
		<button className={style.container}>
			<div className={style.icon}>🌙</div>
		</button>
	);
};
