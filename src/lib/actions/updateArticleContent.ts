'use server';

import { promises } from 'fs';

// We can pass a url or page identifier to this function in practice but that's
// out of scope for this assignment. In practice that identifier will help us find
// the article in a database or file system where all the articles are stored.
const updateArticleContent = async (articleContent: string) => {
	try {
		await promises.writeFile(
			process.cwd() + '/public/content.html',
			articleContent,
			'utf8'
		);
	} catch (error) {
		console.error(error);
	}
};

export { updateArticleContent };
