import React from 'react'

const Signup = () => {
    return (
        <div className="container">
            <form>
                <div class="mb-3">
                    <label htmlFor="name" class="form-label">Your Name</label>
                    <input type="text" class="form-control" id="name" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label htmlFor="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label htmlFor="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" onChange={onChange} name="password" />
                </div>
                <div class="mb-3">
                    <label htmlFor="cpassword" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="password" onChange={onChange} name="cpassword" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
