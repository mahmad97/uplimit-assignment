'use server';

import { promises } from 'fs';

// we can pass a url or page identifier to this function in practice but that's
// out of scope for this assignment
const getArticleContent = async () => {
	let articleContent = '<p>Hello World!</p>';

	try {
		articleContent = await promises.readFile(
			process.cwd() + '/public/content.html',
			'utf8'
		);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		try {
			await promises.writeFile(
				process.cwd() + '/public/content.html',
				articleContent,
				'utf8'
			);
		} catch (error) {
			console.error(error);
		}
	}

	return articleContent;
};

export { getArticleContent };
