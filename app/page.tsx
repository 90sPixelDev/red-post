import { RandomSpaceDiv } from './components/RandomSpaceDiv';

export default function Home() {
	const styles = {
		container: 'flex flex-col gap-4',
	};

	return (
		<div className={styles.container}>
			<RandomSpaceDiv />
			<RandomSpaceDiv />
			<RandomSpaceDiv />
			<RandomSpaceDiv />
			<RandomSpaceDiv />
			<RandomSpaceDiv />
			<RandomSpaceDiv />
			<RandomSpaceDiv />
			<RandomSpaceDiv />
			<RandomSpaceDiv />
		</div>
	);
}
