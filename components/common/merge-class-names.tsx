import Image from 'next/image';
import imageContext from '@/public/merge-class-names.jpg';
import { Devider } from '../react/devider';
import { InstallWidget } from '../install-widget';
const data = {
	npm: 'npm i @ws-utils/common-merge-class-names',
	pnpm: 'pnpm i @ws-utils/common-merge-class-names',
	yarn: 'yarn add @ws-utils/common-merge-class-names',
};
export const MergeClassNames = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'merge-class-names'} />
			<h3 className='text-3xl mb-4'>mergeClassNames </h3>
			<p className='pl-4'>
				<span className='text-blue-500'>mergeClassNames </span> - это
				универсальная функция для объединения CSS классов, особенно полезная при
				работе с Tailwind CSS. Она позволяет комбинировать классы из разных
				источников в одну строку, поддерживая условное применение классов.
			</p>
			<InstallWidget data={data} />

			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={imageContext} alt='image context' />
		</div>
	);
};
