import { createAction, handleActions } from "redux-actions";

// 액션
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// createAction을 이용한 액션 생성 함수 선언
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 액션 생성 함수
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

const initialState = {
    number: 0
};

// handleActions를 이용한 리듀서
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 })
    },
    initialState
);

// // 리듀서
// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1
//             };
//         case DECREASE:
//             return {
//                 number: state.number - 1
//             };
//         default:
//             return state;
//     }
// }

export default counter;
