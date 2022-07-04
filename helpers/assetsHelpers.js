export const getSolutionGifUrlFromFirebaseDevStorage = (assetName) =>
  `https://firebasestorage.googleapis.com/v0/b/mavoie-development.appspot.com/o/public%2Fsolutions%2Fgifs%2F${assetName}?alt=media`;

export const getSolutionLogoUrlFromFirebaseDevStorage = (assetName) =>
  `https://firebasestorage.googleapis.com/v0/b/mavoie-development.appspot.com/o/public%2Fsolutions%2Flogos%2F${assetName}?alt=media`;

export const getSolutionTeamPicturesUrlFromFirebaseDevStorage = (assetName) =>
  `https://firebasestorage.googleapis.com/v0/b/mavoie-development.appspot.com/o/public%2Fteam%2F${assetName}?alt=media`;

export const getMissionPicturesUrlFromFirebaseDevStorage = (assetName) =>
  `https://firebasestorage.googleapis.com/v0/b/mavoie-development.appspot.com/o/public%2Fmission%2F${assetName}?alt=media`;
