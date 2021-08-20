import { Box, makeStyles, Typography } from "@material-ui/core";
import { height } from "@material-ui/system";
import home from '../Assets/images/home.jpg';

const useStyle = makeStyles({
    image:{
        width:'100%',
        height:'45%',

    }
})


const Vivek = ()=>{
    const classes=useStyle();
    return(
        <Box>
            
        <Box style={{display:'flex'}}>
            <img className={classes.image} src={home} />
        </Box>
        </Box>
    );
     

    
}
 
export default Vivek;