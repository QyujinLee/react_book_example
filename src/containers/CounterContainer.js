import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
// import { bindActionCreators } from "redux";

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// // state값을 props로 전달하기 위함
// const mapStateToProps = state => ({
//     number: state.counter.number
// });

// // 액션 생성함수를 전달하기 위함
// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     }
// });

// // 두번째 괄호 안에 있는 컴포넌트는 연동할 컴포넌트
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 위의 로직을 줄인 버젼
export default connect(
    state => ({
        number: state.counter.number
    }),
    // dispatch => ({
    //     increase: () => dispatch(increase()),
    //     decrease: () => dispatch(decrease())
    // })

    // // bindActionCreators 유틸 함수로 전하기
    // dispatch =>
    //     bindActionCreators(
    //         {
    //             increase,
    //             decrease
    //         },
    //         dispatch
    //     )

    // 함수형태가 아닌 객체 형태로 전하기 (connect 함수가 내부적으로 bindActionCreators 작업을 대신 해줌)
    {
        increase,
        decrease
    }
)(CounterContainer);
