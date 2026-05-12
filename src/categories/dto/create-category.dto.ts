import { IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    category_name!: string;

    @IsOptional()
    @IsString()
    icon?: string;

    @IsOptional()
    @IsString()
    description?: string;
}
