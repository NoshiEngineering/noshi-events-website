import { EventType } from "@/models/enquiry";
import NewsLetter from "@/models/newsLetter"; // Import the NewsLetter model
import { INewsLetterCreation } from "./interface";
import dbConnection from "@/dbConfig/dbConfig";

export const newsLetterCreation = async ({
  email,
  newsLetterSubscription,
}: INewsLetterCreation) => {
  try {
    await dbConnection();
    const newsLetter = await NewsLetter.findOne({ email });
    if (newsLetter && newsLetterSubscription) {
      newsLetter.subscribed = true;
      await newsLetter.save();
    } else {
      await NewsLetter.create({
        email,
        subscribed: newsLetterSubscription,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const mapEventType = (type: string): EventType | string => {
  const normalizedType = type.replace(/event$/i, "").trim();
  return Object.values(EventType).includes(normalizedType as EventType)
    ? (normalizedType as EventType)
    : "";
};
