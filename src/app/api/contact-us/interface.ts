export interface INewsLetterCreation {
  email: string;
  newsLetterSubscription: boolean;
}

export enum NewsLetterCreationType {
  CreateOrUpdate = "createOrUpdate",
  Create = "create",
  Update = "update",
}
