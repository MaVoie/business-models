const re = /<<q[0-9]{1,2}[a-z]{0,1}>>/g;

export function getSimpleJobNameForSearching(jobFullName) {
  const startSearchIndex = jobFullName.indexOf("/");
  const startIndex = jobFullName.indexOf(" ", startSearchIndex + 1);
  const endIndex = jobFullName.indexOf(" ", startIndex + 1);
  return startSearchIndex < 0 || startIndex < 0
    ? jobFullName
    : jobFullName.replace(
        jobFullName.substring(startSearchIndex, endIndex + 1),
        ""
      );
}

export function getVariablesValuesFromQuestionnaire(
  valueFromFormationData,
  questionAnswerMap,
  isSimpleAnswerNeeded
) {
  isSimpleAnswerNeeded = isSimpleAnswerNeeded ? isSimpleAnswerNeeded : false;
  let valueFinal = valueFromFormationData;
  if (questionAnswerMap && Object.values(questionAnswerMap)?.length > 0) {
    questionAnswerMap.map((variable) => {
      if (valueFinal) {
        valueFinal = valueFinal.replace(
          "<<" + variable.key + ">>",
          isSimpleAnswerNeeded
            ? getSimpleJobNameForSearching(variable.value)
            : variable.value
        );
      }
      return valueFinal;
    });
  }
  if (valueFinal) {
    valueFinal = valueFinal.replace(re, "");
  }
  return valueFinal;
}

export function getQuestionAnswers(questionWithAnswers) {
  let questionAnswerPair = [];
  if (questionWithAnswers !== undefined) {
    for (let i = 0; i < questionWithAnswers.length; i++) {
      let value = "";
      if (questionWithAnswers[i].type !== "multichoice") {
        value =
          questionWithAnswers[i].answers !== undefined &&
          questionWithAnswers[i].answers[0] !== undefined
            ? questionWithAnswers[i].answers[0].value
            : "";
      } else {
        const answerArray =
          questionWithAnswers[i].answers !== undefined
            ? questionWithAnswers[i].answers.filter(
                (answer) => answer.value && answer.value !== ""
              )
            : [];
        const answerValueArray = answerArray
          ? answerArray.map((answer) => answer.value)
          : [];
        value = answerValueArray ? answerValueArray.join(", ") : "";
      }
      const resumeFinal = questionWithAnswers?.[i]?.resume?.replace(re, value);

      questionAnswerPair[i] = {
        key: questionWithAnswers[i].qid,
        type: questionWithAnswers[i].type,
        value: value ? value : "",
        resume: resumeFinal,
      };
    }
  }
  return questionAnswerPair;
}

export function getQuestionByQid(questionnaire, qid) {
  if (questionnaire !== undefined) {
    return questionnaire.filter((question) => question.qid === qid);
  }
  return undefined;
}

export function getAnswerInstance(aid, value, path) {
  return { aid: aid, value: value, path: path };
}

export function getAnswerEmpty() {
  return { aid: "", value: "", path: "" };
}

export function getAnswerFromOption(option) {
  const aid = option && option.value ? option.value.id : "";
  const value = option && option.value ? option.value.text : "";
  const path = option ? option.path : "";
  return { aid: aid, value: value, path: path };
}

export function isAnswersEmpty(answers) {
  if (answers) {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] && (answers[i].id || answers[i].value)) return false;
    }
    return true;
  } else {
    return true;
  }
}

export function getFirstAnswer(answers) {
  if (answers && answers[0]) {
    return answers[0];
  } else {
    return getAnswerEmpty();
  }
}

export function getAnswersByQid(questionWithAnswers, qid) {
  let question = [];
  if (questionWithAnswers) {
    question = questionWithAnswers.filter((question) => question.qid === qid);
  }
  if (question && question.length > 0) {
    return question[0].answers;
  }
  return null;
}

export function getNewAnswersList(questionWithAnswers, answer) {
  let questionWithAnswersPre = Object.assign([], questionWithAnswers);
  let isUpdated = false;
  for (let i = 0; i < questionWithAnswersPre.length; i++) {
    if (questionWithAnswersPre[i].qid === answer.qid) {
      questionWithAnswersPre[i] = answer;
      isUpdated = true;
      break;
    }
  }
  if (!isUpdated) {
    questionWithAnswersPre.push(answer);
  }
  return questionWithAnswersPre;
}

export function isLinkAnswer(answer) {
  return answer.aid.indexOf("lk") >= 0;
}
