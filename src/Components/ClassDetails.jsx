import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getClassesData } from "../Redux/Classes/action";
import axios from "axios";

export const ClassDetails = () => {
    const {id} = useParams();
    console.log('teacherId:', id)
    const store = useSelector((store)=>store);
    console.log('store:', store)

    const dispatch = useDispatch();
    axios.get("https://classroom325.herokuapp.com/class")
    .then((res)=>{
        console.log('res', res.data)
    })
    useEffect(()=>{
        //dispatch(getClassesData());
    },[])
    return(
        <>
        <h1>Class Details</h1>
        <div>
            {[].map((el)=>{
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>id</TableCell>
                      <TableCell>Country</TableCell>
                      <TableCell>City</TableCell>
                      <TableCell>Population</TableCell>
                      <TableCell>Edit</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cities.map((row) => (
                      <TableRow
                        key={nanoid()}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell>{countries.map((el)=>{
                            if(el.country_name === row.country_name){
                                return el.country_name;
                            }
                        })}</TableCell>
                        
                        <TableCell>{row.city_name}</TableCell>
                        <TableCell>{row.population}</TableCell>
                        <TableCell onClick={handleOpen}><u>Edit</u></TableCell>
                              <Modal keepMounted 
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                      >
                          <Box sx={style}>
                          <Typography id="modal-modal-title" variant="h6" component="h2">
                              Edit City
                          </Typography>
                          
                              <div style={{display:"flex",flexDirection:"column",gap:"10px",width:"90%",height:"fit-content",
                                  border:"1px solid grey",borderRadius:"5px",margin:"auto",padding:"15px"}}>
                                  <TextField id="outlined-basic" name='city_name'
                                  onChange={(e)=>handleChanges(e)}
                                  label="Name of City" variant="outlined" />
                                  <TextField id="outlined-basic"  name='population'
                                  onChange={(e)=>handleChanges(e)}
                                  label="Population" variant="outlined" />
                                  <TextField id="outlined-basic"  name='country_name'
                                  onChange={(e)=>handleChanges(e)}
                                  label="Name of Country it belongs to" variant="outlined" />
                                  <Button variant="contained" id={row.id} onClick={handleSubmit}>Edit City</Button>
                              </div>
                          </Box>
                      </Modal>
                        <TableCell onClick={(e)=>{handleDelete(row.id)}}><u>Delete</u></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            })}
        </div>
        </>
    )
}