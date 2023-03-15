import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mui from './Mui';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import axios from 'axios'
import Mui2 from './Mui2';

export const primary = (data) => ({ type: "PRIMARY", payLoad: data })
export const buzzerone = (data) => ({ type: "BUZZER1", payLoad: data })
export const buzzertwo = (data) => ({ type: "BUZZER2", payLoad: data })

const initailValue = {
    items: [

        {
            profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
            studentName: "Prakash",
            rollNo: "8765439867",
            buzzer1: false,
            buzzer2: true,
            primary: true,
            status: true
        },
        {
            profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
            studentName: "Raj",
            rollNo: "8765439867",
            buzzer1: true,
            buzzer2: true,
            primary: false,
            status: true
        },
        {
            profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
            studentName: "Selva",
            rollNo: "8765439867",
            buzzer1: true,
            buzzer2: true,
            primary: true,
            status: true
        },
        {
            profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
            studentName: "Hema",
            rollNo: "8765439867",
            buzzer1: false,
            buzzer2: false,
            primary: true,
            status: true
        },
        {
            profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
            studentName: "Vicky",
            rollNo: "8765439867",
            buzzer1: true,
            buzzer2: true,
            primary: false,
            status: true
        }
    ],
    status: [false, false, true, false, false]
}

const reducer = (state = initailValue, action) => {
    switch (action.type) {
        case 'PRIMARY':
            {
                return {
                    ...state,
                    status: action.payLoad
                }


            }
        case 'BUZZER1':
            {
                return {
                    ...state,
                    status: action.payLoad
                }


            }
        case 'BUZZER2':
            {
                return {
                    ...state,
                    status: action.payLoad
                }


            }

        default:
            return state
    }
}
const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < Provider store = { store } > <
    Mui / >
    <
    /Provider>
);