import { useEffect, useState } from 'react'
import { blogs } from '../constants'
import { ArrowNarrowRightOutline, ArrowNarrowLeftOutline } from '../assets'

function Blog() {
	const slideLeft = () => {
		const slider = document.getElementById('slider');
		slider.scrollLeft = slider.scrollLeft - 500;
	};

	const slideRight = () => {
		const slider = document.getElementById('slider');
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	const [scrollValue, setScrollValue] = useState(0);
	const [scrollEnd, setScrollEnd] = useState(0);
	const [prevBtnColor, setprevBtnColor] = useState('secondary-5');
	const [nextBtnColor, setNexBtnColor] = useState('primary-1');

	useEffect(() => {
		const onScroll = (e) => {
			setScrollValue(e.target.scrollLeft);
		};

		if (scrollValue == 0) {
			setprevBtnColor('secondary-5')
		} else if(scrollValue == scrollEnd) {
			setNexBtnColor('secondary-5');
		} else {
			setNexBtnColor('primary-1');
			setprevBtnColor('primary-1')
		}

		document.getElementById('slider').addEventListener('scroll', onScroll);
		setScrollEnd(document.getElementById('slider').scrollWidth - document.getElementById('slider').offsetWidth);
		// return () => window.removeEventListener('scroll', onScroll);
	
	}, [scrollValue, scrollEnd]);

	return (
		<div>
			<div className="flex justify-between">
				<span className='text-h3 font-medium'>latest Blog</span>
				<div className="flex gap-2">
					<button className={`p-2 border rounded-lg border-${prevBtnColor}`} onClick={slideLeft}>
						<svg className={`stroke-2 rounded stroke-${prevBtnColor}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7 16L3 12M3 12L7 8M3 12H21" />
						</svg>
					</button>
					<button className={`p-2 border rounded-lg border-${nextBtnColor}`} onClick={slideRight}>
						<svg className={`stroke-2 rounded stroke-${nextBtnColor}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17 8L21 12M21 12L17 16M21 12H3" />
						</svg>
					</button>
				</div>
			</div>
			<div className="relative flex items-center">
				<div id='slider' className="overflow-x-scroll h-full w-full scroll whitespace-nowrap scroll-smooth">
					{blogs.map((item) => (
						<img className='inline-block first:pl-0 last:pr-0 p-4 ease-in-out duration-300' key={item.id} src={item.image} alt={item.id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Blog