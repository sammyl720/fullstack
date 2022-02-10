import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TodoDocument = Todo & Document;

@Schema({
  timestamps: true
})
export class Todo {

  @Prop({ required: true })
  text: string;

  @Prop({ default: false })
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);