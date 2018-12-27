import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { User } from "./User";

@Entity()
export class Story extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column()
  author: string;

  @ManyToOne(() => User, user => user.stories)
  @JoinColumn({ name: "author" })
  user: Promise<User>;

  @Column({ type: "text", unique: true })
  title: string;

  @Column({ type: "text" })
  summary: string;

  @Column({ type: "text" })
  body: string;

  @Column({ type: "text", unique: true })
  previewTitle: string;

  @Column({ type: "text", unique: true })
  previewDescription: string;

  @Column({ type: "text" })
  previewImageUrl: string;

  @Column({ type: "int" })
  claps: number;

  @Column({ type: "text", nullable: true, array: true })
  tags: string[];
}
