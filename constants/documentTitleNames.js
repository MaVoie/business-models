import DocumentTitleEnum from "./enums/DocumentTitleEnum";

export const getDocumentTitleNameFromPathname = (pathname) => {
  if (pathname?.includes("/accueil")) {
    return DocumentTitleEnum.HOMEPAGE;
  } else if (pathname?.includes("/questionnaire/resume")) {
    return DocumentTitleEnum.RESUME;
  } else if (pathname?.includes("/questionnaire")) {
    return `${DocumentTitleEnum.FORM}${pathname.replace(
      "/questionnaire/",
      "-"
    )}`;
  } else if (pathname?.includes("/solutions")) {
    return DocumentTitleEnum.SOLUTIONS;
  } else if (pathname?.includes("/rdv-decouverte")) {
    return DocumentTitleEnum.DISCOVERY;
  } else if (pathname?.includes("/equipe")) {
    return DocumentTitleEnum.TEAM;
  } else if (pathname?.includes("/cgu")) {
    return DocumentTitleEnum.CGU;
  } else if (pathname?.includes("/mission")) {
    return DocumentTitleEnum.MISSION;
  } else if (pathname?.includes("/contacter-mavoie")) {
    return DocumentTitleEnum.CONTACT;
  } else if (pathname?.includes("/preparation-entretien")) {
    return DocumentTitleEnum.INTERVIEW;
  } else if (pathname?.includes("/entreprise")) {
    return DocumentTitleEnum.ENTREPRISE;
  } else if (pathname?.includes("/poste")) {
    return DocumentTitleEnum.POSTE;
  } else if (pathname?.includes("/profil")) {
    return DocumentTitleEnum.PROFIL;
  }

  return pathname;
};
