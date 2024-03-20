import React from 'react'

export default function Heading(props) {
  return (
    <>
        <div className=' w-full py-24  '>
            {
                <p style={{ color: `${props.color}` }} className='text-xl lg:text-4xl font-bold xl:text-4xl text-center' dangerouslySetInnerHTML={{ __html: props.head }} />
            }
        </div>
    </>
  )
}
