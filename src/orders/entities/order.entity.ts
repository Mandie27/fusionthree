import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    order_id!: number;
    
    @Column()
    user_id!: number;
    
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total_price!: number;
    
    @Column({ default: 'pending' })
    status!: string;
    
    @CreateDateColumn()
    created_at!: Date;
    
    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    order_date!: Date;
}
