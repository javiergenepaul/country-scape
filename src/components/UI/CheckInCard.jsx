import React from 'react'
import { calendar, Search } from '../../assets'
import PrimaryBtn from './PrimaryBtn'

function CheckInCard() {
	const icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="none"><path fill="#fff" fillRule="evenodd" d="M6.2 2.1a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2ZM.8 5.7a5.4 5.4 0 1 1 9.8 3.129l4.336 4.335a.9.9 0 0 1-1.272 1.273l-4.335-4.335A5.4 5.4 0 0 1 .8 5.7Z" clipRule="evenodd"/></svg>;
	return (
		<div className='bg-primary-4 rounded py-4 px-6 flex gap-8 items-center z-10'>
			<div className='flex flex-col w-[120px] '>
				<div className="flex text-body-normal items-center gap-2">
					<img src={calendar} className="h-[18px] w-[18px]" alt="" />
					<div className="">Check in</div>
				</div>
				<div className="flex justify-end text-[#8A8F8D]">
					24 May, 2020
				</div>
			</div>

			<div className="box-border h-[30px] w-0 border border-[#E3E3E3]"></div>

			<div className='flex flex-col w-[120px]'>
				<div className="flex text-body-normal items-center gap-2">
					<img src={calendar} className="h-[18px] w-[18px]" alt="" />
					<div className="">Check in</div>
				</div>
				<div className="flex justify-end text-[#8A8F8D]">
					24 May, 2020
				</div>
			</div>

			<div className="box-border h-[30px] w-0 border border-[#E3E3E3]"></div>

			<div className='flex flex-col w-[120px]'>
				<div className="flex text-body-normal items-center gap-2">
					<img src={calendar} className="h-[18px] w-[18px]" alt="" />
					<div className="">Check in</div>
				</div>
				<div className="flex justify-end text-[#8A8F8D]">
					24 May, 2020
				</div>
			</div>

			<div className="box-border h-[30px] w-0 border border-[#E3E3E3]"></div>

			<div className="">
				<PrimaryBtn 
					btnText={'Search'}
					btnIcon={icon}	
				/>
			</div>
		</div>
	)
}

export default CheckInCard