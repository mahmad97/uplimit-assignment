import type { FormEvent, ReactElement } from 'react';

import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';

import { submitQuiz } from 'lib/actions/submitQuiz';

const clearBackgroundStyle =
	'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 disabled:bg-gray-300';

const submitBackgroundStyle =
	'bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 disabled:bg-indigo-300';

const QuestionComponent = (): ReactElement => {
	const pathname = usePathname();
	const formRef = useRef<HTMLFormElement>(null);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		if (formRef.current) {
			void submitQuiz(pathname, new FormData(formRef.current));
		}

		setSubmitted(true);
	};

	return (
		<NodeViewWrapper className='question'>
			<div className='rounded-t-lg bg-slate-300 p-2'>{'Question'}</div>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className='rounded-b-lg bg-slate-200 p-2'>
				<NodeViewContent className='question-content' />
				<div className='mt-4 flex gap-2'>
					<button
						disabled={submitted}
						className={`py-1 px-2 ${clearBackgroundStyle} text-base font-normal border border-slate-400 rounded-md`}
						type='reset'>
						{'Clear'}
					</button>
					<button
						disabled={submitted}
						className={`py-1 px-2 ${submitBackgroundStyle} text-base font-normal text-neutral-100 border border-slate-400 rounded-md`}
						type='submit'>
						{'Submit'}
					</button>
				</div>
			</form>
		</NodeViewWrapper>
	);
};

export default QuestionComponent;
