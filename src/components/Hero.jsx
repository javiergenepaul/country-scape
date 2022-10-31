import React from 'react'

import CheckInCard from './UI/CheckInCard'

function Hero() {
	return (
		<div className='flex items-center h-screen'>
			<div className="flex flex-col gap-y-16">
				<div className="flex flex-col gap-y-4">
					<div className='text-h1 font-bold'>Here's what you need <br/> to know in a nutshell</div>
					<div className='text-subheading'>Speak your mind and connect freely to the world</div>
				</div>
				<div className="">
					<CheckInCard/>
				</div>
			</div>
		</div>
	)
}

export default Hero