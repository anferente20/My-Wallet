export interface Transaccion {
    id:number;
    fecha:string;
    descripcion:string;
    idCuenta:number;
    monto:number;
    tipo:boolean; //true ingeso false egreso
}