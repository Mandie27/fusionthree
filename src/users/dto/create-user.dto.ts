import { IsString, IsEmail, MinLength, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsString()
    full_name!: string;

    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(6)
    password!: string;

    @IsOptional()
    @IsString()
    role!: string;

    @IsOptional()
    @IsString()
    phone_number?: string;

    @IsOptional()
    @IsString()
    address?: string;
}
