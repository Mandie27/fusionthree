import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  
  async create(createProductDto: CreateProductDto) {
    const { category_id, ...productData } = createProductDto;
    
    const newProduct = this.productRepository.create({
      ...productData,
      category: { category_id: category_id } as any, 
  });

  return await this.productRepository.save(newProduct);
}

  async findAll() {
    return await this.productRepository.find({ relations: ['category'] });
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { product_id: id },
      relations: ['category'],
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const { category_id, ...productData } = updateProductDto;

    const updatePayload: any = { ...productData };
    if (category_id) {
      updatePayload.category = { category_id: category_id };
    }
    
    await this.productRepository.update(id, updatePayload)
    return this.findOne(id);
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
    return { message: 'Product with ID ${id} successfully deleted' };
  }
}
