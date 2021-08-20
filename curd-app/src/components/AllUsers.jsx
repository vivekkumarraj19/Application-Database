import {TableCell, TableRow, Table, TableHead, TableBody, Button, Paper, makeStyles} from "@material-ui/core";
import react, { useEffect,useState } from "react";
import { getUsers, deleteUser} from "../Service/api";
import { Link } from 'react-router-dom';



const useStyle = makeStyles({
  table:{
    width:'90%',
    margin:'50px 0 0 50px'
  },
  thead: {
    '& > *': {
      background: '#000000',
      color:'#FFFFFF',
      fontsize:20
    }
  },
  row:{
    '& > *':{
      fontsize: 20
    }
  }
})


const AllUsers = () => {
    
      const [users, setUsers] = useState([]);
      const classes = useStyle();

      useEffect(() =>{
          getAllUsers();
        },[]);

        const deleteUserData = async (id) => {
          await deleteUser(id);
          getAllUsers();
      }
        const getAllUsers = async() => {
          const response =  await getUsers();
         // console.log(response.data);
          setUsers(response.data);
        }
    return(
        <Table className = {classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map((user) =>(
                <TableRow className ={classes.row} key = {user._id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                   
                  <TableCell>
                      <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                      <Button color="secondary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button> 
                  </TableCell>


                </TableRow>
              ))}
            
          </TableBody>
        </Table>
    );
}

export default AllUsers;