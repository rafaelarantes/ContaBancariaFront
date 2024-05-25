import { ITable } from "../shared/components/table/itable";

export interface IBancoCentral extends ITable {
    guid: string;
    nome: string;
    agencia: number;
    numero: number;
}