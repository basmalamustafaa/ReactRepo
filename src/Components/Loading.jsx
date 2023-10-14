import React from 'react'
import { InfinitySpin,Bars,ThreeDots } from 'react-loader-spinner'
export default function Loading() {
    return (
        <div className="loading">
            <ThreeDots
                width='100'
                color="#4fa94d"
                radius="9"
            />
        </div>
    )
}
