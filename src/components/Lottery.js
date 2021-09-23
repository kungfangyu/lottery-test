/*
 * @Date: 2021-09-19 15:37:58
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-23 14:35:39
 * @FilePath: /react-counter/src/components/Lottery.js
 */
import React, { useState, Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

import LotteryResult from './LotteryResult';
import { DUMMY_DATA } from '../store/data'


function getLuckyOne (num) {
  return Array.from(Array(num), (_, i) => DUMMY_DATA[Math.floor(Math.random() * DUMMY_DATA.length)])
}

const randomResult = getLuckyOne(1)[0]

const Lottery = (props) => {
  const [isShowResult, setIsShowResult] = useState(false)
  return (
    <>
      {!isShowResult ? (
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            margin: "0 auto",
          }}
        >
          {DUMMY_DATA.map((item) => (
            <Fragment key={item.id}>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText primary={item.name} />
              </ListItem>
              <Divider component="li" />
            </Fragment>
          ))}
        </List>
      ) : (
        <LotteryResult name={randomResult.name} />
      )}
    </>
  );
}


export default Lottery;