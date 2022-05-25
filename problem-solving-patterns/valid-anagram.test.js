import { expect } from "expect";
import { it } from "jest-circus";
import { describe } from "yargs";
import { validAnagram } from "./valid-anagram";

test("validAnagram", () => {
  it("should return true when both strings are empty", () => {
    expect(validAnagram("", "")).toBeTruthy();
  });
});
