import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MinLength } from "class-validator";
import { Role } from "../roles/role.enum";

export class RegisterDto {
 @IsEmail()
 email: string;

@IsString()
@IsNotEmpty()
first_name: string;

@IsString()
@IsNotEmpty()
last_name: string;

 @IsString()
 @MinLength(8)
 password: string;

 @IsEnum(Role)
 @IsOptional()
 role: Role;
}