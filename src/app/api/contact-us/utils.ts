import NewsLetter from "@/models/newsLetter"; // Import the NewsLetter model

export const newsLetterCreation = async (
  email: string,
  newsLetterSubscription: boolean
) => {
  try {
    let newsLetter = await NewsLetter.findOne({ email });

    if (!newsLetter) {
      newsLetter = await NewsLetter.create({
        email,
        subscribed: newsLetterSubscription,
      });
    } else {
      newsLetter.subscribed = newsLetterSubscription;
      await newsLetter.save();
    }
  } catch (error) {
    console.error("Error in newsletter creation:", error);
    throw new Error("Error in newsletter creation");
  }
};
