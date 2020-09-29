import axios from 'axios';
import {
    FETCH_ALL_SMURFS_START,
    FETCH_ALL_SMURFS_SUCCESS,
    FETCH_ALL_SMURFS_FAIL,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAIL,
    UPDATE_SMURF_START,
    UPDATE_SMURF_SUCCESS,
    UPDATE_SMURF_FAIL,
} from '../constants/ActionTypes.js';

export const getSmurfs = () => dispatch => {
    const apiUrl = 'http://localhost:3333/smurfs';
    dispatch({ type: FETCH_ALL_SMURFS_START });
    axios
        .get(apiUrl)
        .then(res => {
            dispatch({ type: FETCH_ALL_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_ALL_SMURFS_FAIL, payload: err.response });
        });
};

export const addSmurf = (smurf) => dispatch => {
    const apiUrl = 'http://localhost:3333/smurfs';
    dispatch({ type: ADD_SMURF_START });
    axios
        .post(apiUrl, smurf)
        .then(res => {
            console.log('ADD_SMURF:', res)
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type:ADD_SMURF_FAIL, payload: err.response });
        });
}

export const updateSmurf = (smurf) => dispatch => {
    const apiUrl = 'http://localhost:3333/smurfs/${smurf.id}';
    dispatch({ type: UPDATE_SMURF_START });
    axios
        .put(apiUrl, smurf)
        .then(res => {
            console.log('UPDATE_SMURF:', res)
            dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: UPDATE_SMURF_FAIL, payload: err.response });
        });
}   