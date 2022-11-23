import React from 'react'
import {
	room_1,
	room_2,
	room_3,
	room_4,
	room_5,
	room_6
} from '../assets'

import PrimaryButton from './UI/PrimaryBtn'

function Room() {
	return (
		<div className="flex h-full items-center">
			<div className="flex gap-[100px] items-center">
				<div className="basis-1/2">
					<div className='grid grid-cols-3 grid-rows-3 gap-5 h-full'>
						{/* <div className="bg-primary-1 row-span-2 col-span-2 h-full rounded">sample</div> */}
						<img src={room_1} className="row-span-2 col-span-2 rounded object-cover w-full h-full" alt="" />
						<img src={room_2} className="rounded h-full w-full" alt="" />
						<img src={room_3} className="rounded h-full w-full" alt="" />
						<img src={room_4} className="rounded h-full w-full" alt="" />
						<img src={room_5} className="rounded h-full w-full" alt="" />
						<img src={room_6} className="rounded h-full w-full" alt="" />
						{/* <div className="bg-primary-1 rounded">sample</div>
			<div className="bg-primary-1 rounded">sample</div>
			<div className="bg-primary-1 rounded">sample</div>
			<div className="bg-primary-1 rounded">sample</div>
			<div className="bg-primary-1 rounded">sample</div> */}
					</div>
				</div>
				<div className="basis-1/2">
					<div className="items-center">
						<h3 className='text-h2 font-semibold'>
							Outstanding rooms and design for you to show.
						</h3>
						<p className='text-body-large'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque habitant praesent morbi gravida place rat.</p>
						<p className='text-body-large mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque habitant praesent morbi gravida place rat. Consectetur adipiscing elit.</p>
						<PrimaryButton style={'mt-10'} btnText={'Explore Rooms'} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Room