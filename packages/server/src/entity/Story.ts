import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { User } from "./User";
import { Response } from "./Response";

@Entity()
export class Story extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

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

  @Column()
  authorId: string;

  @ManyToOne(() => User, user => user.stories)
  @JoinColumn({ name: "authorId" })
  user: Promise<User>;

  @OneToMany(() => Response, response => response.story)
  responses: Response[];
}
