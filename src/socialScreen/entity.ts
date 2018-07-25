import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity';

@Entity()
export default class SocialScreen extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:true, unique:true})  
  mediaId: string 

  @Column('text', {nullable:true})
  text: string

  @Column('int', {nullable:true})
  commentCount: number

  @Column('int', {nullable:true})
  likeCount: number

  @Column('text', {nullable:true})
  displayUrl: string

  @Column('int', {nullable:true})
  date: number 

  @Column('text', {nullable:true})
  hashtag: string

  @Column('text', {nullable:true})
  status: string
}


// we need to parse the 'date' in the front end.. 