import React from 'react'

function BlogCard(props) {
    return (
        <div className="inline-block first:pl-0 last:pr-0 p-2">
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-shade"></div>
                <div className="absolute bottom-0 left-0 m-8">
                    <div className="flex flex-col">
                        <span className='text-body-normal font-semibold text-[#FFF]'>{props.item.date.toLocaleDateString('en-US', { day: '2-digit', month: 'long' })}</span>
                        <span className='text-body-normal text-[#FFF]'>{props.item.description}</span>
                    </div>
                </div>
                <img className='ease-in-out duration-300' key={props.item.id} src={props.item.image} alt={props.item.id} />
            </div>
        </div>
    )
}

export default BlogCard