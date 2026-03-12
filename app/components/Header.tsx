import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
	const styles = {
		headerBody:
			'fixed grid grid-cols-[1fr_75px] min-h-[50px] min-w-full justify-center dark:bg-purple-900 font-sans dark:shadow-lg shadow-gray-300/50 bg-white/80 backdrop-blur-sm z-50',
		linkGroup: 'items-center flex gap-6 ml-4',
		link: 'transition-colors duration-200 dark:hover:bg-red-900 px-4 py-2 rounded-md',
	};

	return (
		<div className={styles.headerBody}>
			<div className={styles.linkGroup}>
				<Link href='/'>
					<div className={styles.link}>Home</div>
				</Link>
				<Link href='/performance'>
					<div className={styles.link}>Performance</div>
				</Link>
				<Link href='/scale'>
					<div className={styles.link}>Scale</div>
				</Link>
				<Link href='/about'>
					<div className={styles.link}>About</div>
				</Link>
			</div>
			<ThemeToggle />
		</div>
	);
}
