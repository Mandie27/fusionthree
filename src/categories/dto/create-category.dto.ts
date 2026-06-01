import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    category_name: string;

    @IsOptional()
    @IsString()
    icon: string;

    @IsOptional()
    @IsString()
    description: string;
}
