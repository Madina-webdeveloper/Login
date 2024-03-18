import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { AiOutlineSwapRight } from "react-icons/ai";
import axios from "axios"
import turinLogo from "../../LoginAssets/Logo.png"
import turinLogo15 from "../../LoginAssets/15yillik.png"


const Login = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [schoolnumber, setSchoolnumber] = useState()
    const [grade, setGrade] = useState('')
    const navigateTo = useNavigate()

    const createUser = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3002/', {
            name: name,
            surname: surname,
            phonenumber: phonenumber,
            schoolnumber: schoolnumber,
            grade: grade
        }).then(() => {
            console.log("User has been created")
            navigateTo('/dashboard')
        })
    }

    return (
        <>
            <div className="container">
                <div className="loginPage  flex">
                    <div className="container flex">
                        <div className="formDiv flex">
                            <div className="headerDiv"></div>

                            <form action="" className="form grid">
                                <div className="images flex">
                                    <img src={turinLogo} alt="logo" />
                                    <img src={turinLogo15} alt="logo" />
                                </div>
                                <div className="inputDiv">
                                    <label htmlFor="name">Name</label>
                                    <div className="input flex">
                                        <FaUser className="icon" />
                                        <input type="text" id="name" required
                                            onChange={(event) => {
                                                setName(event.target.value)
                                            }} />
                                    </div>
                                </div>
                                <div className="inputDiv">
                                    <label htmlFor="surname">Surname</label>
                                    <div className="input flex">
                                        <FaUser className="icon" />
                                        <input type="text" id="surname" required onChange={(event) => {
                                            setSurname(event.target.value)
                                        }} />
                                    </div>
                                </div>
                                <div className="inputDiv">
                                    <label htmlFor="phoneNumber">Phone number</label>
                                    <div className="input flex">
                                        <FaPhoneAlt className="icon" />
                                        <input type="text" id="phoneNumber" required onChange={(event) => {
                                            setPhonenumber(event.target.value)
                                        }} />
                                    </div>
                                </div>
                                <div className="inputDiv">
                                    <label htmlFor="schoolNumber">School Number</label>
                                    <div className="input flex">
                                        <FaSchool className="icon" />
                                        <input type="text" id="schoolNumber" required onChange={(event) => {
                                            setSchoolnumber(event.target.value)
                                        }} />
                                    </div>
                                </div>
                                <div className="inputDiv">
                                    <label htmlFor="grade">Grade</label>
                                    <div className="input flex">
                                        <FaSchool className="icon" />
                                        <input type="text" id="grade" required onChange={(event) => {
                                            setGrade(event.target.value)
                                        }} />
                                    </div>
                                </div>
                                <button type="submit" className="btn flex" onClick={createUser}>
                                    Submit <AiOutlineSwapRight className="icon" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>{" "}
            </div>
        </>
    );
};

export default Login;
