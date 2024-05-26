import React from 'react'

export default function Contact() {
    return (
        <div id="contact">

            <form>
                <div className="contactUs">
                    <h1>Reserve Your Table </h1><br />
                    <br /><br />
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" className="form-control" required="required" />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="Service" className="form-control" />
                    </div>

                    <div className="form-group">
                        <input type="number" placeholder="Mobile No" className="form-control" required="required" />
                    </div>

                    <div className="form-group">
                        <input type="date" placeholder="Date" className="form-control" required="required" />
                    </div>

                    <div className="form-group">
                        <input type="time" placeholder="Time" className="form-control" required="required" />
                    </div>
                    <br /><br />
                    <div className="form-group">
                        <button className="btn" id="mysubmit">RESERVE </button>
                    </div>

                    <br /><br /><br /><br />
                </div>
            </form>
        </div>
    )
}
