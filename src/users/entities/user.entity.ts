import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    user_id!: number;

    @Column()
    fullname!: string;

    @Column({unique: true})
    email!: string;

    @Column({ select: false }) // Hides password by default when fetching users
    password!: string;

    @Column({ default: 'customer' })
    role!: string;

    @Column({ nullable: true })
    phone_number?: string;

    @Column({ type: 'text', nullable: true })
    address?: string;

    @CreateDateColumn()
    created_at!: Date;
}

