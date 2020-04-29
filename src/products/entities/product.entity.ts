import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Plan } from '../../plans/entities/plan.entity';

@Entity()
export class Product{

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string

    @Column()
    icon: string

    @OneToMany(type => Plan, plan => plan.product)
    plans: Plan[];

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}