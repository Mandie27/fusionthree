import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from './entities/order-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
  ) {}
  async create(createOrderItemDto: CreateOrderItemDto) {
    const item = this.orderItemRepository.create(createOrderItemDto);
    return await this.orderItemRepository.save(item);
  }

  async findAll() {
    return await this.orderItemRepository.find;
  }

  async findOne(id: number) {
    return await this.orderItemRepository.findOneBy({ order_item_id: id});
  }

  async update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    await this.orderItemRepository.update(id, updateOrderItemDto);
    return this.findOne;
  }

  async remove(id: number) {
    return await this.orderItemRepository.delete(id);
  }
}
