import React from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyIcon from '@mui/icons-material/Money';
import PaidIcon from '@mui/icons-material/Paid';
import { TablaCliente } from '../TablaCartas/TablaCliente';
import { TablaPrecio } from '../TablaCartas/TablaPrecio';

export const CardsData = [
    {
        id: 1,
        title: "Precios",
        icon: <AttachMoneyIcon />,
        content: <TablaPrecio />
    },
    {
        id: 2,
        title: "Clientes",
        icon: <MoneyIcon />,
        content: <TablaCliente />
    },
    {
        id: 3,
        title: "Crear Baremos",
        icon: <PaidIcon />
    },
];


