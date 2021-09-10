import React, { useState, ChangeEvent } from 'react'
import {useStyles} from './styles'
import { Grid, Box } from '@material-ui/core'
import { Header } from '../../components/GlobalComponents/Header'
import { Form } from '../../components/GlobalComponents/Forms/Form';
import { TextField } from '../../components/GlobalComponents/Inputs/TextField';
import { Button } from '../../components/GlobalComponents/Inputs/Button';

export const GenerateReport: React.FC = () => {
    const classes = useStyles()
    const [codigo, setCodigo] = useState("");
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
                        <Grid container direction='column' spacing={2} alignItems="center">
                            <TextField name="Código" value={codigo} label="Código" onChange={(value: React.ChangeEvent<HTMLInputElement>) => setCodigo(value.target.value)} id="standard-basic" variant="outlined"/>
                            <TextField disabled name="Nome de Hospital" value="" label="Nome de Hospital" onChange={() =>{}} id="standard-basic" variant="outlined"/>
                            <Button size="medium" onClick={() =>{}}>Baixar (.pdf)</Button>
                        </Grid>
                    </Form>
                </Grid>
            </Box>
        </Grid>
    )
}