import React from "react";
import ReactDOMServer from "react-dom/server";
import { v4 as uuidv4 } from "uuid";
import Interweave from "interweave";

export function EmailTemplateHTMLPage({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Email Template</title>
      </head>
      <body style={{ width: "880px" }}>{children}</body>
    </html>
  );
}

export function HeaderTemplateEmail() {
  return (
    <div>
      <img
        loading="lazy"
        style={{
          maxWidth: "880px",
          width: "100%",
        }}
        alt="background header"
        src="https://drive.google.com/uc?export=view&id=1r92iVEvT_XsBDZHzugSZm9pZFxMjVGIq"
      />
    </div>
  );
}

export function FooterTemplateEmail() {
  return (
    <div style={{ height: "400px" }}>
      <div
        style={{
          maxWidth: "880px",
          width: "100%",
          height: "400px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://drive.google.com/uc?export=view&id=1_rCSIcOFSAyBpjQgMeEBy1geFgynWUJ4)",
          zIndex: "1",
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              display: "inline-block",
              height: "100px",
              width: "70%",
              marginLeft: "15%",
              marginTop: "21%",
            }}
          >
            {/* first row */}
            <div
              style={{
                display: "inline-block",
                width: "52%",
                textAlign: "center",
                borderRightColor: "white",
                borderRightStyle: "solid",
                marginRight: "2%",
              }}
            >
              {/* First Col in row 1 */}
              <div
                style={{
                  display: "inline-block",
                  color: "white",
                  fontSize: "16px",
                }}
              >
                Nos orientateurs peuvent t’aider !
              </div>
              <div style={{ cursor: "pointer", width: "100%" }}>
                <a href={"https://calendly.com/mavoie/30min"}>
                  <button
                    style={{
                      width: "75%",
                      fontSize: "20px",
                      padding: "8px",
                      backgroundColor: "#00827F",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "25px",
                      marginTop: "20px",
                    }}
                    type="button"
                  >
                    Prendrez rendez-vous
                  </button>
                </a>
              </div>
            </div>
            <div
              style={{
                display: "inline-block",
                width: "45%",
                color: "white",
                fontSize: "18px",
              }}
            >
              {/* Second Col in row 1 */}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  color: "white",
                  marginBottom: "8px",
                  cursor: "pointer",
                }}
              >
                <img
                  loading="lazy"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "6px",
                  }}
                  alt="contact"
                  src={
                    "https://drive.google.com/uc?export=view&id=1sXqXcK6u0J7lgHfWTZtG7CQjhvWg06Sz"
                  }
                />
                <span style={{}}>contact@mavoie.org</span>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  color: "white",
                  marginBottom: "8px",
                  cursor: "pointer",
                }}
              >
                <img
                  loading="lazy"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "-6px",
                    marginRight: "6px",
                  }}
                  alt="official-website"
                  src={
                    "https://drive.google.com/uc?export=view&id=1ET1GpIFMHYQ0Vt-8PgMJOGXPqw8BM0Xd"
                  }
                />
                <span style={{}}>www.mavoie.org</span>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "100%",
              height: "28px",
            }}
          />
        </div>
        <div
          style={{
            display: "inline-block",
            width: "100%",
            height: "40px",
            textAlign: "center",
          }}
        >
          {/* Second row */}
          <img
            loading="lazy"
            style={{ cursor: "pointer", marginRight: "6px" }}
            alt="youtube"
            src={
              "https://drive.google.com/uc?export=view&id=1wqAGhIbe4FfIBPhvCj3r7NzHQxlx1VgM"
            }
          />
          <a href={"https://www.instagram.com/mavoieorg/"}>
            <img
              loading="lazy"
              style={{ cursor: "pointer", marginRight: "6px" }}
              alt="instagram"
              src={
                "https://drive.google.com/uc?export=view&id=1DEVDfYq0lpOpw7VvIQl8Jhr9Ny5UJrVo"
              }
            />
          </a>
          <a href={"https://www.linkedin.com/company/mavoie-org/"}>
            <img
              loading="lazy"
              style={{ cursor: "pointer", marginRight: "6px" }}
              alt="linkedIn"
              src={
                "https://drive.google.com/uc?export=view&id=1j3rowdfFLX4RWKkpTPgsYfuBUA4qfYEb"
              }
            />
          </a>
          <a href={"https://www.facebook.com/mavoie.org/"}>
            <img
              loading="lazy"
              style={{ cursor: "pointer", marginRight: "6px" }}
              alt="facebook"
              src={
                "https://drive.google.com/uc?export=view&id=17HMq31nzKKdxggbQuVd1pVcnKTm_Z4Tl"
              }
            />
          </a>
          <a href={"https://twitter.com/mavoie_org"}>
            <img
              loading="lazy"
              style={{ cursor: "pointer", marginRight: "6px" }}
              alt="twitter"
              src={
                "https://drive.google.com/uc?export=view&id=1KTv3v4d7lP6U2OZgDCk3ERXkMXd0YSEe"
              }
            />
          </a>
        </div>
        <div
          style={{
            display: "inline-block",
            width: "100%",
            height: "40px",
          }}
        />
      </div>
    </div>
  );
}

