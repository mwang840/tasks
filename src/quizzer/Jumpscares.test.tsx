import React from "react";
import { render } from "@testing-library/react";
import { GetJumpScared } from "./Jumpscares";

describe("JumpScares Tests", () => {
    beforeEach(() => {
        render(<GetJumpScared id={""} />);
    });
    test("The Jumpscare renders", () => {
        expect(GetJumpScared({"DSZ9 - eEn3Hc"})).toBe(6);
    });
});
