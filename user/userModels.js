// @flow
import { Model } from "../helpers/modelHelpers";
import type { ModelType } from "../helpers/modelHelpers";
import type { UserType } from "./userTypes";

// TODO(mehdi): complete filling the user field enum
export const UserFieldEnum = {
  uid: "uid",
  email: "email",
  startForm: "startForm",
};

class UserModel extends Model {
  constructor() {
    const userInstance: UserType = {
      createDate: new Date().toLocaleString("fr-Fr"),
      uid: "",
    };
    super(userInstance);
  }
}

export const UserAnonymFactory = (): ModelType => {
  return new UserModel();
};

// ** UserUpdateFactory doesn't contain info like uid and createDate
export const UserUpdateFactory = ({
  email,
  firstName,
  lastName,
  calendlyQuestionsAndAnswers,
  calendlyMetaData,
  hasCompletedCalendlySchedule,
  questionnaire,
  solutions,
}: any): any => {
  const user = {};
  if (questionnaire) user.questionnaire = questionnaire;
  if (solutions) user.solutions = solutions;
  if (email) user.email = email;
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (calendlyQuestionsAndAnswers)
    user.calendlyQuestionsAndAnswers = calendlyQuestionsAndAnswers;
  if (calendlyMetaData) user.calendlyMetaData = calendlyMetaData;
  if (hasCompletedCalendlySchedule)
    user.hasCompletedCalendlySchedule = hasCompletedCalendlySchedule;
  return user;
};