export function SolutionContentEmail({
  name,
  solutionsTextsForEmailTemplate,
  suggestionsTextsForEmailTemplate,
}) {
  const hr = (
    <hr
      style={{
        height: "1px",
        borderWidth: "0",
        color: "#ced4da",
        backgroundColor: "#ced4da",
      }}
    />
  );
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "0px 36px",
        margin: "0 auto",
        fontSize: "14px",
        textAlign: "center",
      }}
    >
      <p style={{ fontWeight: "bold" }}>Bonjour {name},</p>
      <p style={{ fontWeight: "bold" }}>
        Merci d'avoir répondu à toutes nos questions.{" "}
      </p>
      <p style={{ fontWeight: "bold" }}>
        Comme promis, tu trouveras ci-dessous un résumé des solutions que MaVoie
        te propose pour avancer dans ta recherche d'emploi.
      </p>
      <p style={{ fontWeight: "bold" }}>
        Maintenant c'est à toi, Bonne découverte !<br />
        🚀
      </p>
      {hr}
      <p style={{ fontWeight: "bold", color: "#ea6625" }}>
        Voici les parcours qui te permettront d'augmenter tes chances
        d'employabilité
        <br />
        👇
      </p>
      {hr}
      <p>
        {solutionsTextsForEmailTemplate.map((solutionDetail) => {
          return (
            <React.Fragment key={uuidv4()}>
              <a href={solutionDetail.link} style={{ textDecoration: "none" }}>
                <img
                  loading="lazy"
                  style={{
                    maxWidth: "200px",
                    maxHeight: "60px",
                  }}
                  alt="formation logo"
                  src={solutionDetail.logo}
                />
              </a>
              <br />
              <span style={{ fontWeight: "bold", color: "black" }}>
                <a
                  href={solutionDetail.link}
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  {solutionDetail.title}
                </a>
              </span>
              <br />
              <span>
                <b style={{ fontWeight: "bold", color: "#ea6625" }}>
                  C'est quoi ?
                </b>
                {getDescriptionWithoutQuestion(
                  "C'est quoi ?",
                  `${solutionDetail.description?.[0]}`
                )}
              </span>
              <br />
              <span>
                <b style={{ fontWeight: "bold", color: "#ea6625" }}>
                  Et après ?
                </b>
                {getDescriptionWithoutQuestion(
                  "Et après ?",
                  ` ${solutionDetail.description?.[1]}`
                )}
              </span>
              <br />
              <br />
            </React.Fragment>
          );
        })}
      </p>
      <p style={{ fontWeight: "bold" }}>
        Tu souhaites découvrir chacune de ces solutions en détails ? <br />
        <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
          Rendez-vous pour un webinaire !{" "}
        </span>
      </p>

      <p>
        <a
          href={
            "https://app.livestorm.co/association-mavoie/mavoie-des-solutions-concretes-de-retour-a-lemploi?type=detailed"
          }
          style={{ textDecoration: "none" }}
        >
          <span
            style={{
              display: "block",
              backgroundColor: "#ea6625",
              borderRadius: "10px",
              padding: "5px 5px",
              color: "white",
              width: "60%",
              fontWeight: "bold",
              margin: "0 auto",
            }}
          >
            Je participe à un webinaire gratuitement
          </span>
        </a>
      </p>
      <br />
      {hr}
      <br />
      <p style={{ fontWeight: "bold" }}>
        Quelques suggestions en plus pour la route 😉
      </p>
      <br />
      <table>
        {suggestionsTextsForEmailTemplate.map((solutionDetail, index) => {
          if ((index + 1) % 3 === 0) {
            return (
              <>
                <td valign="top" style={{ padding: "3px 5px", width: "31%" }}>
                  <div style={{ display: "inline" }}>
                    <React.Fragment key={uuidv4()}>
                      <a
                        href={solutionDetail.link}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          loading="lazy"
                          style={{
                            maxWidth: "150px",
                            maxHeight: "60px",
                          }}
                          alt="formation logo"
                          src={solutionDetail.logo}
                        />
                      </a>
                      <br />
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        {solutionDetail.title}
                      </span>
                      <br />
                      <span>{` ${solutionDetail.intro}`}</span>
                      <br />
                      <br />
                      <p>
                        <a
                          href={solutionDetail.link}
                          style={{ textDecoration: "none" }}
                        >
                          <span
                            style={{
                              display: "block",
                              backgroundColor: "#ea6625",
                              borderRadius: "10px",
                              padding: "5px 5px",
                              color: "white",
                              width: "100px",
                              fontWeight: "bold",
                              margin: "0 auto",
                            }}
                          >
                            Découvrir
                          </span>
                        </a>
                      </p>
                    </React.Fragment>
                  </div>
                </td>
                <tr>
                  <td>&nbsp;</td>
                </tr>
              </>
            );
          } else {
            return (
              <td valign="top" style={{ padding: "3px 5px", width: "31%" }}>
                <div style={{ display: "inline", width: "33%" }}>
                  <React.Fragment key={uuidv4()}>
                    <a
                      href={solutionDetail.link}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        loading="lazy"
                        style={{
                          maxWidth: "150px",
                          maxHeight: "60px",
                        }}
                        alt="formation logo"
                        src={solutionDetail.logo}
                      />
                    </a>
                    <br />
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      {solutionDetail.title}
                    </span>
                    <br />
                    <span>{` ${solutionDetail.intro}`}</span>
                    <br />
                    <br />
                    <div
                      style={{
                        position: "relative",
                        bottom: "2px",
                      }}
                    >
                      <a
                        href={solutionDetail.link}
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          style={{
                            display: "block",
                            backgroundColor: "#ea6625",
                            borderRadius: "10px",
                            padding: "5px 5px",
                            color: "white",
                            width: "100px",
                            fontWeight: "bold",
                            margin: "0 auto",
                          }}
                        >
                          Découvrir
                        </span>
                      </a>
                    </div>
                  </React.Fragment>
                </div>
              </td>
            );
          }
        })}
      </table>
      <p>
        Nous choisissons toutes nos solutions avec soin parce que ton temps nous
        tient sincèrement à coeur, donc n'hésite pas à nous faire tes remarques
        (en répondans à cet email) une fois que tu les auras testées: l'idée est
        de s'améliorer aussi grâce à ton avis.
      </p>

      <p>A très vite {name} 😊,</p>
      <br />
      <p>Celeste</p>
    </div>
  );
}

