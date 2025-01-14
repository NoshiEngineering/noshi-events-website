import mongoose, { Schema, Document, Model } from "mongoose";

export enum EventType {
  Corporate = "Corporate Event",
  Personal = "Personal Event",
  Sport = "Sport Event",
  Promotional = "Promotional Event",
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

const enquirySchema = new Schema<IEnquiry>({
  firstName: { type: String },
  lastName: { type: String },
  fullName: { type: String },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  reachOutOnWhatsApp: { type: Boolean, default: false },
  eventType: {
    type: String,
    enum: Object.values(EventType),
  },
  newsLetterSubscription: { type: Boolean, default: true },
  // newsLetterSubscription: {
  //   type: Schema.Types.ObjectId,
  //   ref: "NewsLetter",
  // },
});

const Enquiry: Model<IEnquiry> =
  mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", enquirySchema);

export default Enquiry;
