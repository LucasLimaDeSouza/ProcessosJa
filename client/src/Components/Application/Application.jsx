// import Axios  from "axios";
// import AlteredDialog from './AlteredDialog';
import  Select  from "@mui/material/Select";
import TextField from '@mui/material/TextField'; 
import  MenuItem  from "@mui/material/MenuItem";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

import { BoxInputs, BoxTable, ExportButton} from "./style";
import { HeadTable } from "../HeadTable/HeadTable"
import { HeaderArea } from "../Header/Header";
import { useState, useEffect} from "react";
import { makeStyles } from '@mui/styles';
import { MainStyles } from "../../style";
import { api } from '../../Service/api';
import { Card } from "../Card/Card";

export function Application() {

    const [listTables, setListTables] = useState([])
    const [valueInput, setValueInput] = useState('')
    const [userName, setUserName] = useState('')
    const [selecSystem, setSelecSystem] = useState('')
    const [selecInstancie, setSelecInstancie] = useState('')
    const [selecStatus, setSelecStatus] = useState('')
       
    // Regex

    const handleValues = (value) => {

        if(value.target.value === "") {

            setValueInput('')

        } else {


            const valor = value.target.value;
            const cleanedValue = valor.replace(/[^\d]/g, '');
            const formattedValue = `${cleanedValue.substr(0,1)}.${cleanedValue.substr(1,7)}-${cleanedValue.substr(8,2)}.${cleanedValue.substr(10,4)}.${cleanedValue.substr(14,1)}.${cleanedValue.substr(15,2)}.${cleanedValue.substr(17,4)}`;
            const trimmedString = formattedValue.replace(/\s+/g, '');
            setValueInput(trimmedString);

            
        }     
    };
   
   

    const handleUserName = (value) => {

        const name = value.target.value

        setUserName(prevUserName => prevUserName = name)

    }
    
    const searchDatas = () => {

        if(valueInput.length === 0 && userName === "" && selecSystem === "" && selecInstancie === "" && selecStatus === "") {
            
            api.get("/request")
            .then((res) => {
                setListTables(res.data)
            })

        } else {
            
            api.post("/search", {

                numero: valueInput,
                usuario: userName,
                instancia: selecInstancie,
                sistema: selecSystem,
                status: selecStatus

            }).then((res) => {

                const mappedData = res.data.map(item => ({
                    numero: item.numero,
                    usuario: item.usuario,
                    sistema: item.sistema,
                    instancia: item.instancia,
                    status: item.status,
                    idprocessos: item.idprocessos

                }));

                setListTables(mappedData);

            })
        }
        
    }

    useEffect(() => {
        searchDatas();
    }, [valueInput, userName, selecInstancie, selecSystem, selecStatus]);
    
    

    useEffect(() => {
        api.get("/request")
        .then((res) => {
            setListTables(res.data)
        })
    }, [])

   
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            },
        },
    };

    
        
    const handleStatus = event => {
        setSelecStatus(prevSelecStatus => prevSelecStatus = event.target.value)
    }
    const handleInstancie = event => {
        setSelecInstancie(prevSelecInstancie => prevSelecInstancie = event.target.value)
    }
    const handleSystem = event => {
        setSelecSystem(prevSelecSystem => prevSelecSystem = event.target.value)
    }


    const useStyles = makeStyles( () => ({

        input: {
            backgroundColor: 'red',
            width: '17rem',
            height: '1rem',
            paddingLeft: '8px',
            fontSize: '14px',
        }
        
    }))

    const classes = useStyles()

  
    return (
        <>
            <HeaderArea/>
            <MainStyles>
            
                <BoxInputs>
                    <div className="BoxInputs">

                        
                        <TextField
                            type="text"
                            className="input" 
                            label="Número do Processo"
                            value={valueInput}
                            onChange={handleValues}
                            // inputProps={{ maxLength: 27  }}
                            size="small"
                        />

                        <TextField
                            type="text"
                            className="input" 
                            label="Usuario"
                            value={userName}
                            onChange={handleUserName}
                            // inputProps={{ maxLength: 27  }}
                            size="small"
                        />
                        
                            
                        <FormControl size="small" className="input" >
                            <InputLabel id="demo-multiple-checkbox-label">Sistema</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                
                                value={listTables.sistema || selecSystem}
                                onChange={handleSystem}
                                input={<OutlinedInput label="Sistema" />}
                                MenuProps={MenuProps}
                                classes={classes.input }
                                required
                            >
                                <MenuItem value=''>Selecione</MenuItem>
                                <MenuItem value='PJE'>PJE</MenuItem>
                                <MenuItem value='PROJUDI'>PROJUDI</MenuItem>
                                <MenuItem value='E-PROC'>E-PROC</MenuItem>
                                <MenuItem value='E-SAJ'>E-SAJ</MenuItem>
                                <MenuItem value='SISTEMA PRÓPRIO'>SISTEMA PRÓPRIO</MenuItem>

                            </Select>
                        </FormControl>

                        <div className="lastBoxInouts">

                            <FormControl size="small" className="input" >
                                <InputLabel id="demo-multiple-checkbox-label">Instancia</InputLabel>

                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    
                                    value={listTables.instancia || selecInstancie}
                                    onChange={handleInstancie}
                                    input={<OutlinedInput label="Instancia" />}
                                    MenuProps={MenuProps}
                                    classes={classes.input }
                                    
                                >
                                    <MenuItem value=''>Selecione</MenuItem>
                                    <MenuItem value='Primeira'>Primeira</MenuItem>
                                    <MenuItem value='Segunda'>Segunda</MenuItem>
                                    <MenuItem value='JF'>JF</MenuItem>
                                    <MenuItem value='TRF'>TRF</MenuItem>
                                    <MenuItem value='STF'>STF</MenuItem>
                                    <MenuItem value='STJ'>STJ</MenuItem>

                                </Select>

                            </FormControl>
                            <FormControl size="small" className="input" >
                                <InputLabel id="demo-multiple-checkbox-label">Status</InputLabel>

                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    
                                    value={listTables.status || selecStatus}
                                    onChange={handleStatus}
                                    input={<OutlinedInput label="Status" />}
                                    MenuProps={MenuProps}
                                    classes={classes.input }

                                >
                                    <MenuItem value=''>Selecione</MenuItem>
                                    <MenuItem value='Concluído'>Concluído</MenuItem>
                                    <MenuItem value='Pendente'>Pendente</MenuItem>
                                    <MenuItem value='Não Concluído'>Não Concluído</MenuItem>

                                </Select>

                            </FormControl>

                            <ExportButton
                                id="botaoExportar"
                                table="tabela"
                                filename="tabela"
                                sheet="sheet1"
                                buttonText="Exportar XLS"
                            />

                        </div>

                        {/*<AlteredDialog/>*/}

                    </div>
                    
                </BoxInputs>

                <BoxTable id="tabela">
                    
                    <HeadTable/>

                    {/* <SpaceCard> */}

                        {
                            listTables && listTables.map((datas) => (
                            <>
                                <Card 
                                    key={datas.idprocessos}
                                    id={datas.idprocessos}
                                    numbers={datas.numero}
                                    usuario={datas.usuario}
                                    instancie={datas.instancia}
                                    system={datas.sistema}
                                    status={datas.status}
                                    statusColor={datas.status}
                                    listTables={listTables}
                                    setListTables={setListTables}

                                    valueInput={valueInput}
                                    selecInstancie={selecInstancie}
                                    selecSystem={selecSystem}
                                    selecStatus={selecStatus}
                                    
                                    setValueInput={setValueInput}
                                    setSelecInstancie={setSelecInstancie}
                                    setSelecSystem={setSelecSystem}
                                    setSelecStatus={setSelecStatus}
                                />
                                    
                            </>
                            ))
                        }

                </BoxTable>              

            </MainStyles>
        </>
    )   
}