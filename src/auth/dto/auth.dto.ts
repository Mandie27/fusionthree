import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Length } from "class-validator";

export class RegisterDto {
 @IsEmail()
 email: string;

@IsString()
@IsNotEmpty()
fullname: string;

 @IsString()
 @Length(8)
 password: string;

 @IsPhoneNumber()
 phone_number: string

}