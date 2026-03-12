export const RandomSpaceDiv = () => {
	const styles = {
		container:
			'flex flex-col place-self-center h-fit w-[50vw] bg-red-300/70 dark:bg-red-700/40 rounded-lg shadow-md border-red-400 p-2 py-4 text-center',
		title: 'font-medium mb-2',
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>HOME PAGE</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Esse veritatis error, fuga eius nulla consectetur tempora
				minus corrupti perferendis aut odit quas delectus quod autem
				at quos similique expedita hic.
			</p>
		</div>
	);
};