export function SolutionAndResponsesContentEmail({
  responsesTextsForEmailTemplate,
  solutionsTextsForEmailTemplate,
}) {
  return (
    <div
      style={{
        padding: "32px",
        margin: "2px",
        fontSize: "14px",
      }}
    >
      <p>Bonjour Orientateur,</p>
      <br />
      <p>Résumé de réponses :</p>
      <br />
      <p>
        {responsesTextsForEmailTemplate.map((response) => (
          <p key={uuidv4()}>
            <Interweave content={`• ${response}`} />
          </p>
        ))}
      </p>
      <br />
      <p>Solutions :</p>
      <br />
      {solutionsTextsForEmailTemplate.map((solutionDetail) => (
        <React.Fragment key={uuidv4()}>
          <p>
            <span>
              👉 <a href={solutionDetail.link}>{solutionDetail.title}</a>:
            </span>
            <span>{` ${solutionDetail.description}`}</span>
          </p>
          <br />
        </React.Fragment>
      ))}
      <p>Belle journée 😊,</p>
      <br />
      <p>Support</p>
    </div>
  );
}

export function AutomaticResponseContactContentEmail({ name }) {
  return (
    <>
      <p>Bonjour {name},</p>
      <br />
      <p>
        Merci d'avoir contacté MaVoie. Ta demande a été livrée au bon endroit.
        Nous allons y répondre au plus vite.
      </p>
      <br />
      <p>Belle journée 😊,</p>
      <br />
      <p>Équipe MaVoie</p>
    </>
  );
}

