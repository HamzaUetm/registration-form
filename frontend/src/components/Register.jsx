import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [fullName, setFullName] = useState(""); // Full Name State
    const [email, setEmail] = useState("");        // Email State
    const [password, setPassword] = useState("");  // Password State
    const [phone, setPhone] = useState("");        // Phone State
    const [dob, setDob] = useState("");            // DOB State
    const [address, setAddress] = useState("");    // Address State
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/register', {
            fullName,
            email,
            password,
            phone,
            dob,
            address
        })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    alert("Registered successfully! Please Login to proceed.");
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center"
                style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))", minHeight: '100vh', overflowY: 'auto' }}>
                <div className="bg-white p-3 rounded" style={{ width: '40%', marginTop: '25px' }}>
                    <h2 className='mb-3 text-primary'>Register</h2>
                    <form onSubmit={handleSubmit} style={{ overflowY: 'auto', maxHeight: '70vh' }}>
                        {/* Full Name */}
                        <div className="mb-3 text-start">
                            <label className="form-label"><strong>Full Name</strong></label>
                            <input
                                type="text"
                                placeholder="Enter Full Name"
                                className="form-control"
                                onChange={(event) => setFullName(event.target.value)}
                                required
                            />
                        </div>
                        {/* Email */}
                        <div className="mb-3 text-start">
                            <label className="form-label"><strong>Email</strong></label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        {/* Password */}
                        <div className="mb-3 text-start">
                            <label className="form-label"><strong>Password</strong></label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        {/* Phone */}
                        <div className="mb-3 text-start">
                            <label className="form-label"><strong>Phone</strong></label>
                            <input
                                type="text"
                                placeholder="Enter Phone Number"
                                className="form-control"
                                onChange={(event) => setPhone(event.target.value)}
                                required
                            />
                        </div>
                        {/* Date of Birth */}
                        <div className="mb-3 text-start">
                            <label className="form-label"><strong>Date of Birth</strong></label>
                            <input
                                type="date"
                                className="form-control"
                                onChange={(event) => setDob(event.target.value)}
                                required
                            />
                        </div>
                        {/* Address */}
                        <div className="mb-3 text-start">
                            <label className="form-label"><strong>Address</strong></label>
                            <textarea
                                placeholder="Enter Address"
                                className="form-control"
                                onChange={(event) => setAddress(event.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                    <p className='container my-2'>Already have an account?</p>
                    <Link to='/login' className="btn btn-secondary">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;
