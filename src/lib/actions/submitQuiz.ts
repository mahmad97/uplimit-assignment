'use server';

import { promises } from 'fs';

const submitQuiz = async (pathname: string, payload: FormData) => {
	const formData = Object.fromEntries(payload);

	let responses = { [pathname]: [] };

	console.log(responses);

	try {
		const data = await promises.readFile(
			process.cwd() + '/public/quizResponses.json',
			'utf8'
		);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		responses = JSON.parse(data);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		// file doesn't exist
		console.log('file did not exist');
	}

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (!responses[pathname]) {
		responses[pathname] = [];
	}

	console.log(responses);

	responses[pathname].push(formData);

	console.log(responses);

	try {
		await promises.writeFile(
			process.cwd() + '/public/quizResponses.json',
			JSON.stringify(responses),
			'utf8'
		);
	} catch (error) {
		console.error(error);
	}
};

export { submitQuiz };
