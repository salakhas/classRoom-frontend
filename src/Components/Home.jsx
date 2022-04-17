
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTeachers, getTeachersData } from '../Redux/Teachers/action';


export const Home = () => {
    const {teachers} = useSelector((store)=>store.teachers);
    const reduxDispatch = useDispatch();
    console.log('teachers:>>>', teachers)
    const displayArray = teachers.teachers;
    console.log('displayArray:', displayArray)
    useEffect(()=>{
      reduxDispatch(getTeachersData());
    },[]);
    return(
        <>
        <h1>Home</h1>
        <div style={{display:"grid",gridTemplateColumns:"auto auto",gap:"20px",padding:"30px",width:"60%"
      ,margin:"auto"}}>
          {displayArray.map((el)=>{
            return (
              <>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={el.pic}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>Classes:0</h3>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{width:"20%"}}>Learn More</Button>
      </CardActions>
    </Card>
              </>
            )
          })}
        </div>
        </>
    )
}