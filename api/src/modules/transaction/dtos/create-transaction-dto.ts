import { IsDateString, IsNotEmpty, IsNumber } from "class-validator"

export class CreateTransactionDTO {
  @IsNumber()
  @IsNotEmpty()
  idUser: number;

  @IsNumber()
  @IsNotEmpty()
  idTypeTransaction: number;

  @IsDateString()
  @IsNotEmpty()
  dateTransaction: string;

  @IsNumber()
  @IsNotEmpty()
  valueTransaction: number;
}