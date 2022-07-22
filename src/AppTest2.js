import React from 'react'
import { useState } from 'react';

function AppTest() {

    const [formFields, setFormFields] = useState([
        { name: '' }
    ])

    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }


    const addFields = () => {
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


    const addFields2 = () => {
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


    const addFields3 = () => {
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



    // Submitting

    let formField3 = formFields.map(a => a.name);
    let formField6 = formShould.map(a => a.name);
    let formField7 = formNot.map(a => a.name);
    let formField8 = { ...formLte };
    let formField9 = formLimit.map(a => a.name);

    console.log(formLimit.map(a => a.name));

    const formField4 = { must: formField3, should: formField6, offset: formField9[0], not: formField7, filter: formField8 };


    const getNotes = async () => {
        //API Call
        const url = `https://test-6ed27-default-rtdb.firebaseio.com/`
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
    };



    const submit = (e) => {
        e.preventDefault();

        console.log(formField4);

        getNotes();

    };

    // const arr = ['sdfdsf', 'dfef', 'sdfds', 'sderfer']
    // console.log(arr);

    return (
        <div className="App">
            <form onSubmit={submit}>

                {formFields.map((form, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='name'
                                placeholder='Must'
                                onChange={event => handleFormChange(event, index)}
                                value={form.name}
                            />
                            {/* <input
                    name='age'
                    placeholder='Age'
                    onChange={event => handleFormChange(event, index)}
                    value={form.age}
                  /> */}
                            <button onClick={() => removeFields(index)}>Remove</button>
                            {/* <button onClick={addFields}>Add More Must</button> */}
                        </div>
                    )
                })}

                <br />

                {formShould.map((form, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='name'
                                placeholder='Should'
                                onChange={event => handleFormChange2(event, index)}
                                value={form.name}
                            />
                            <button onClick={() => removeFields2(index)}>Remove</button>
                            {/* <button onClick={addFields2}>Add More should</button> */}
                        </div>
                    )
                })}

                <br />

                {formNot.map((form, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='name'
                                placeholder='Not'
                                onChange={event => handleFormChange3(event, index)}
                                value={form.name}
                            />
                            <button onClick={() => removeFields3(index)}>Remove</button>
                            {/* <button onClick={addFields3}>Add More Not</button> */}
                        </div>
                    )
                })}

                <br />

                {formLimit.map((form, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='name'
                                type='number'
                                placeholder='No. of logs (Enter number)'
                                onChange={event => handleFormChange5(event, index)}
                                value={form.name}
                            />

                        </div>
                    )
                })}

                <br />

                {formLte.map((form, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='lte'
                                type='number'
                                placeholder='lte'
                                onChange={event => handleFormChange4(event, index)}
                                value={form.lte}
                            />
                            <input
                                name='gte'
                                type='number'
                                placeholder='gte'
                                onChange={event => handleFormChange4(event, index)}
                                value={form.gte}
                            />

                        </div>
                    )
                })}



            </form>
            <br />
            <button onClick={addFields}>Add Must</button>
            <button onClick={addFields2}>Add Should</button>
            <button onClick={addFields3}>Add Not</button>


            <br />
            <button onClick={submit}>Submit</button>




        </div>
    );
}

export default AppTest