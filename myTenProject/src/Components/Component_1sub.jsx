import React, { useState } from 'react'
import { List } from './list'


const Component_1sub = () => {
    const [title, settitle] = useState("")
    const [dec, setdec] = useState("")
    const [mainTask, setmainTask] = useState([])



    const submitHandler = () => {
        setmainTask([...mainTask, { title, dec }])


        settitle("")
        setdec("")

    }
    const deletAll = () => {
        setmainTask("")
    }
    const deletHandler = (i) => {
        let copyList = [...mainTask]
        copyList.splice(i, 1)
        setmainTask(copyList)

    }

    let renderList = "No Task Availabe"

    if (mainTask.length > 0) {
        renderList = mainTask.map((t, i) => {







            return <li key={i} className='list-group-item '>
                <div className='d-flex justify-content-between'>

                    <h5>{t.title}</h5>
                    <h5>{t.dec}</h5>
                    <button onClick={() => deletHandler(i)} type="button" className="btn btn-outline-danger">Delete</button>
                </div>
            </li>

        })
    }



    return (
        <div>
            <div className='d-flex justify-content-around'>

                <input
                    className='w-25'
                    type="text"
                    placeholder='Enter Title Here'
                    value={title}
                    onChange={(e) => {
                        settitle(e.target.value)
                    }} />





                <input
                    className='w-50 border-black'
                    type="text"
                    placeholder='Enter Description Here'
                    value={dec}
                    onChange={(e) => {
                    setdec(e.target.value)
                    }}
                />






                <button onClick={submitHandler} type="button" className="btn btn-outline-dark  ">Add Task</button>
                <button onClick={deletAll} type="button" className="btn btn-outline-danger ">Delete All</button>


            </div>

            <hr />
            <div style={{ d: "none" }}>
                <List data={renderList} />
            </div>
        </div>
    )
}

export { Component_1sub }