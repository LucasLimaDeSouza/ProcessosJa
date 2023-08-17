import * as React from 'react';

import {FormDialog} from "../Dialog/Dialog";
import { CardBox } from "./style";
import { useState } from 'react';



export function Card(props) {
    const [open, setOpen] = useState(false);

    const statusClass = 
        props.statusColor == "Pendente" ? "yellow" : 
        props.statusColor == "Concluído" ? "green" : 
        props.statusColor == "Não Concluído" ? "red" : ""

    const handleOpen = () => {
        setOpen(true);
        };
    

    return (

        <>

            <CardBox id={props.id} className={statusClass} onClick={handleOpen}>
                <td>{props.numbers}</td>
                <td>{props.usuario}</td>
                <td>{props.system}</td>
                <td>{props.instancie}</td>
                <td className={statusClass}>{props.status}</td>
                <td>Editar</td>
            </CardBox>
            
            <FormDialog 
                key={props.id}
                open={open} 
                setOpen={setOpen}
                listTables={props.listTables}
                id={props.id}
                numbers={props.numbers}
                system={props.system}
                instancie={props.instancie}
                status={props.status}
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
          

        </>
    )
}