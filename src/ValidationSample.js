import React, { Component } from 'react';

class ValidationSample extends Component {

    // v16.3 이상 부터 사용 가능한 ref 설정법
    inputBox = React.createRef();

    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.inputBox.current.focus();
    }

    render() {
        return (
            <div>
                <input
                    ref={this.inputBox}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>           
            </div>
        );
    }
}

export default ValidationSample;