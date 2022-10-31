import React from 'react'
import { calendar } from '../../assets'

function CheckInCard() {
  return (
    <div className='bg-primary-4 rounded py-4 px-6 flex gap-8 items-center z-40'>
        <div className='flex flex-col w-[120px] '>
            <div className="flex text-body-normal items-center gap-2">
                <img src={calendar} class="h-[18px] w-[18px]" alt="" />
                <div className="">Ceck in</div>
            </div>
            <div className="flex justify-end text-[#8A8F8D]">
                24 May, 2020
            </div>
        </div>

        <div className="box-border h-[30px] w-0 border border-[#E3E3E3]"></div>

        <div className='flex flex-col w-[120px]'>
            <div className="flex text-body-normal items-center gap-2">
                <img src={calendar} class="h-[18px] w-[18px]" alt="" />
                <div className="">Ceck in</div>
            </div>
            <div className="flex justify-end text-[#8A8F8D]">
                24 May, 2020
            </div>
        </div>

        <div className="box-border h-[30px] w-0 border border-[#E3E3E3]"></div>

        <div className='flex flex-col w-[120px]'>
            <div className="flex text-body-normal items-center gap-2">
                <img src={calendar} class="h-[18px] w-[18px]" alt="" />
                <div className="">Ceck in</div>
            </div>
            <div className="flex justify-end text-[#8A8F8D]">
                24 May, 2020
            </div>
        </div>

        <div className="box-border h-[30px] w-0 border border-[#E3E3E3]"></div>

        <div className='flex flex-col w-[120px]'>
            <div className="flex text-body-normal items-center gap-2">
                <img src={calendar} class="h-[18px] w-[18px]" alt="" />
                <div className="">Ceck in</div>
            </div>
            <div className="flex justify-end text-[#8A8F8D]">
                24 May, 2020
            </div>
        </div>
    </div>
  )
}

export default CheckInCard