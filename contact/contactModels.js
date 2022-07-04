//flow
import { Model } from "../helpers/modelHelpers";
import type { ModelType } from "../helpers/modelHelpers";
import type { ContactType } from "./contactTypes";

export class ContactModel extends Model {
  constructor() {
    const contactInstance: ContactType = {
      email: "",
      name: "",
      question: "",
      reason: "",
    };
    super(contactInstance);
  }
}

export const NewContactFactory = (): ModelType => {
  return new ContactModel();
};
