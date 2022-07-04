import { withQueries } from "./apiHelpers";
import sha1 from "sha1";

export const buildPartnerUrl = (
  uri,
  maVoieId = "",
  email = "",
  lastName = "",
  name = ""
) =>
  withQueries({
    maVoieId,
    email,
    lastName,
    name,
  })(uri);

/* Generate the User Partner Id */
export const generateMaVoieId = (maVoieUserId, partnerId) =>
  sha1(maVoieUserId + partnerId);
