import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import { Category } from "src/categories/entities/category.entity";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
        product_id: number;
        
        @Column()
        product_name: string;
        
        @Column({ nullable: true })
        description: string;
        
        @Column({ type: 'decimal', precision: 10, scale: 2 })
        price: number;

        @Column({ name: 'image_url', nullable: true })
        imageUrl: string;

        @Column({ name: 'is_available', type: 'boolean', default: true })
        isAvailable: boolean;
        
        // @Column({ type: 'date', default: () => 'CURRENT_DATE' })
        // order_date: Date;

        @ManyToOne(() => Category, (category) => category.products, { onDelete: 'SET NULL' })
        @JoinColumn({ name: 'category_id' })
        category: Category;
}
