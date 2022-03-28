import React from "react";
import { render } from "@testing-library/react";
import { GetJumpScared } from "./Jumpscares";

describe("JumpScares Tests", () => {
    beforeEach(() => {
        render(<GetJumpScared id={""} />);
    });
    test("The Jumpscare renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
    });
});
