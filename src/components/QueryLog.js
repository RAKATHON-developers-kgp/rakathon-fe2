import React from 'react'
import { useState, useEffect } from 'react';
import '../main.css';
import Navbar from './Navbar';

function QueryLog() {

    const [formFields, setFormFields] = useState([
        { name: '' }
    ])

    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }


    const addFields = (e) => {
        e.preventDefault();

        let object = {
            name: ''
        }

        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }

    // Should

    const [formShould, setFormShould] = useState([
        { name: '' }
    ])

    const handleFormChange2 = (event, index) => {
        let data = [...formShould];
        data[index][event.target.name] = event.target.value;
        setFormShould(data);
    }


    const addFields2 = (e) => {
        e.preventDefault()
        let object2 = {
            name: ''
        }

        setFormShould([...formShould, object2])
    }

    const removeFields2 = (index) => {
        let data = [...formShould];
        data.splice(index, 1)
        setFormShould(data)
    }



    // Not

    const [formNot, setFormNot] = useState([
        { name: '' }
    ])

    const handleFormChange3 = (event, index) => {
        let data = [...formNot];
        data[index][event.target.name] = event.target.value;
        setFormNot(data);
    }


    const addFields3 = (e) => {
        e.preventDefault()
        let object3 = {
            name: ''
        }

        setFormNot([...formNot, object3])
    }

    const removeFields3 = (index) => {
        let data = [...formNot];
        data.splice(index, 1)
        setFormNot(data)
    }

    // Filter
    const [formLte, setFormLte] = useState([
        { lte: '', gte: '' }
    ])

    const handleFormChange4 = (event, index) => {
        let data = [...formLte];
        data[index][event.target.name] = event.target.value;
        setFormLte(data);
    }


    // Limit

    const [formLimit, setFormLimit] = useState([
        { name: '' }
    ])

    const handleFormChange5 = (event, index) => {
        let data = [...formLimit];
        data[index][event.target.name] = event.target.value;
        setFormLimit(data);
    }

    // handling filter options
    const [showhide, setShowhide] = useState('');

    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowhide(getuser);
    }

    // Submitting

    let formField3 = formFields.map(a => a.name);
    let formField6 = formShould.map(a => a.name);
    let formField7 = formNot.map(a => a.name);
    let formField8 = { ...formLte };
    let formField9 = formLimit.map(a => a.name);


    const formField4 = { must: formField3, should: formField6, offset: formField9[0], not: formField7, filter: formField8 };

    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        //API Call
        const url = `http://localhost:8000/query_data`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // formField4
            },
            body: JSON.stringify({
                formField4
            }),
        });

        const json = await response.json();
        console.log(json);
        setNotes(json);

    };


    const submit = (e) => {
        e.preventDefault();

        console.log(formField4);

        getNotes();

    };

    const arr = [
        {
            "index": "app.logs-2022.07.22",
            "id": "S9duJIIB1uAz719a4KJm",
            "timestamp": "2022-07-22T05:43:42.328523Z",
            "log": "2022-07-22 11:13:40,972 root INFO:endpoint: '/get_data' , Task executed succesfully",
            "path": "/logs/sample_logs_app.log"
        },
        {
            "index": "app.logs-2022.07.22",
            "id": "TNdzJIIB1uAz719aI6Js",
            "timestamp": "2022-07-22T05:48:21.592082Z",
            "log": "2022-07-22 11:15:25,213 root INFO:endpoint: '/get_data' , Task executed succesfully",
            "path": "/logs/sample_logs_app.log"
        },
        {
            "index": "app.logs-2022.07.22",
            "id": "S9duJIIB1uAz719a4KJm",
            "timestamp": "2022-07-22T05:43:42.328523Z",
            "log": "2022-07-22 11:13:40,972 root INFO:endpoint: '/get_data' , Task executed succesfully",
            "path": "/logs/sample_logs_app.log"
        },
        {
            "index": "app.logs-2022.07.22",
            "id": "TNdzJIIB1uAz719aI6Js",
            "timestamp": "2022-07-22T05:48:21.592082Z",
            "log": "2022-07-22 11:15:25,213 root INFO:endpoint: '/get_data' , Task executed succesfully",
            "path": "/logs/sample_logs_app.log"
        },
    ]


    return (
        <div>

            <Navbar />

            <div className='main1'>
                <form onSubmit={submit}>

                    <div className='main-col'>
                        <div className='col1'>

                            <div className='main-box'>
                                <center>
                                    <div className='head-box'>
                                        MUST
                                    </div>
                                </center>

                                {formFields.map((form, index) => {
                                    return (
                                        <div key={index} className='must-box' >
                                            <div className='m1'>Logs must (and) include:</div>
                                            <div className='m2'>
                                                <input
                                                    name='name'
                                                    className='input1'
                                                    placeholder='Enter single keyword'
                                                    onChange={event => handleFormChange(event, index)}
                                                    value={form.name}
                                                />
                                            </div>

                                            <div className='m3'>
                                                <button className='button1' onClick={() => removeFields(index)}>-</button>
                                            </div>
                                        </div>
                                    )
                                })}


                                <div className='btna' >
                                    <button className='btn4' onClick={addFields}>+</button>
                                </div>
                                <br />
                                <br />
                            </div>



                            <div className='main-box'>

                                <center>
                                    <div className='head-box'>
                                        SHOULD
                                    </div>
                                </center>
                                {formShould.map((form, index) => {
                                    return (
                                        <div key={index} className='must-box' >
                                            <div className='m1'>Logs should (or) include:</div>
                                            <div className='m2'>
                                                <input
                                                    name='name'
                                                    placeholder='Enter single keyword'
                                                    className='input1'
                                                    onChange={event => handleFormChange2(event, index)}
                                                    value={form.name}
                                                />
                                            </div>

                                            <div className='m3'>
                                                <button className='button1' onClick={() => removeFields2(index)}>-</button>
                                            </div>
                                        </div>
                                    )
                                })}

                                <div className='btna'>
                                    <button className='btn4' onClick={addFields2}>+</button>
                                </div>
                                <br />
                                <br />
                            </div>

                            <div className='main-box2'>
                                {formLimit.map((form, index) => {
                                    return (
                                        <div key={index} className='must-box'>
                                            <div className='m1'>Number of logs to show:</div>
                                            <div className='m2'>
                                                <input
                                                    name='name'
                                                    type='number'
                                                    className='input1'
                                                    placeholder='No. of logs (Enter number)'
                                                    onChange={event => handleFormChange5(event, index)}
                                                    value={form.name}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>

                        </div>


                        <div className='col2'>

                            <div className='main-box'>

                                <center>
                                    <div className='head-box'>
                                        MUST NOT
                                    </div>
                                </center>

                                {formNot.map((form, index) => {
                                    return (
                                        <div key={index} className='must-box'>
                                            <div className='m1'>Logs must NOT include:</div>
                                            <div className='m2'>
                                                <input
                                                    name='name'
                                                    placeholder='Enter single keyword'
                                                    className='input1'
                                                    onChange={event => handleFormChange3(event, index)}
                                                    value={form.name}
                                                />
                                            </div>
                                            <button className='button1' onClick={() => removeFields3(index)}>-</button>
                                            {/* <button onClick={addFields3}>Add More Not</button> */}
                                        </div>
                                    )
                                })}

                                <div className='btna'>
                                    <button className='btn4' onClick={addFields3}>+</button>
                                </div>
                                <br />
                                <br />
                            </div>


                            <div className='main-box'>

                                <center>
                                    <div className='head-box'>
                                        FILTER
                                    </div>
                                </center>
                                {formLte.map((form, index) => {
                                    return (
                                        <div key={index} className='must-box'>

                                            <div className='m1'>Filter:</div>
                                            <div className='m2'>
                                                <select
                                                    className='input1'
                                                    onChange={(e) => (handleshowhide(e))}
                                                >
                                                    <option>Select</option>
                                                    <option value='aa'>Time Stamp</option>
                                                </select>
                                            </div>
                                            <br />
                                            {
                                                showhide === 'aa' && (
                                                    <div className='filter-box'>

                                                        <div className='f1'>Initial time stamp:</div>
                                                        <input
                                                            name='lte'
                                                            type='number'
                                                            className='input2'
                                                            placeholder='Log initiating time'
                                                            onChange={event => handleFormChange4(event, index)}
                                                            value={form.lte}
                                                        />
                                                        <div className='f2'>Initial time stamp:</div>
                                                        <input
                                                            name='gte'
                                                            type='number'
                                                            className='input3'
                                                            placeholder='Log closing time'
                                                            onChange={event => handleFormChange4(event, index)}
                                                            value={form.gte}
                                                        />

                                                    </div>
                                                )
                                            }

                                        </div>
                                    )
                                })}
                                <br />
                            </div>

                        </div>

                    </div>

                </form>


                <br />

                <center>
                    <div className='sub-btn'>
                        <button className='but33' onClick={submit}>QUERY DATA</button>
                    </div>
                </center>
                <br />
            </div>

            <div className='main3'>

                <center>
                    <h1>Query Results</h1>

                    <div className='q-table'>

                        <table id="customers">
                            <tbody>
                                <tr>
                                    <th> </th>
                                    <th>Index</th>
                                    <th>ID</th>
                                    <th>Timestamp</th>
                                    <th>Log</th>
                                    <th>Path</th>
                                </tr>

                                {notes.map((el, ind) =>

                                    <tr>
                                        <td>{ind + 1}</td>
                                        <td>{el.index}</td>
                                        <td>{el.id}</td>
                                        <td>{el.timestamp} </td>
                                        <td>{el.log} </td>
                                        <td>{el.path} </td>
                                    </tr>

                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </center>


            </div>
        </div>
    );
}

export default QueryLog;