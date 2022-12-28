import { Autocomplete, Button, Grid, TextField, } from "@mui/material";
import { useState } from "react";

const AddProduct = () => {
    
    const [value, setValue] = useState('');

    const getNameFile = (e) => {
        const value = e.target.value.replace('C:\\fakepath\\', '');
        setValue(value);
    }
    return (
        <div className="">
            <Grid container spacing={2} style={{padding: '10px 15px'}}>
                <Grid item xs={12} md={6} xl={2}>
                    <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={[]}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Category" />}
                    />
            </Grid>
            <Grid item xs={12} md={6} xl={2}>
                <TextField label="name"/>
            </Grid>
            <Grid item xs={12} md={6} xl={2}>
                <TextField label="count"/>
            </Grid>
            <Grid item xs={12} md={6} xl={2}>
                <label className="lbl_file" for="img_upload">add image</label>    
                <input className="inp_file" type="file" name="img_upload" id="img_upload" onChange={getNameFile}/>
            </Grid>
            <Grid item xs={12} md={6} xl={2}>
                <span className="inp_name_file">{value}</span>
            </Grid>
        </Grid>
        <Grid container spacing={2} style={{padding: '10px 15px'}}>
            <Grid item xs={12} md={6} xl={12}>
                <textarea style={{width: '60%'}} className="txtarea_description" name="" id="" cols="30" rows="10"></textarea>
            </Grid>
            <Grid item xs={12} md={12} xl={12}>
                <Button variant="outlined" style={{
                    maxWidth: '200px',
                    minWidth: '150px',
                }}
                     >Send
                </Button>
            </Grid>
        </Grid>
            <Grid container spacing={2} style={{padding: '10px 15px'}}>
                <Grid item xs={12} md={6} xl={2}>
                    <TextField label="category"/>
                </Grid>
                <Grid item xs={12} md={6} xl={2}>
                <Button variant="outlined" style={{padding: '15px 25px'}}>Send</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default AddProduct;