export interface Transaccion {
    id:number;
    fecha:string;
    descripcion:string;
    destinatario:string;
    idCuenta:number;
    idCliente:number;
    monto:number;
    tipo:boolean; //true ingeso false egreso
}