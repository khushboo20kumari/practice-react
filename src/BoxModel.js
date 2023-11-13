import { Box } from "@mui/material";

function BoxModel(){
    return(
        <>
        <Box style={{width:"300px",height:"300px",border:"5px solid red",margin:"30px",padding:"30px"}}>this is first box</Box>
        <Box style={{width:"300px",height:"300px",border:"5px solid blue",margin:"30px",padding:"30px"}}>this is second box</Box>
        </>
    )
}
export default BoxModel;