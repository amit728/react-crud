import React from 'react'

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 pt-4">
                    <h1 className="text-left">Contact Us Page</h1>
                </div>
                <div className="col-sm-6 pt-4 pb-5">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Contact Us</h4>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div></div></div>
            </div>
        </div>
    )
}

export default Contact;