import React, {useReducer} from 'react';

import './App.css';

import reducer, {initialState} from '../reducers';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import { 
    APPLY_NUMBER, 
    CHANGE_OPERATION, 
    CLEAR_DISPLAY, 
    SET_MEMORY,
    ERASE_MEMORY,
    APPLY_MEMORY
  } from '../actions';



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

 
  const handleNumber = (num) => {
    dispatch({type: APPLY_NUMBER, payload: num})
  };
  const handleOperation = (operation) => {
    dispatch({type: CHANGE_OPERATION, payload: operation})
  };
  const clearDisplay = () => {
    dispatch({type: CLEAR_DISPLAY})
  };
  const setMemory = () => {
    dispatch({type: SET_MEMORY})
  }
  const eraseMemory = () => {
    dispatch({type: ERASE_MEMORY})
  }
  const applyMemory = () => {
    dispatch({type: APPLY_MEMORY})
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick = {() => {setMemory()}} value={"M+"}/>
              <CalcButton onClick = {() => {applyMemory()}} value={"MR"}/>
              <CalcButton onClick = {() => {eraseMemory()}} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleNumber(1)}} value={1}/>
              <CalcButton onClick={() => {handleNumber(2)}} value={2}/>
              <CalcButton onClick={() => {handleNumber(3)}} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleNumber(4)}} value={4}/>
              <CalcButton onClick={() => {handleNumber(5)}} value={5}/>
              <CalcButton onClick={() => {handleNumber(6)}} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleNumber(7)}} value={7}/>
              <CalcButton onClick={() => {handleNumber(8)}} value={8}/>
              <CalcButton onClick={() => {handleNumber(9)}} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleOperation('+')}} value={"+"}/>
              <CalcButton onClick={() => {handleOperations(0)}} value={0}/>
              <CalcButton onClick={() => {handleOperation('*')}} value={"*"}/>
            </div>

            <div className='row'>
            <CalcButton onClick={() => {handleOperation('-')}} value={"-"}/>
            <CalcButton onClick={() => {clearDisplay()}}value={"CE"}/>
            <CalcButton onClick={() => {handleOperation('/')}} value={'/'}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
