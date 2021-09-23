/*
 * @Date: 2021-09-19 13:56:59
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-23 14:31:54
 * @FilePath: /react-counter/src/components/TimeSetting.js
 */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import TimerIcon from '@material-ui/icons/Timer';

import { DUMMY_DATA } from '../store/data'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 35,
    padding: '0 30px',
    marginLeft: '15px'
  },
  formContainer: {
    alignItems: 'center'
  }
});


const TimeSetting = () => {
  const classes = useStyles();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  
  const setTimerHandler = (event) => {
    event.preventDefault();
    let timeCounter = setInterval(() => {
      clearInterval(timeCounter);
      if(seconds === 0) {
        if(minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1)
        }
      }else{
        setSeconds(seconds - 1)
      }
    }, 1000)

  }

  useEffect(()=> {
    function getLuckyOne (num) {
      return Array.from(Array(num), (_, i) => DUMMY_DATA[Math.floor(Math.random() * DUMMY_DATA.length)])
    }

    let interval = setInterval(() => {
      if(seconds === 0) {
        if(minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1)
        }
      }else{
        setSeconds(seconds - 1)
      }
    }, 1000)
    
    if(seconds === 0 && minutes === 0) {
      getLuckyOne(1)
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return(
    <div className={classes.formContainer}>
      <TextField
        type="number"
        onChange={(e) => setMinutes(e.target.value)}
        placeholder="請設定時間（分鐘）"
        InputLabelProps={{ shrink: true }} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TimerIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button className={classes.root} disabled={seconds === 0 && minutes === 0} onClick={setTimerHandler}>設定</Button>
      <h2>{timerMinutes}: {timerSeconds}</h2>
      
    </div>
  )
}

export default TimeSetting