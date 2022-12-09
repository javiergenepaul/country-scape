import React from 'react'

import CheckInCard from './UI/CheckInCard'

function Hero() {
	return (
		<div className='flex items-center h-screen px-4'>
			<div className="flex flex-col gap-y-16">
				<div className="flex flex-col gap-y-4">
					<div className='md:text-h1 text-subheading font-bold md:text-secondary-1 text-white'>Here's what you need <br/> to know in a nutshell</div>
					<div className='md:text-subheading text-body-small md:text-secondary-1 text-white'>Speak your mind and connect freely to the world</div>
				</div>
				<div className="md:block hidden">
					<CheckInCard/>
				</div>
			</div>
		</div>
	)
}

export default Hero