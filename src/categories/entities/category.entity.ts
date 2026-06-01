import { Product } from "src/products/entities/product.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    category_id: number;
    
    @Column({unique: true})
    category_name: string;
    
    @Column({ type: 'text', nullable: true })
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
}
