import DocumentDescriptionEnum from "./enums/DocumentDescriptionEnum";
import DocumentTitleDescriptionEnum from "./enums/DocumentTitleDescriptionEnum";

export const getDocumentDescriptionsFromPathname = (pathname) => {
  if (pathname?.includes("/accueil")) {
    return DocumentDescriptionEnum.HOMEPAGE;
  } else if (pathname?.includes("/equipe")) {
    return DocumentDescriptionEnum.TEAM;
  } else if (pathname?.includes("/mission")) {
    return DocumentDescriptionEnum.MISSION;
  }

  return null;
};

export const getDocumentTitleDescriptionsFromPathname = (pathname) => {
  if (pathname?.includes("/accueil")) {
    return DocumentTitleDescriptionEnum.HOMEPAGE;
  } else if (pathname?.includes("/equipe")) {
    return DocumentTitleDescriptionEnum.TEAM;
  } else if (pathname?.includes("/mission")) {
    return DocumentTitleDescriptionEnum.MISSION;
  }

  return null;
};
