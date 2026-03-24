import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
	const styles = {
		container:
			'b-0 w-full h-[50px] bg-gray-300 dark:bg-gray-700 flex flex-nowrap justify-between px-3 items-center',
		text: 'font-thin text-center 1fr',
		linkContainer:
			'flex gap-2 items-center hover:text-red-700 dark:hover:text-red-300',
		icon: 'w-4 h-4',
		link: 'text-center 1fr',
	};

	return (
		<div className={styles.container}>
			<p className={styles.text}>
				&#169; {new Date().getFullYear()} Created by Lien Font with
				❤️
			</p>
			<div className={styles.linkContainer}>
				<FontAwesomeIcon
					className={styles.icon}
					icon={faBriefcase}
				/>
				<a
					className={styles.link}
					href='https://lienfont.dev'
					rel='noopener noreferrer'
					target='_blank'
				>
					Portfolio Website
				</a>
			</div>
		</div>
	);
}
