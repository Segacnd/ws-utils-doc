import { Devider } from '../react/devider';
import extract from '@/public/query-extract.jpg';
import insert from '@/public/query-insert.jpg';
import encode from '@/public/query-encode.jpg';
import Image from 'next/image';
export const QueryParams = () => {
	return (
		<div className='flex flex-col p-4 gap-2'>
			<Devider id={'query-params'} />
			<h3 className='text-3xl mb-4'>extractQueryParams</h3>
			<ul className='mt-4'>
				<p className='text-xl'>Description:</p>
				<li className='ml-4'>
					Функция <span className='text-blue-500'>extractQueryParams</span>{' '}
					извлекает параметры запроса (query parameters) из URL и преобразует их
					в объект. Принимает URL-строку (абсолютную или относительную) и
					возвращает объект, где ключи - это имена параметров запроса, а
					значения - их соответствующие значения.
				</li>
				<p className='text-xl'>Params:</p>
				<li className='ml-4'>
					<span className='text-blue-500'>url: string</span> - URL-строка, из
					которой нужно извлечь параметры запроса
				</li>
				<p className='text-xl'>Return:</p>
				<li className='ml-4'>
					<span className='text-blue-500'>{`Record<string, string>`}</span> -
					объект, содержащий пары ключ-значение параметров запроса
				</li>
			</ul>
			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={extract} alt='image context' />

			<h3 className='text-3xl mb-4'>insertQueryParams</h3>
			<ul className='mt-4'>
				<p className='text-xl'>Description:</p>
				<li className='ml-4'>
					Функция <span className='text-blue-500'>insertQueryParams</span>{' '}
					объединяет базовый URL с параметрами запроса, корректно их кодируя.
				</li>
				<p className='text-xl'>Params:</p>
				<li className='ml-4'>
					<span className='text-blue-500'>baseUrl: string</span> - Базовый
					URL-адрес, к которому нужно добавить параметры
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>payload?: QueryParamsPayload</span> -
					Объект с параметрами запроса (опциональный)
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>
						options?: QueryParamsEncodingOptions
					</span>{' '}
					- Настройки кодирования параметров (опциональный)
				</li>
				<p className='text-xl'>Return:</p>
				<li className='ml-4'>
					<span className='text-blue-500'>{`Record<string, string>`}</span> -
					объект, содержащий пары ключ-значение параметров запроса
				</li>
			</ul>

			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={insert} alt='image context' />

			<h3 className='text-3xl mb-4'>encodeQueryParams</h3>
			<ul className='mt-4'>
				<p className='text-xl'>Description:</p>
				<li className='ml-4'>
					Функция <span className='text-blue-500'>encodeQueryParams</span>{' '}
					преобразует объект с параметрами запроса в закодированную строку
					запроса URL.
				</li>
				<p className='text-xl'>Params:</p>
				<li className='ml-4'>
					<span className='text-blue-500'>params: QueryParamsPayload</span> -
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>
						options?: QueryParamsEncodingOptions
					</span>{' '}
					-
				</li>
				<li className='ml-4'>
					<span className='text-blue-500'>
						options?: QueryParamsEncodingOptions
					</span>{' '}
					- опциональный объект с настройками:
				</li>
				<li className='ml-8'>
					<span className='text-blue-500'>
						{`serializers?: Serializer<any>[]`}
					</span>{' '}
					- пользовательские сериализаторы
				</li>
				<li className='ml-8'>
					<span className='text-blue-500'>
						{`arrayFormat?: 'repeat' | 'comma' | 'bracket'`}
					</span>{' '}
					- формат кодирования массивов
				</li>
				<li className='ml-8'>
					<span className='text-blue-500'>skipNull?: boolean</span> - пропускать
					ли null значения
				</li>
				<p className='text-xl'>Return:</p>
				<li className='ml-4'>Возвращает строку в формате URL-encoded</li>
			</ul>

			<p className='text-2xl mt-4'>Example</p>
			<Image className='rounded-xl' src={encode} alt='image context' />
		</div>
	);
};
