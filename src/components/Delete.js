import React from 'react';
import '../styles/main.css';
import { useState } from "react";

function Delete() {


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
                "http://localhost:8000/delete_data",
                {
                    method: "DELETE",
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


    return (
        <div className='delbt'>

            <form method="DELETE" className='form-input' onSubmit={submitData} >
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
                        className="button button3"
                        type='submit'
                        value="submit"
                    // onClick={submitData}
                    // onClick={openModal}
                    ><b>Delete name</b></button>
                </center>

            </form>



        </div>
    )
}

export default Delete;