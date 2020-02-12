import React, { Component } from 'react';

class EventPractice extends Component {
    
    state = {
        username: '',
        message: ''
    }

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    /*
     * 컴포넌트에 임의 메소드를 생성 시 this에 대한 접근이 불가하므로,
     * 따라서 컴포넌트의 생성자 메소드에 바인딩 작업이 필수이다.
     * 그러나, 화살표 함수를 사용하여 메소드 생성 시 바인딩 작업이 필요없다.
     */
    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value
    //     });
    // }

    // handleClick() {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ''
    //     });
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            username:'',
            message: ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="유저명"
                    value={this.state.username}
                    onChange={this.handleChange} 
                    onKeyPress={this.handleKeyPress}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress} 
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;