// @flow
// $FlowFixMe[cannot-resolve-module]
import { Model } from "../helpers/modelHelpers";
import type { ModelType } from "../helpers/modelHelpers";
import type { InterviewTrainingType } from "./interviewTypes";

export const TrainingTagEnum = {
  InterviewInfo: "InterviewInfo",
  CompanyInfo: "CompanyInfo",
  JobInfo: "JobInfo",
  ProfileInfo: "ProfileInfo",
};

export class InterviewModel extends Model {
  constructor(userUID) {
    const userInstance: InterviewTrainingType = {
      uid: "",
      userUID: "",
      trainingProgress: {
        trainingTag: TrainingTagEnum.InterviewInfo,
        lastQuestionNumber: "1.1",
      },
    };
    super(userInstance);
  }
}

export const NewInterviewFactory = (userUID: string): ModelType => {
  return new InterviewModel(userUID);
};
