import { Category } from "src/categories/entities/category.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn} from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
        product_id!: number;

        @ManyToOne(() => Category, (category) => category.products)
        @JoinColumn({ name: 'category_id'})
        category!: Category;
        
        @Column()
        category_id!: number;
        
        @Column({ type: 'decimal', precision: 10, scale: 2 })
        product_name!: string;
        
        @Column()
        description?: string;
        
       @Column({ type: 'decimal', precision: 10, scale: 2 })
        price!: number;
        
        // @Column({ type: 'date', default: () => 'CURRENT_DATE' })
        // order_date: Date;
}
