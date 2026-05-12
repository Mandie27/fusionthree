import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOrderDto {
    @IsNumber()
    user_id!: number;

    @IsNumber()
    total_price!: number;

    @IsOptional()
    @IsString()
    status?: string;
}
