import { IsString, IsNumber, IsOptional, IsBoolean, isString } from "class-validator";

export class CreateProductDto {
    @IsNumber()
    category_id!: number;

    @IsString()
    product_name!: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNumber()
    price!: number;

    @IsOptional()
    @IsString()
    image_url?: string;

    @IsBoolean()
    is_available!: boolean;
}
