import mongoose, { Schema, Document, Model } from "mongoose";

export enum EventType {
  Corporate = "Corporate",
  Personal = "Personal",
  Sport = "Sport",
  Promotional = "Promotional",
  Other = "Other",
}

interface IEnquiry extends Document {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  reachOutOnWhatsApp: boolean;
  eventType: EventType;
  newsLetterSubscription: boolean;
  // newsLetterSubscription?: mongoose.Types.ObjectId;
}

const enquirySchema = new Schema<IEnquiry>(
  {
    firstName: { type: String },
    lastName: { type: String },
    fullName: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    reachOutOnWhatsApp: { type: Boolean, default: false },
    eventType: {
      type: String,
      enum: Object.values(EventType),
    },
    newsLetterSubscription: { type: Boolean, default: true },
  },
  { timestamps: true, strict: false }
);

const Enquiry: Model<IEnquiry> =
  mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", enquirySchema);

export default Enquiry;
