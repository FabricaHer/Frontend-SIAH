import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import TablePagination from '@mui/material/TablePagination';
import { TableFooter } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.common.white,
    margin: "5px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const ContratosVerMas = () => {
  const [data,setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  const getData = async () => {
    const response = await fetch(
      "http://192.160.35.172:4000/api/contratos/"
    );
    const data = await response.json();
    setData(data.results);
    console.log(data);
};
 
  useEffect(()=>{
    getData();
  },[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Numero</StyledTableCell>
              <StyledTableCell>Descripcion</StyledTableCell>
              <StyledTableCell>Nombre del Cliente</StyledTableCell>
              <StyledTableCell>Codigo del Cliente</StyledTableCell>
            </TableRow>
          </TableHead>  
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.codigo}>
              <TableCell>
                {row.codigo}
              </TableCell>
              <TableCell>
                {row.descripcion}
              </TableCell>
              <TableCell>
                {row.DPCLIENTE.nombre}
              </TableCell>
              <TableCell>
                {row.codigoCliente}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}