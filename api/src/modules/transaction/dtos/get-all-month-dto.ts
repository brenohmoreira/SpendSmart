import { IsInt, IsOptional, Min, Max } from "class-validator";
import { Type } from "class-transformer";

export class GetAllOfMonthDto {
  @IsOptional()
  @Type(() => Number) 
  @IsInt()
  @Min(1)
  @Max(12)
  month?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  year?: number;
}
