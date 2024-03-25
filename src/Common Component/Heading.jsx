import React from 'react'

export default function Heading(props) {
  const textAlign = props.textAlign ||  'center';
  return (
    <>
        <div className=' w-full py-24  '>
            {
                <p style={{ color: `${props.color}`,textAlign }} className='text-xl lg:text-4xl font-bold xl:text-4xl ' dangerouslySetInnerHTML={{ __html: props.head }} />
            }
        </div>
    </>
  )
}
