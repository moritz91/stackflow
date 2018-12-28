import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany
} from "typeorm";
import { Story } from "./Story";
import { Response } from "./Response";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ type: "text", unique: true })
  username: string;

  @Column({ type: "text", unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Story, story => story.user)
  stories: Story[];

  @OneToMany(() => Response, response => response.user)
  responses: Response[];
}
