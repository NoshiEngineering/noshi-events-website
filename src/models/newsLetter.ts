import mongoose, { Schema, Document, Model } from "mongoose";

interface INewsLetter extends Document {
  email: string;
  subscribed: boolean;
}

const newsLetterSchema = new Schema<INewsLetter>(
  {
    email: { type: String, required: true },
    subscribed: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const NewsLetter: Model<INewsLetter> =
  mongoose.models.NewsLetter ||
  mongoose.model<INewsLetter>("NewsLetter", newsLetterSchema);

export default NewsLetter;
