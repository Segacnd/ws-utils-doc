import { navigation } from '@/mocks/data';
import { ContextGenerator } from '../components/context-generator';
import { ContextMemo } from '../components/context-memo';
import { MergeRefs } from '../components/merge-refs';
import { MergeStyles } from '../components/merge-styles';
import { UseCallbackRef } from '../components/use-callback-ref';
import { UseControllableState } from '../components/use-controllable-state';
import { UseDebounce } from '../components/use-debounce';
import { UseEffectOnce } from '../components/use-effect-once';
import { UseElementScrollPosition } from '../components/use-element-scroll-position';
import { UseElementSize } from '../components/use-element-size';
import { UseInterval } from '../components/use-interval';
import { UseIsFirstRender } from '../components/use-is-first-render';
import { UseLatest } from '../components/use-latest';
import { UseMediaQuery } from '../components/use-media-query';
import { UseOutsideClick } from '../components/use-outside-click';
import { UseScrollPosition } from '../components/use-scroll-position';

export default function Home() {
	return (
		<div className=' flex'>
			<aside className='w-[300px] p-2 h-screen pl-4 pt-6 sticky top-0 border-r border-white/50'>
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
			</aside>
			<main className='p-4'>
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
			</main>
		</div>
	);
}
