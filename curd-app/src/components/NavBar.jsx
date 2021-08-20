import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header:{
        background:'#111111'
    },
    tabs:{
        color:'#ffffff',
        textDecoration: 'none',
        margin: 20,
        fontSize: 20
    }
})
const NavBar = () =>{
    const classes = useStyle();
    return(
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>Data Base</NavLink>
                <NavLink className={classes.tabs} to="all" exact>All Users</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Add User</NavLink>
            </Toolbar>
        </AppBar>

    )
}
export default NavBar;