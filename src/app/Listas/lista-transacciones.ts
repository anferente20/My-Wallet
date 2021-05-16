import { Transaccion } from '../Interfaces/transaccion';

export const Transacciones: Transaccion[] = [
    {id:1, fecha:'01/01/2021',descripcion:'Ahorro', idCuenta:1, monto:100000,tipo:true},
    {id:2, fecha:'02/01/2021', descripcion:'Ahorro', idCuenta:1, monto:200000,tipo:true},
    {id:3, fecha:'03/01/2021', descripcion:'Gasto',idCuenta:1, monto:300000,tipo:false},
    {id:4, fecha:'04/01/2021', descripcion:'Ahorro',idCuenta:1, monto:400000,tipo:true},
    {id:5, fecha:'05/01/2021', descripcion:'Ahorro',idCuenta:1, monto:500000,tipo:true},
    {id:6, fecha:'06/01/2021', descripcion:'Gasto',idCuenta:2, monto:600000,tipo:false},
    {id:7, fecha:'07/01/2021', descripcion:'Ahorro',idCuenta:2, monto:700000,tipo:true},
    {id:8, fecha:'08/01/2021', descripcion:'Ahorro',idCuenta:2, monto:800000,tipo:true},
    {id:9, fecha:'09/01/2021', descripcion:'Ahorro',idCuenta:2, monto:900000,tipo:true},
    {id:10, fecha:'10/01/2021', descripcion:'Gasto',idCuenta:3, monto:1000000,tipo:false},
    {id:11, fecha:'11/01/2021', descripcion:'Ahorro',idCuenta:3, monto:100000,tipo:true},
    {id:12, fecha:'12/01/2021', descripcion:'Ahorro',idCuenta:3, monto:200000,tipo:true},
    {id:13, fecha:'13/01/2021', descripcion:'Ahorro',idCuenta:3, monto:300000,tipo:true},
    {id:14, fecha:'14/01/2021', descripcion:'Ahorro',idCuenta:3, monto:800000,tipo:true},
    {id:15, fecha:'15/01/2021', descripcion:'Gasto',idCuenta:3, monto:900000,tipo:false},

];