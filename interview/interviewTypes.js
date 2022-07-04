// @flow

// ** Interview Info (company name, job name, date ...) **

export type InterviewFormDataType = {|
  interviewFieldDate?: string,
  companyFieldName: string,
  jobFieldName: string,
|};

export type InterviewInfoType = {|
  interviewFormData: InterviewFormDataType,
|};

// ** Company Info from form and from external data sources (boostrs, ...)

export type CompanyActivityType = {|
  id: string,
  name: string,
|};

export type CompanyFormDataType = {|
  activites: Array<CompanyActivityType>,
|};

export type CompanyInfoType = {|
  companyFormData: CompanyFormDataType,
  infoPoleEmploie?: any,
  infoWebScrapping?: any,
|};

// ** Job Info from form and from external data sources (boostrs, ...)

export type JobFormDataType = {||};

export type JobInfoType = {|
  jobFormData: JobFormDataType,
  infoBoostrs?: any,
|};

export type DiagnosticSkillRecordType = {|
  score: number,
  skill: any, // Has a relation with the skill that we'll have in boostrs
|};

// ** Profile Info from form and from external data sources (boostrs, ...)

export type ProfileFormDataType = {|
  skillsDiagnostic?: Array<DiagnosticSkillRecordType>,
|};

export type PorfileInfoType = {|
  profileFormData: ProfileFormDataType,
|};

// ****** Info Interview Types ******** //

export type TrainingTagType =
  | "InterviewInfo"
  | "CompanyInfo"
  | "JobInfo"
  | "ProfileInfo";

export type TrainingProgressType = {|
  trainingTag: TrainingTagType,
  lastQuestionNumber: string, // 1.1 or 1.2 or ....
|};

export type InterviewTrainingType = {|
  uid: string,
  userUID: string,
  trainingProgress: TrainingProgressType,
  interviewFormData?: InterviewFormDataType,
  email?: string,
  companyInfo?: CompanyInfoType,
  jobInfo?: JobInfoType,
  profileInfo?: PorfileInfoType,
|};
