import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/auth.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}


  async create(dto: RegisterDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(dto.password, salt);

    const newUser = this.userRepository.create({
      ...dto,
      password: hashedPassword,
      role: 'customer'
    });

    return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find();
  } 
  
  async findOneByEmail(email: string){
    return await this.userRepository.findOne({
    where: { email },
    select: ['user_id', 'email', 'password', 'first_name', 'last_name', 'address', 'phone_number']
   });
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({ user_id: id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
