import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Plan } from '../../plans/entities/plan.entity';

export enum Status{
    Active = 'active',
    Inactive = 'inactive',
    Banned = 'banned'
}

@Entity()
export class Key{

    @PrimaryGeneratedColumn('uuid')
    key: string;

    @ManyToOne(type => Plan)
    plan: Plan;

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.Active
    })
    status: Status;

    @Column()
    max_activations: number;

    @Column({
        default: 0
    })
    used_activations: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}