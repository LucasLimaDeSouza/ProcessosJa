import { Table } from "./style";
import React from "react";


export function UserHeadTable() {
    return (
        <Table>
            <th>Num. do Processo</th>
            <th>Sistema</th>
            <th>Instância</th>
            <th>Status</th>   
            <th>Opções</th>   
        </Table>
    )
}