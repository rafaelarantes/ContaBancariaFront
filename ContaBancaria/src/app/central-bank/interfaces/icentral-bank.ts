import { ITable } from "../../shared/components/table/interfaces/itable";

export interface ICentralBank extends ITable {
    guid: string;
    name: string;
    branch: number;
    number: number;
}
