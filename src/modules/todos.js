import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// 액션
const CHANGE_INPUT = "todos/CHANGE_INPUT"; // input값 변경
const INSERT = "todos/INSERT"; // 새로운 todo를 등록
const TOGGLE = "todos/TOGGLE"; // todo를 체크/체크해제
const REMOVE = "todos/REMOVE"; // todo를 제거

export const changeInput = createAction(CHANGE_INPUT, input => input);

// // 액션 생성 함수
// export const changeInput = input => ({
//     type: CHANGE_INPUT,
//     input
// });

let id = 3; // insert가 호출될 때마다 1씩 더해집니다.

export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

// export const insert = text => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false
//     }
// });

// export const toggle = id => ({
//     type: TOGGLE,
//     id
// });

// export const remove = id => ({
//     type: REMOVE,
//     id
// });

const initialState = {
    input: "",
    todos: [
        {
            id: 1,
            text: "리덕스 기초 배우기",
            done: true
        },
        {
            id: 2,
            text: "리액트와 리덕스 사용하기",
            done: false
        }
    ]
};

// 간편한 불변성 유지를 위한 immer 적용 리듀서
const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) =>
            produce(state, draft => {
                draft.input = input;
            }),
        [INSERT]: (state, { payload: todo }) =>
            produce(state, draft => {
                draft.todos.push(todo);
            }),
        [TOGGLE]: (state, { payload: id }) =>
            produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id === id);
                todo.done = !todo.done;
            }),
        [REMOVE]: (state, { payload: id }) =>
            produce(state, draft => {
                const index = draft.todos.findIndex(todo => todo.id === id);
                draft.todos.splice(index, 1);
            })
    },
    initialState
);

// // immer 적용 전 리듀서
// const todos = handleActions(
//     {
//         [CHANGE_INPUT]: (state, { payload: input }) => ({
//             ...state,
//             input
//         }),
//         [INSERT]: (state, { payload: todo }) => ({
//             ...state,
//             todos: state.todos.concat(todo)
//         }),
//         [TOGGLE]: (state, { payload: id }) => ({
//             ...state,
//             todos: state.todos.map(todo =>
//                 todo.id === id ? { ...todo, done: !todo.done } : todo
//             )
//         }),
//         [REMOVE]: (state, { payload: id }) => ({
//             ...state,
//             todos: state.todos.filter(todo => todo.id !== id)
//         })
//     },
//     initialState
// );

// // 리듀서
// function todos(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo =>
//                     todo.id === action.id ? { ...todo, done: !todo.done } : todo
//                 )
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             };
//         default:
//             return state;
//     }
// }

export default todos;
