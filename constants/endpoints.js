import env from "../../.env.json";

// ? Only when working on serve mode
// ? replace env.url_api_fb by http://localhost:5001/mavoie-development/europe-west1

const endpoints = {
  CONF_FIREBASE: () => env.url_api_fb + "/confs/firebase",
  CONF_ALGOLIA: () => env.url_api_fb + "/confs/algolia",
  GET_CALENDLY_INFO: (url) =>
    `${env.url_api_fb}/triggers/get-calendly-info?uri=${url}`,
  CHECK_USER_BY_PARAM: (key, value) =>
    `${env.url_api_fb}/services/check-user-by-param?key=${key}&value=${value}`,
  UPDATE_USER: (userId) =>
    `${env.url_api_fb}/services/update-user?userId=${userId}`,
  SUBSCRIBE_SENDINBLUE: (
    email,
    prenom,
    date_inscription,
    date_derniere_viste,
    rdv_decouverte
  ) =>
    `${env.url_api_fb}/triggers/subscribe-to-sending-blue?email=${email}&prenom=${prenom}&date_inscription=${date_inscription}&date_derniere_viste=${date_derniere_viste}&rdv_decouverte=${rdv_decouverte}`,
};

export default endpoints;
