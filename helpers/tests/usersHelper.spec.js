import { userExistsInStore } from "../usersHelper";

const label = "Util functions: user helper => ";

describe(label + " userExistsInStore", () => {
  it("should return false when the state is undefined or don't contain the keys 'user'", () => {
    expect(userExistsInStore()).toEqual(false);
    expect(userExistsInStore({})).toEqual(false);
    expect(userExistsInStore({ user: {} })).toEqual(false);
    expect(userExistsInStore({ user: {} })).toEqual(false);
  });

  it("should return false when the user in state don't contain the value of key 'uid' or if it's empty (spaces included)", () => {
    expect(userExistsInStore({ user: {} })).toEqual(false);
    expect(userExistsInStore({ user: { uid: "  " } })).toEqual(false);
  });

  it("should return true when the user in state contain non empty value for the key 'uid'", () => {
    expect(userExistsInStore({ user: { uid: "1ds53dfs35df4q" } })).toEqual(
      true
    );
    expect(userExistsInStore({ user: { uid: "X" } })).toEqual(true);
  });
});
