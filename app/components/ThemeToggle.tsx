'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const style = {
		container:
			'flex items-center justify-center w-full h-full transition-colors duration-200',
		icon: 'flex items-center w-8 h-8 rounded-full items-center justify-center bg-gray-400/50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-pointer',
	};

	if (!mounted) {
		return null;
	}

	return theme == 'light' ? (
		<button className={style.container} onClick={() => setTheme('dark')}>
			<div className={style.icon}>LIGHT</div>
		</button>
	) : (
		<button className={style.container} onClick={() => setTheme('light')}>
			<div className={style.icon}>DARK</div>
		</button>
	);
};
