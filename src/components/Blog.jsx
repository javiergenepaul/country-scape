import { useEffect, useState } from 'react'
import { blogs } from '../constants'
import BlogCard from './UI/BlogCard'

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

	useEffect(() => {
		const onScroll = (e) => {
			setScrollValue(e.target.scrollLeft);
		};

		// if (scrollValue == 0) {
		// 	setprevBtnStrokeColor('stroke-secondary-5');
		// 	setprevBtnBorderColor('border-secondary-5');
		// } else if (scrollValue == scrollEnd) {
		// 	setNexBtnStrokeColor('stroke-secondary-5');
		// 	setNexBtnBorderColor('border-secondary-5');
		// } else {
		// 	setNexBtnStrokeColor('stroke-primary-1');
		// 	setprevBtnStrokeColor('stroke-primary-1');

		// 	setNexBtnBorderColor('border-primary-1');
		// 	setprevBtnBorderColor('border-primary-1');
		// }

		document.getElementById('slider').addEventListener('scroll', onScroll);
		setScrollEnd(document.getElementById('slider').scrollWidth - document.getElementById('slider').offsetWidth);
	}, [scrollValue, scrollEnd]);

	let prev_btn_border = '';
	let prev_btn_stroke = '';
	let next_btn_border = '';
	let next_btn_stroke = '';

	if (scrollValue == 0) {
		prev_btn_stroke = 'stroke-secondary-5';
		prev_btn_border = 'border-secondary-5';
		next_btn_stroke = 'stroke-primary-1';
		next_btn_border = 'border-primary-1';
	} else if (scrollValue == scrollEnd) {
		next_btn_stroke = 'stroke-secondary-5';
		next_btn_border = 'border-secondary-5';
	} else {
		next_btn_stroke = 'stroke-primary-1';
		next_btn_border = 'border-primary-1';
	}

	return (
		<div>
			<div className="flex justify-between pb-8">
				<span className='text-h3 text-secondary-1 font-medium'>Latest Blog</span>
				<div className="flex gap-2">
					<button className={`p-2 border rounded-lg ${scrollValue == 0 ? 'border-secondary-5' : 'border-primary-1'}`} onClick={slideLeft}> 
						<svg className={`stroke-2 rounded ${scrollValue == 0 ? 'stroke-secondary-5' : 'stroke-primary-1'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7 16L3 12M3 12L7 8M3 12H21" />
						</svg>
					</button>
					<button className={`p-2 border rounded-lg ${next_btn_border}`} onClick={slideRight}>
						<svg className={`stroke-2 rounded ${next_btn_stroke}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17 8L21 12M21 12L17 16M21 12H3" />
						</svg>
					</button>
				</div>
			</div>
			<div className="relative flex items-center">
				<div id='slider' className="overflow-x-scroll h-full w-full scroll whitespace-nowrap scroll-smooth scrollbar-hide">
					{blogs.map((item) => (
						<BlogCard item={item} id={item.id} key={item.id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Blog