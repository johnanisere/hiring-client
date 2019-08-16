import mail, { initialState } from "../mail.reducer";

describe("INITIAL STATE", () => {
  test("is correct", () => {
    const action = { type: "dummy action" };

    expect(mail(initialState, action)).toEqual(initialState);
  });
});

describe("DEVS_MAILINVITE", () => {
  test("returns the correct state", () => {
    const action = { type: "DEVS_MAILINVITE", payload: { dummy: "user data" } };
    const expectedState = {
      ...initialState,
      data: {
        dummy: "user data"
      }
    };
    expect(mail(initialState, action)).toEqual(expectedState);
  });
});

describe("LOADING", () => {
  test("returns the correct state", () => {
    const action = { type: "LOADING", payload: true };
    const expectedState = {
      ...initialState,
      loading: true
    };
    expect(mail(initialState, action)).toEqual(expectedState);
  });
});

describe("MAIL_INVITE_ERROR", () => {
  test("returns the correct state", () => {
    const action = { type: "MAIL_INVITE_ERROR", payload: "error message" };
    const expectedState = {
      ...initialState,
      error: "error message"
    };
    expect(mail(initialState, action)).toEqual(expectedState);
  });
});
