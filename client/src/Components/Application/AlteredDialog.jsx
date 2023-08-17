import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AlteredDialog() {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Cupcake', 305, 3.7, 67, 4.3),
    ];


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className='button' variant="outlined" onClick={handleClickOpen}>
                Suas Alterações
            </Button>
            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Alterações Feitas Pelo ADM"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Antes</TableCell>
                                    <TableCell >Depois</TableCell>
                                    <TableCell >Data</TableCell>
                                    <TableCell >Hora</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell>{row.name}</TableCell>
                                    <TableCell >{row.calories}</TableCell>
                                    <TableCell >{row.fat}</TableCell>
                                    <TableCell >{row.carbs}</TableCell>

                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Fechar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}