import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductThunk, add } from '../store/testSclice'
import { STATUS } from '../store/constant'

function Test() {

    const dispatch = useDispatch()
    let test = useSelector(state => state.Test)

    useEffect(() => {
        if (test.status !== STATUS.IDLE) {
            dispatch(ProductThunk())
        }

    }, [])

    console.log(test)
    return (
        <div>
            <h1>Test Components</h1>
            <div>
                {/* <h4 onClick={() => dispatch(add({ message: "Hello Reeuc" }))}>Add Dispatch</h4> */}
            </div>
        </div>
    )
}

export default Test