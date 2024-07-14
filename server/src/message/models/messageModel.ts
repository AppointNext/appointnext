import { Document, model, Schema } from "mongoose";

export interface IMessage extends Document {
  sender: string;
  receiver: string;
  message: string;
}

const messageSchema = new Schema(
  {
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = model<IMessage>("Message", messageSchema);

export default Message;
