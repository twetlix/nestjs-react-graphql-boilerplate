import { Field, ObjectType } from 'type-graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  userId: string

  @Column()
  @Field()
  name: string

  @Column()
  @Field()
  email: string

  @Column()
  password: string
}
