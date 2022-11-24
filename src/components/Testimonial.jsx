import { useEffect, useState } from 'react'
import { testimonials } from '../constants'
import { testimonial_logo } from '../assets'

function Testimonial() {

	const slideLeft = () => {
		const slider = document.getElementById('testimonial-slider');
		slider.scrollLeft = slider.scrollLeft - 500;
	};

	const slideRight = () => {
		const slider = document.getElementById('testimonial-slider');
		slider.scrollLeft = slider.scrollLeft + 500;
	};
	const [scrollValue, setScrollValue] = useState(0);
	const [scrollEnd, setScrollEnd] = useState(0);
	const [prevBtnStrokeColor, setprevBtnStrokeColor] = useState('stroke-secondary-5');
	const [nextBtnStrokeColor, setNexBtnStrokeColor] = useState('stroke-primary-1');
	const [prevBtnBorderColor, setprevBtnBorderColor] = useState('border-secondary-5');
	const [nextBtnBorderColor, setNexBtnBorderColor] = useState('border-primary-1');

	useEffect(() => {
		const onScroll = (e) => {
			setScrollValue(e.target.scrollLeft);
		};

		if (scrollValue == 0) {
			setprevBtnStrokeColor('stroke-secondary-5');
			setprevBtnBorderColor('border-secondary-5');
		} else if (scrollValue == scrollEnd) {
			setNexBtnStrokeColor('stroke-secondary-5');
			setNexBtnBorderColor('border-secondary-5');
		} else {
			setNexBtnStrokeColor('stroke-primary-1');
			setprevBtnStrokeColor('stroke-primary-1');

			setNexBtnBorderColor('border-primary-1');
			setprevBtnBorderColor('border-primary-1');
		}

		document.getElementById('testimonial-slider').addEventListener('scroll', onScroll);
		setScrollEnd(document.getElementById('testimonial-slider').scrollWidth - document.getElementById('testimonial-slider').offsetWidth);
	}, [scrollValue, scrollEnd]);


	return (
		<div className='flex items-center'>
			<div className="basis-4/12 flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<h3 className='text-h3 text-secondary-1 font-medium'>Testimonials</h3>
					<p className='text-body-normal text-secondary-3'>See satisfied traveler reviews</p>
				</div>
				<div className="flex gap-2">
				<button className={`p-2 border rounded-lg ${prevBtnBorderColor}`} onClick={slideLeft}>
						<svg className={`stroke-2 rounded ${prevBtnStrokeColor}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7 16L3 12M3 12L7 8M3 12H21" />
						</svg>
					</button>
					<button className={`p-2 border rounded-lg ${nextBtnBorderColor}`} onClick={slideRight}>
						<svg className={`stroke-2 rounded ${nextBtnStrokeColor}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17 8L21 12M21 12L17 16M21 12H3" />
						</svg>
					</button>
				</div>
			</div>
			<div className="basis-8/12">
				<div className="relative flex items-center">
					<div id='testimonial-slider' className="overflow-x-scroll h-full w-full scroll-smooth scroll whitespace-nowrap scrollbar-hide px-4 py-10">
						{testimonials.map((item) => (
							<div className="inline-block first:pl-0 last:pr-0 p-2 whitespace-normal">
								<div className="relative max-w-[240px] px-6 py-8">
									<div className="absolute bottom-0 left-0 bg-white rounded drop-shadow-testimonial-sh w-full h-[80%] z-0"></div>
									<div className="relative flex flex-col items-center gap-2 z-10">
										<img className='w-[72px] h-[72px]' key={item.id} src={item.avatar} alt={item.id} />
										<img src={testimonial_logo} alt="" />
										<h2 className='text-subheading text-black'>{item.name}</h2>
										<span className='text-center text-secondary-4'>{item.statement}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonial