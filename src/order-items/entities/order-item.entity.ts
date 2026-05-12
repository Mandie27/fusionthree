import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('order_items')
export class OrderItem {
    @PrimaryGeneratedColumn()
    order_item_id!: number;

    @Column()
    order_id!: number;

    @Column()
    product_id!: number;

    @Column()
    quantity!: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    unit_price!: number;
}
