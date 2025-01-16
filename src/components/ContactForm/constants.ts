import { IEventOptions, IFormValues } from "./interface";

export const defaultFormValues: IFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  reachOutOnWhatsApp: true,
  newsLetterSubscription: true,
  eventType: "",
};

export const eventSelectionOptions: IEventOptions[] = [
  {
    label: "Corporate Event (Offsite, Anniversary, Conferences etc)",
    value: "Corporate Event",
  },
  {
    label: "Personal Event (Wedding, Anniversary etc)",
    value: "Personal Event",
  },
  {
    label: "Sport Event (Logistics, Stays, Hosting,  Awareness)",
    value: "Sport Event",
  },
  {
    label: "Promotional Event (Activations,  Music Events etc)",
    value: "Promotional Event",
  },
  {
    label: "Other",
    value: "Other",
  },
];
