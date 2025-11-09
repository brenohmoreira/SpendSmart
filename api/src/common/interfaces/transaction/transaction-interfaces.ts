export interface ITransaction {
    id?: number;
    idUser: number;
    idTypeTransaction: number;
    dateTransaction: string;
    valueTransaction: number;
}

export interface ITypeTransaction {
    id?: number;
    nameTransaction: number;
}

export interface ICreateTransaction {
    idUser: number;
    idTypeTransaction: number;
    dateTransaction: string;
    valueTransaction: number;
}



