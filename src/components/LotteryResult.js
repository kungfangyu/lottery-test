/*
 * @Date: 2021-09-23 11:03:19
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-23 13:27:53
 * @FilePath: /react-counter/src/components/LotteryResult.js
 */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import userImg from '../assets/account.png'


const LotteryResult = (props) => {
  return(
    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      <h3>恭喜中獎！</h3>
      <CardActionArea>
        <CardMedia
          style={{objectFit: 'contain'}}
          component="img"
          height="100"
          image={userImg}
          alt="user image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default LotteryResult;