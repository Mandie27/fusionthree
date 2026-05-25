import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}
  
  async register(dto: RegisterDto){
    const user = await this.usersService.create(dto);

    const payload = {email: user.email,
      sub: user.user_id,
      role: user.role
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        user_id: user.user_id,
        fullname: `${user.first_name} ${user.last_name}`,
        email: user.email,
        role: user.role,
        phone_number: user.phone_number,
      }
    }; 
  }
  
  async login(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);

    // console.log('--- LOGIN DEBUG ---');
    // console.log('Email:', email);
    // console.log('User found in DB:', user ? 'YES' : 'NO');

    if (!user || !user.password) {
      throw new UnauthorizedException('User not found');
    }

    // console.log('Password from Postman:', password);
    // console.log('Password from DB:', user.password);

    const isMatch = await bcrypt.compare(password, user.password);
    // console.log('Does Bycrypt Match:', isMatch);

    if (!isMatch) {
      throw new UnauthorizedException('User not found');
    }

    const payload = {
      email: user.email,
      sub: user.user_id,
      role: user.role
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        user_id: user.user_id,
        fullname: `${user.first_name} ${user.last_name}`,
        email: user.email,
        role: user.role,
        phone_number: user.phone_number,
      }
    };
  }
}



  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }