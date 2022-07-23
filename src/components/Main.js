import React from 'react';
import '../styles/main.css';
import { useState } from "react";
import axios from "axios";
import Delete from './Delete';
import Navbar from './Navbar';


function Main(props) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get('http://localhost:8000/get_data', {
            });
            console.log(data);
            setData(data);
        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };



    const [userData, setUserData] = useState({
        name: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };


    // connect with firebase

    const submitData = async (event) => {
        event.preventDefault();
        const { name } = userData;

        if (name) {


            fetch(
                "http://localhost:8000/input_name",
                {
                    method: "POST",
                    Headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                    }),
                }
            );
        }
    }

    // Delete data


    // const [userData2, setUserData2] = useState({
    //     name2: "",
    // });

    // let name2, value2;
    // const postUserData2 = (event) => {
    //     name2 = event.target.name2;
    //     value2 = event.target.value2;

    //     setUserData2({ ...userData2, [name2]: value2 });
    // };


    // // connect with firebase

    // const submitData2 = async (event) => {
    //     event.preventDefault();
    //     const { name } = userData2;

    //     if (name) {


    //         fetch(
    //             "http://localhost:8000/delete_name",
    //             {
    //                 method: "DELETE",
    //                 Headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     name: name2,
    //                 }),
    //             }
    //         );
    //     }
    // }




    return (
        <div>
            <Navbar />
            <div className='main'>
                <div className='col1s'>

                    <div>
                        {err && <h2>{err}</h2>}

                        <button class="button" onClick={handleClick}>Fetch data</button>

                        {isLoading && <h2>Loading...</h2>}

                        {data.map((person, key) => {
                            return (
                                <div>

                                    <div>
                                        <table className='get-table' >
                                            <tr>
                                                <td className='row-get'>{key + 1}</td>
                                                <td className='row-get2'>{person}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>

                            );
                        })}
                    </div>



                </div>
                <div className='col2s'>

                    <div className='col21s'>
                        <label for="lname">Enter the name to add:</label>
                        <br />

                        <form method="POST" className='form-input' onSubmit={submitData} >
                            <input
                                type="name"
                                placeholder="Enter here"
                                name="name"
                                className='log-key'
                                value={userData.name}
                                onChange={postUserData}
                            ></input>
                            <br />
                            <center>
                                <button
                                    name="submit"
                                    placeholder="Add name"
                                    className="button button2"
                                    type='submit'
                                    value="submit"
                                // onClick={submitData}
                                // onClick={openModal}
                                ><b>Add name</b></button>
                            </center>

                        </form>
                    </div>

                    <br />
                    <br />
                    {/* <hr className='hrc2' /> */}
                    <br />

                    <div className='col22s'>

                        <div className='c2r2'>
                            <br />
                            <label for="lname">Enter the name to delete:</label>
                            <br />

                            <Delete />
                        </div>
                        {/* <form method="DELETE" className='form-input' onSubmit={submitData2} >
                        <input
                            type="name"
                            placeholder="Enter here"
                            name="name"
                            className='log-key'
                            value={userData2.name}
                            onChange={postUserData2}
                        ></input>
                        <br />
                        <center>
                            <button
                                name="submit"
                                placeholder="delete name"
                                className="button button3"
                                type='submit'
                                value="submit"
                            // onClick={submitData}
                            // onClick={openModal}
                            ><b>Delete name</b></button>
                        </center>

                    </form> */}


                    </div>

                </div>
            </div>
        </div >
    )
}
export default Main;