import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength } from "class-validator";

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
}