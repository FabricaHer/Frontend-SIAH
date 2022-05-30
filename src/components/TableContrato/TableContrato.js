import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./TableContrato.css";
import { ModalContratos } from "../ModalContratos/ModalContratos";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { ButtomContrato } from './../ButtomContrato/ButtomContrato'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "var(--primary-main)",
    color: theme.palette.common.white,
    margin: "5px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function TableContrato() {
  const [dataTable, setDataTable] = useState([]);
  const [fechaActual, setFechaActual] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const getData = async () => {
    const response = await fetch(
      "http://192.160.35.172:4000/api/contratos?limite=5&order=DESC"
    );
    const data = await response.json();
    setDataTable(data);
  };
  const getfechaActual = () => {
    const fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
    let formato = "YYYY-MM-DD";
    formato = formato
      .replace("YYYY", anio)
      .replace("MM", "0" + mes)
      .replace("DD", dia);

    setFechaActual(formato);
  };

  const handlerClick = () => {
    setOpenModal(!openModal);
  };



  useEffect(() => {
    getData();
    getfechaActual();
  }, []);
  return (
    <div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Numero</StyledTableCell>
              <StyledTableCell align="center">Descripcion</StyledTableCell>
              <StyledTableCell align="center">
                Nombre del Cliente
              </StyledTableCell>
              <StyledTableCell align="center">
                Codigo del Cliente
              </StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.map((row) => (
              <StyledTableRow key={row.codigo}>
                <StyledTableCell component="th" scope="row">
                  {row.codigo}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.descripcion}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.DPCLIENTE.nombre}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.codigoCliente}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.fechaFinal > fechaActual ? (
                    <span className="active">Activo</span>
                  ) : (
                    <span className="inactive">Inactivo</span>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  
        <ButtomContrato   />
       
    </div>
  );
}
