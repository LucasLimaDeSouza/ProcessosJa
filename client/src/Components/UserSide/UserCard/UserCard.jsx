import * as React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Button from '@mui/material/Button';
import Axios from 'axios';

import { api } from '../../../Service/api';
import { CardBox } from "./style";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import { Toaster, toast  } from 'react-hot-toast';
import { UserDialog } from '../UserDialog/UserDialog';

// interface PropsString {
//     statusColor: string;
//     numbers: string;
//     system: string;
//     instancie: string;
//     status: string;
//     id: number;

// }

export function UserCard(props) {

    const {user} = useContext(AuthContext)
    const usuario = user.name

    const [open, setOpen] = useState(false);

    const handleOpen = () => {

        setOpen(true);
        
    };


    const [editValues, setEditValues] = useState({
        id: props.id,
        numbers: props.numbers,
        instancie: props.instancie,
        system: props.system,
      })

    const statusClass = 
        props.statusColor == "Pendente" ? "yellow" : 
        props.statusColor == "Concluído" ? "green" : 
        props.statusColor == "Não Concluído" ? "red" : ""

    // const handleOpen = () => {
    //     setOpen(true);
    //     };



    const deleteTable = () => {
        

        api.delete(`/delete/${editValues.id}`).then(() => {
            
            props.setListTables(

                props.listTables.filter((value) => {
        
                    return value.id != editValues.id
                    
                })
            )
                
            
        }).then(() => {
                
            props.setListTables([
    
                ...props.listTables,
        
                {
                    numbers: props.numbers,
                    instancie: props.instancie,
                    system: props.system,
                    status: props.status,
                }
        
            ])
                
        }).then(() => {
        
            api.get("/userrequest", {
                params: {
                    usuario: usuario,
                }
            }).then((res) => {
                props.setListTables(res.data)
        
            })
            toast('Excluído',
    
                    {
                        style: {
                        borderRadius: '10px',
                        background: '#ad2d2d',
                        color: '#fff',
                        },
                    }
                );
        })


    }
    

    return (
        <>

            <CardBox id={props.id} className={statusClass} onClick={handleOpen}>
                <td>{props.numbers}</td>
                <td>{props.system}</td>
                <td>{props.instancie}</td>
                <td className={statusClass}>{props.status}</td>
                <td>Editar</td>
            </CardBox>

            <UserDialog 
                key={props.id}
                open={open} 
                setOpen={setOpen}
                listTables={props.listTables}
                id={props.id}
                numbers={props.numbers}
                system={props.system}
                instancie={props.instancie}
                status={props.status}
                data={props.data}
                statusClass={statusClass}
                setListTables={props.setListTables}

                valueInput={props.valueInput}
                selecInstancie={props.selecInstancie}
                selecSystem={props.selecSystem}
                selecStatus={props.selecStatus}

                setValueInput={props.setValueInput}
                setSelecInstancie={props.setSelecInstancie}
                setSelecSystem={props.setSelecSystem}
                setSelecStatus={props.setSelecStatus}
            />

            {/* <CardBox id={props.id} className={statusClass} >
                <td>{props.numbers}</td>
                <td>{props.system}</td>
                <td>{props.instancie}</td>
                <td className={statusClass}>{props.status}</td>

                <td onClick={deleteTable}>
                    <Button
                        // className='deleteButton' 
                        style={{
                            color: 'red',
                        }}
                    >
                        <HighlightOffIcon fontSize="medium" style={{ color: 'red' }} />
                        Excluir
                    </Button>
                </td>

            </CardBox> */}
                                    
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
        </>
    )
}