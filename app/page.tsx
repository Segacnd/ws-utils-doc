import { navigation } from '@/mocks/data';
import { ContextGenerator } from '../components/react/context-generator';
import { ContextMemo } from '../components/react/context-memo';
import { MergeRefs } from '../components/react/merge-refs';
import { MergeStyles } from '../components/react/merge-styles';
import { UseCallbackRef } from '../components/react/use-callback-ref';
import { UseControllableState } from '../components/react/use-controllable-state';
import { UseDebounce } from '../components/react/use-debounce';
import { UseEffectOnce } from '../components/react/use-effect-once';
import { UseElementScrollPosition } from '../components/react/use-element-scroll-position';
import { UseElementSize } from '../components/react/use-element-size';
import { UseInterval } from '../components/react/use-interval';
import { UseIsFirstRender } from '../components/react/use-is-first-render';
import { UseLatest } from '../components/react/use-latest';
import { UseMediaQuery } from '../components/react/use-media-query';
import { UseOutsideClick } from '../components/react/use-outside-click';
import { UseScrollPosition } from '../components/react/use-scroll-position';
import { Routes } from '../components/common/routes';
import { Fetcher } from '../components/common/fetcher';
// import { QueryParams } from '../components/common/query-params';
// import { Url } from '../components/common/url';
import { MergeClassNames } from '../components/common/merge-class-names';
import { Instalation } from '../components/instalation';

export default function Home() {
	return (
		<div className=' flex'>
			<aside className='w-[300px] p-2 h-screen pl-4 pt-6 sticky top-0 border-r border-white/50'>
				<a
					href={'#instalation'}
					className='block px-4 py-1.5 mb-4 text-lg font-medium text-white hover:text-white/60'
				>
					Instalation
				</a>

				<details open>
					<summary>React</summary>
					{navigation.react.map((item) => (
						<a
							key={item.label}
							href={item.path}
							className='block px-4 py-1.5  text-sm font-medium text-white hover:text-white/60'
						>
							{item.label}
						</a>
					))}
				</details>
				<details open>
					<summary>Common (http + ts)</summary>
					{navigation.common.map((item) => (
						<a
							key={item.label}
							href={item.path}
							className='block px-4 py-1.5  text-sm font-medium text-white hover:text-white/60'
						>
							{item.label}
						</a>
					))}
				</details>
			</aside>
			<main className='p-4'>
				<Instalation />
				<ContextGenerator />
				<ContextMemo />
				<MergeRefs />
				<MergeStyles />
				<UseCallbackRef />
				<UseControllableState />
				<UseDebounce />
				<UseEffectOnce />
				<UseElementScrollPosition />
				<UseElementSize />
				<UseInterval />
				<UseIsFirstRender />
				<UseLatest />
				<UseMediaQuery />
				<UseOutsideClick />
				<UseScrollPosition />
				<Routes />
				<Fetcher />
				{/* <QueryParams /> */}
				{/* <Url /> */}
				<MergeClassNames />
			</main>
		</div>
	);
}
