import React, { useState } from 'react'
import { Grid, Box } from '@material-ui/core'
import { Header } from '../../components/GlobalComponents/Header'
import { Form } from '../../components/GlobalComponents/Forms/Form';
import { TextField } from '../../components/GlobalComponents/Inputs/TextField';
import { Button } from '../../components/GlobalComponents/Inputs/Button';
import { Typography } from '@material-ui/core'
import { useStyles } from './styles'

export const GenerateReport: React.FC = (props) => {

    const classes = useStyles()
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
            <Box className={classes.form}>
                <Grid container direction="column" justifyContent="flex-start" alignItems="center">
                <Box mb="30px"><Typography variant="h3" align="center">Gerar Relatório</Typography></Box>
                    <Form>
                        <Grid container direction='column' spacing={2} alignItems="center" id="grid">
                            <TextField name="Código" value={code} label="Código" onChange={handleCodeChange} id="standard-basic" variant="outlined"/>
                            {name()}
                            <Button size="medium" onClick={handleSubmit}>Baixar (.pdf)</Button>
                        </Grid>
                    </Form>
                </Grid>
            </Box>
            <Box mt="100px">
                <Grid className={classes.textContainer} container direction='column' spacing={2} alignItems="center">
                    <Box borderColor="primary.main" border={3} mb="30px" className={classes.title}><Typography variant="h4" align="center">Descrição de Relatório</Typography></Box>
                    <Box className={classes.text}>
                        <Grid>
                            <Box mb="10px"><Typography variant="h5" align="center">Demonstração de Gráfico</Typography></Box>
                            <Typography>Texto testando Demonstração de Gráfico Texto testando Demonstração de GráficoTexto testando Demonstração de GráficoTexto testando Demonstração de GráficoTexto testando Demonstração de GráficoTexto testando Demonstração de GráficoTexto testando Demonstração de GráficoTexto testando Demonstração de GráficoTexto testando Demonstração de Gráfico</Typography>
                        </Grid>
                    </Box>
                    <Box mt="30px" className={classes.text}>
                        <Grid>
                            <Box mb="10px"><Typography variant="h5" align="center">Legendas</Typography></Box>
                            <Typography>Texto testando Legendas Texto testando LegendasTexto testando LegendasTexto testando LegendasTexto testando LegendasTexto testando LegendasTexto testando LegendasTexto testando LegendasTexto testando LegendasTexto testando LegendasTexto testando LegendasTexto testando LegendasTexto testando LegendasTexto testando LegendasTexto testando Legendas</Typography>
                        </Grid>
                    </Box>
                    <Box mt="30px" className={classes.text}>
                        <Grid>
                            <Box mb="10px"><Typography variant="h5" align="center">Referências</Typography></Box>
                            <Typography>Texto testando Referências Texto testando ReferênciasTexto testando ReferênciasTexto testando ReferênciasTexto testando ReferênciasTexto testando ReferênciasTexto testando ReferênciasTexto testando ReferênciasTexto testando ReferênciasTexto testando ReferênciasTexto testando ReferênciasTexto testando Referências</Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Grid>
    )
}