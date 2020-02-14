import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수
const toggleSwitch = () => ({
    type: TOGGLE_SWITCH
});
const increase = difference => ({
    type: INCREASE,
    difference
});
const decrease = () => ({
    type: DECREASE
});

// 초기값 설정
const initialState = {
    toggle: false,
    counter: 0
};

// 리듀서
// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    // action.type에 따라 다른 작업을 처리함
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성 유지를 해 주어야 합니다.
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

// 스토어 생성
const store = createStore(reducer);

const render = () => {
    // 현재 상태를 불러옵니다.
    const state = store.getState();

    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add("active");
    } else {
        divToggle.classList.remove("active");
    }

    // 카운터 처리
    counter.innerText = state.counter;
};

render();

// 구독하기
store.subscribe(render);

// 액션 발생시키기
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
    store.dispatch(decrease());
};
