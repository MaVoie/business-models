import { UserAnonymFactory } from "../userModels";

describe("user spec", () => {
  it("should get an anonym user", () => {
    const anonymUser1 = UserAnonymFactory();

    console.log("Date", anonymUser1.getValue("createDate"));

    expect(anonymUser1.value()).toBeDefined();
    expect(anonymUser1.getValue("createDate")).toBeDefined();
  });
});
