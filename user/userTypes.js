// @flow
import type { ContactType } from "domain/contact/contactTypes";

// ****** Calendly Types ******** //

type TrackingType = {|
  salesforce_uuid?: string,
  utm_campaign?: string,
  utm_content?: string,
  utm_medium?: string,
  utm_source?: string,
  utm_term?: string,
|};

type CalendlyMetaDataType = {|
  // ** Link to cancelling the event for the invitee
  cancel_url: string,
  // ** The moment when the event was created (e.g. "2020-01-02T03:04:05.678123Z")
  created_at: string,
  // ** A reference to the event
  event: string,
  // ** The invitee’s name (in human-readable format)
  name: string,
  // **
  new_invitee?: string,
  // **
  old_invitee?: string,
  // **
  payment?: any,
  // **
  reschedule_url: string,
  // **
  rescheduled: boolean,
  // **
  status: string,
  // **
  text_reminder_number?: null,
  // **
  timezone?: string,
  // **
  updated_at: string,
  // **
  uri: string,
  // **
  tracking?: TrackingType,
|};

type CalendlyQuestionsAndAnswersRecordType = {|
  // ** The answer of the user in calendly form
  answer: string,
  // ** The position of the question the calendly form
  position: number,
  // ** The question in the calendly form
  question: string,
|};

type UserCalendlyDataType = {|
  calendlyQuestionsAndAnswers?: Array<CalendlyQuestionsAndAnswersRecordType>,
  calendlyMetaData?: CalendlyMetaDataType,
  // ** A boolean to verify if the user has submitted a calendly event
  hasCompletedCalendlySchedule?: boolean,
|};

// ****** Rating Types ******** //

type UserRatingType = {|
  note: number,
  comment: string,
|};

// ****** Questionnaire Types ******** //

type UserQuestionnaireType = {|
  questionnaire?: Array<any>,
  solutions?: Array<any>,
|};

// ****** Meta Data Type ******** //

type UserMetaDataType = {|
  createDate: string,
  updateDate?: string,
|};

// ****** User Type ******** //

export type UserType = {|
  ...UserMetaDataType,

  // ** the user id auto generated by anonym authentication
  uid: string,

  // ** The Email of the user
  email?: string,

  // ** The First Name of the user
  firstName?: string,

  // ** The Last Name of the user
  lastName?: string,

  // ** a boolean to check if the user has started the questionnaire
  startForm?: boolean,

  // ** The rating score that the user gives to MaVoie
  rating?: UserRatingType,

  // ** The user feedback submitted in the contact form
  formContact?: Array<ContactType>,

  interviewTrainingIds?: Array<string>,

  ...UserCalendlyDataType,
  ...UserQuestionnaireType,
|};