export function FeedbackMailViaPageContact({ name, email, reason, question }) {
  return (
    <>
      <ul>
        <li>Prénom : {name}</li>
        <li>Email : {email}</li>
        <li>Raison : {reason}</li>
        <li>Message : {question}</li>
      </ul>
    </>
  );
}

export const generateHtmlWAutomaticResponseContactDoc = (name) => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <EmailTemplateHTMLPage>
      <AutomaticResponseContactContentEmail name={name} />
    </EmailTemplateHTMLPage>
  );
  return "<!DOCTYPE html>" + html;
};

export const generateHtmlWSolutionEmailDoc = (
  name,
  solutionsTextsForEmailTemplate,
  suggestionsTextsForEmailTemplate
) => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <EmailTemplateHTMLPage>
      <HeaderTemplateEmail />
      <SolutionContentEmail
        name={name}
        solutionsTextsForEmailTemplate={solutionsTextsForEmailTemplate}
        suggestionsTextsForEmailTemplate={suggestionsTextsForEmailTemplate}
      />
      <FooterTemplateEmail />
    </EmailTemplateHTMLPage>
  );
  return "<!DOCTYPE html>" + html;
};

export const generateHtmlWSolutionAndResponsesEmailDoc = (
  solutionsTextsForEmailTemplate,
  responsesTextsForEmailTemplate
) => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <EmailTemplateHTMLPage>
      <SolutionAndResponsesContentEmail
        responsesTextsForEmailTemplate={responsesTextsForEmailTemplate}
        solutionsTextsForEmailTemplate={solutionsTextsForEmailTemplate}
      />
    </EmailTemplateHTMLPage>
  );
  return "<!DOCTYPE html>" + html;
};

export const generateHtmlWFeedbackMailDoc = (name, email, reason, question) => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <EmailTemplateHTMLPage>
      <FeedbackMailViaPageContact
        name={name}
        email={email}
        reason={reason}
        question={question}
      />
    </EmailTemplateHTMLPage>
  );
  return "<!DOCTYPE html>" + html;
};

export const getSubjectMailWithVariables = (subjectEnum, params) => {
  let subjectMail = subjectEnum;
  for (let i = 0; i < params.length; i++) {
    subjectMail = subjectMail.replace("<<" + i + ">>", params[i]);
  }

  return subjectMail;
};

export const getDescriptionWithoutQuestion = (question, description) => {
  let descriptionFinal = description;
  descriptionFinal = descriptionFinal.replace(question, "");
  return descriptionFinal;
};
