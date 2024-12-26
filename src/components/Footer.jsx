import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit() {
        this.props.handleSubmit(this.state.input);
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div className="panel-footer">
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" value={this.state.input} onChange={this.handleChange} placeholder="Say something" />
                        <span className="input-group-btn">
                            <button onClick={() => this.handleSubmit()} className="btn btn-primary" type="button">Send</button>
                        </span>
                    </div>
                </form>
            </div>
        )
    }
}
