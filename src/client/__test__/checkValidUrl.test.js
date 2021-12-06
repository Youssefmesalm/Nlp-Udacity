import { checklink } from "../js/checkLink";

describe("Test checkValidUrl functionality", () => {
  test("Check if checkValidUrl function is defined", () => {
    expect(checklink()).toBeDefined();
  });

  test("Check if a valid http url returns true", () => {
    expect(checklink("https://www.google.com/")).toBeTruthy();
  });

  test("Check if a invalid http url returns false", () => {
    expect(checklink("www.google.com/")).toBeFalsy();
  });
});
