import { Devider } from '../react/devider';
import fetcher1 from '@/public/fetcher-1.jpg';
import fetcher2 from '@/public/fetcher-2.jpg';
import Image from 'next/image';
import { InstallWidget } from '../install-widget';
const data = {
	npm: 'npm i @ws-utils/common-http',
	pnpm: 'pnpm i @ws-utils/common-http',
	yarn: 'yarn add @ws-utils/common-http',
};
export const Fetcher = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'fetcher'} />
			<h3 className='text-3xl mb-4'>Fetcher</h3>
			<InstallWidget data={data} />
			<ul className='mt-4'>
				<p className='text-xl'>Components:</p>
				<li className='ml-4'>
					<span className='text-blue-500'>Fetcher</span> - Принимает объект
					конфигурации FetcherConfig, который объединяется с конфигурацией по
					умолчанию DefaultFetcherConfig.
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>override</span> - Позволяет создать
					новый экземпляр Fetcher с измененной конфигурацией, не изменяя
					оригинальную конфигурацию.
					<br />
					Принимает функцию overrideFn, которая возвращает новую конфигурацию на
					основе текущей.
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>fetch</span> - Выполняет HTTP-запрос с
					использованием заданного URL и полезной нагрузки (payload).
					<br />
					Обрабатывает параметры запроса, заголовки и полезную нагрузку,
					объединяя их с глобальными настройками. Поддерживает обработку ответа
					и ошибок с помощью пользовательских функций processResponse и
					errorHandler.
					<br />
					Реализует механизм повторных попыток в случае ошибок, используя флаг
					retry и счетчик attempt.
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>
						Методы get, post, put, patch, delete, head
					</span>
					- Обертки над методом fetch, которые задают соответствующий HTTP-метод
					для запроса.
				</li>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={fetcher1} alt='image context' />
			<Image className='rounded-xl' src={fetcher2} alt='image context' />
		</div>
	);
};
