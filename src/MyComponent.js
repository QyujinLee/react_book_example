import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    
    /* 
     * 전통적으로 state 선언을 위해선 아래와 같은 방법을 써야 했으나,
     * transform-class-properties 문법으로 constructor 밖에서도 선언 가능
     * proptypes와 defaultProp도 마찬가지
     */
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }
    // }

    state = {
        number: 0
    }

    // eslint-disable-next-line react/no-typos
    static propTypes = {
        name: PropTypes.string, // name props 타입을 문자열로 설정합니다.
        age: PropTypes.number.isRequired // 필수적으로 존재해야 하며, 숫자 입니다.
    }
    
    static defaultProps = {
        name: '기본이름',
        age: 10
    }

    render() {
        return (
            <div>
                <p>저의 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age}세 입니다.</p>
                <p>숫자: {this.state.number}</p>
                <button onClick={() => {
                        this.setState({
                            number: this.state.number + 1
                        })
                    }
                }>plus</button>
            </div>
        )
    }
}


// 다른 파일에서 이 파일을 import 할 수 있도록 해주는 코드
export default MyComponent;