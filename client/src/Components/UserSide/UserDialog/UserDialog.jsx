import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import  Select  from "@mui/material/Select"
import  MenuItem  from "@mui/material/MenuItem"
import Axios from 'axios';

import { useState, useEffect } from 'react';
import { Toaster, toast  } from 'react-hot-toast';
import { api } from '../../../Service/api';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';


export function UserDialog(props) {
  

  const [editValues, setEditValues] = useState({
    id: props.id,
    numbers: props.numbers,
    instancie: props.instancie,
    system: props.system,
    status: props.status,
  })

  const [valueInput, setValueInput] = useState(props.numbers)
  const {user} = useContext(AuthContext)
  const email = user.email
  

////////////////////////////////////////////////////////////////////////DELETE//////////

//   const deleteTable = () => {

//     api.delete(`/delete/${editValues.id}`)

//       .then(() => {
        
//         props.setListTables(

//           props.listTables.filter((value) => {

//             return value.id != editValues.id 
//           })

//         )
          
//       }).then(() => {
          
//       props.setListTables([

//         ...props.listTables,

//         {
//           numbers: props.numbers,
//           instancie: props.instancie,
//           system: props.system,
//           status: props.status,
//         }

//       ])
//     }).then(() => {

//       api.get("/request")
//       .then((res) => {
      
//         props.setListTables(res.data)

//       })
//     })
    
//     props.setValueInput("")
//     props.setSelecInstancie("")
//     props.setSelecSystem("")
//     props.setSelecStatus("")

    
//     handleClose()

//     toast('Excluído',

//             {
//                 style: {
//                 borderRadius: '10px',
//                 background: '#ad2d2d',
//                 color: '#fff',
//                 },
//             }
//         );
//   }

  
////////////////////////////////////////////////////////////////////////EDIT//////////

  const editDatas = () => {
    
    if(valueInput.length < 27) {
            
      // alert("Preencha Todos os Campos Corretamente")

      toast('Numero de Processo Incorreto',

        {
            style: {
            borderRadius: '10px',
            background: '#ad2d2d',
            color: '#fff',
            },
        }
      );

      setValueInput(prevValueInput => prevValueInput = props.numbers);
      
    } else {

        const dataString = new Date();

        const dia = dataString.getDate();
        const mes = dataString.getMonth() + 1;
        const ano = dataString.getFullYear();
        const hora = dataString.getHours();
        const minuto = dataString.getMinutes();
        const segundo = dataString.getSeconds();
        
        // const data = dataString;
        const data = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;

        api.put('/edit', {

            id: editValues.id,
            numbers: valueInput,
            instancie: editValues.instancie,
            system: editValues.system,
            status: editValues.status,
            data: data
        
        }).then(() => {

        props.setListTables([
            props.listTables.map((value) => {

                return value.id == editValues.id ? {

                    id: editValues.id,
                    numero: valueInput,
                    instancia: editValues.instancie,
                    sistema: editValues.system,
                    status: editValues.status,
                    data: data

                }
                
                : value
        
            })
            
        ])
            
        
        }).then(() => {

        api.get("/userrequest", {
        
          params: {
            email: email,
        }
        
        }).then((res) => {
              props.setListTables(res.data)
          })
        })
        
        props.setValueInput(props.numbers)
        
        
        toast('Salvo', {

            style: {

              borderRadius: '10px',
              background: '#12963a',
              color: '#fff',

            },
          }
        );
                  
                  
      handleClose()
    }

    props.setValueInput("")
    props.setSelecInstancie("")
    props.setSelecSystem("")
    props.setSelecStatus("")
    
    
      
  }
 
  const handleClose = () => {
    props.setOpen(false);
    setValueInput(props.numbers)
  };


  const registerDatas = (values) => {

    setEditValues((prevEditValues) => ({

      ...prevEditValues,
      [values.target.name]: values.target.value,
     

    }))

  }

 
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

  return (
    
    <div>
      <Dialog open={props.open} onClose={handleClose} >
        <DialogTitle>Editar</DialogTitle>

        <DialogContent>

          <TextField
            className='inputP'
            autoFocus
            margin="dense"
            id="numbers"
            value={valueInput}
            placeholder='Numero do Processo'
            inputProps={{ maxLength: 27 }}
            fullWidth
            variant="standard"
            onChange={handleValues}
          />
          
          <Select
            autoFocus
            label='Numero do Processo'
            margin="dense"
            id="system"
            name="system"
            fullWidth
            variant="standard"
            defaultValue={props.system}
            onChange={registerDatas}

          >

              <MenuItem value={'PJE'}>PJE</MenuItem>
              <MenuItem value={'PROJUDI'}>PROJUDI</MenuItem>
              <MenuItem value={'E-PROC'}>E-PROC</MenuItem>
              <MenuItem value={'E-SAJ'}>E-SAJ</MenuItem>
              <MenuItem value={'SISTEMA PRÓPRIO'}>SISTEMA PRÓPRIO</MenuItem>

          </Select>
          
          <Select
            autoFocus
            margin="dense"
            id="instancie"
            name="instancie"
            fullWidth
            variant="standard"
            defaultValue={props.instancie}
            onChange={registerDatas}
          >
              <MenuItem value={'Primeira'}>Primeira</MenuItem>
              <MenuItem value={'Segunda'}>Segunda</MenuItem>
              <MenuItem value={'JF'}>JF</MenuItem>
              <MenuItem value={'TRF'}>TRF</MenuItem>
              <MenuItem value={'STF'}>STF</MenuItem>
              <MenuItem value={'STJ'}>STJ</MenuItem>

          </Select>

         
          <Select
            autoFocus
            margin="dense"
            id="status"
            name="status"
            fullWidth
            variant="standard"
            defaultValue={props.status}
            onChange={registerDatas}
          >
            <MenuItem value={'Concluído'}>Concluído</MenuItem>
            <MenuItem value={'Pendente'}>Pendente</MenuItem>
            <MenuItem value={'Não Concluído'}>Não Concluído</MenuItem>

          </Select>

        </DialogContent>

        <DialogActions>

          <Button onClick={handleClose}
          style={{color: 'black'}}
          >

            Cancelar
          
          </Button>

          <Button onClick={editDatas}
          style={{color: 'green'}}
          >

            Salvar
          
          </Button>

        </DialogActions>

      </Dialog>

      <Toaster
          position="bottom-left"
          reverseOrder={false}
      />
    </div>
    
  );

}