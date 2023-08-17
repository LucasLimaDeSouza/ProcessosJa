import { Table } from "./style";
import React from "react";


export function HeadTable() {
    return (
        <Table>
            <th>Num. do Processo</th>
            <th>Usuario</th>
            <th>Sistema</th>
            <th>Instância</th>
            <th>Status</th>   
            <th>Opções</th>   
        </Table>
    )
}