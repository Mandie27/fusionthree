import { IsString, IsNumber, IsOptional, IsBoolean, isString, IsNotEmpty, Min } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    product_name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsNumber()
    @IsNotEmpty()
    category_id: number;

    @IsString()
    @IsOptional()
    image_url: string;

    @IsBoolean()
    @IsOptional()
    is_available: boolean;
}
