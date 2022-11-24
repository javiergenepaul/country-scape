import React from 'react'

function TestimonialCard(props) {
    return (
        <div className="inline-block first:pl-0 last:pr-0 p-2 whitespace-normal">
            <div className="relative max-w-[240px] px-6 py-8">
                <div className="absolute bottom-0 left-0 bg-white rounded drop-shadow-testimonial-sh w-full h-[80%] z-0"></div>
                <div className="relative flex flex-col items-center gap-2 z-10">
                    <img className='w-[72px] h-[72px]' key={props.item.id} src={props.item.avatar} alt={props.item.id} />
                    <img src={props.testimonial_logo} alt="" />
                    <h2 className='text-subheading text-black'>{props.item.name}</h2>
                    <span className='text-center text-secondary-4'>{props.item.statement}</span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard