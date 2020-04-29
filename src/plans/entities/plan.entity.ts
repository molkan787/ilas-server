import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

export enum PlanType{
    Trial = 'trial',
    Purchase = 'purchase',
    Subscription = 'subscription'
}

@Entity()
export class Plan{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => Product, product => product.plans)
    product: Product;

    @Column({
        type: 'enum',
        enum: PlanType,
        default: PlanType.Purchase
    })
    type: PlanType

    @Column()
    name: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}