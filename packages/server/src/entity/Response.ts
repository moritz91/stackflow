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
import { Story } from "./Story";

@Entity()
export class Response extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ type: "text" })
  body: string;

  @Column({ type: "int" })
  claps: number;

  @Column()
  authorId: string;

  @ManyToOne(() => User, user => user.responses)
  @JoinColumn({ name: "authorId" })
  user: Promise<User>;

  @Column()
  storyId: string;

  @OneToMany(() => Story, story => story.responses)
  @JoinColumn({ name: "storyId" })
  story: Promise<Story>;
}
