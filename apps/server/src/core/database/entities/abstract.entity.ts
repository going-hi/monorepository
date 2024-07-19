import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class AbstractEntity {
	@PrimaryGeneratedColumn()
	public readonly id: number

	@CreateDateColumn()
	public readonly createDate: Date

	@UpdateDateColumn()
	public readonly updateDate: Date
}
