import React, { useState } from 'react'
import { Grid, Box } from '@material-ui/core'
import { Header } from '../../components/GlobalComponents/Header'
import { Form } from '../../components/GlobalComponents/Forms/Form';
import { TextField } from '../../components/GlobalComponents/Inputs/TextField';
import { Button } from '../../components/GlobalComponents/Inputs/Button';

export const GenerateReport: React.FC = (props) => {

    let hospitalName: string = "";
    let error: number = 0;
    const [code , setCode] = useState('');
    const handleCodeChange = (e: { target: { value: React.SetStateAction<string> } }) => {
        setCode(e.target.value);
        getHospitalName(e.target.value.toString());
    }
    const getHospitalName = (hospitalCode: string) => {
        //código apenas para demonstração
        let testHospitalNames: string[] = ["#hospital1", "#hospital2", "#hospital3"];
        let index = testHospitalNames.indexOf(hospitalCode);
        if(index > -1){
            hospitalName = testHospitalNames[index]
        }
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(code === "" || code.charAt(0) !== "#"){
            alert("error message");
            error = 1
        } else{
            getHospitalName(code);
            alert(code + hospitalName );

        }
    }
    const name = () => {
        getHospitalName(code);
        return <TextField disabled name="Código" value="" label={hospitalName}  onChange={()=>{}} id="standard-basic" variant="outlined"/>
    }

    const test2 = () => {
        console.log(error)
        return <TextField disabled name="Código" value="" label={hospitalName}  onChange={()=>{}} id="standard-basic" variant="outlined"/>
    }

    return (
        <Grid>
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Header title='Home Page' />
                </Grid>
            </Grid>
            <Box mt="10%">
                <Grid container direction="column" justifyContent="flex-start" alignItems="center">
                    <Form>
                        <Grid container direction='column' spacing={2} alignItems="center" id="grid">
                            <TextField name="Código" value={code} label="Código" onChange={handleCodeChange} id="standard-basic" variant="outlined"/>
                            {name()}
                            <Button size="medium" onClick={handleSubmit}>Baixar (.pdf)</Button>
                        </Grid>
                    </Form>
                </Grid>
            </Box>
        </Grid>
    )
}