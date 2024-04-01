import React from 'react'
import Topsec from './TopSection/Topsec'
import Middlesec from './Middlesec/Middlesec'
import Bottom from './Bottom/Bottom'

export default function Footer() {
    return (
        <>
            <div className='Footer'>
                <Topsec />
                <Middlesec />
            </div>

        </>
    )
}
