import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <div>
                <form>
                    <h3>User Register</h3>
                    <div className="form-group">

                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>

                    <div className="form-group">

                        <label>E-mail</label>
                        <input type="email" className="form-control" placeholder="E-mail"/>
                    </div>
                </form>
            </div>
        )
    }
}
