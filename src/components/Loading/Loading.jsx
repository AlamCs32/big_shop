import React from 'react'
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => {
    return (
        <ReactLoading type={type} color={color} height={80} width={80} />
    )
}

export default Loading