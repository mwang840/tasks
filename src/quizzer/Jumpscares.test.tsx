import React from "react";
import { render } from "@testing-library/react";
import { GetJumpScared } from "./Jumpscares";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

describe("JumpScares Tests", () => {
    test("The Jumpscare renders an each small attribute of a jumpscare");
    beforeEach(() => {
        render(<GetJumpScared id={"DSZ9 - eEn3Hc"} />);
    });
    test("The Jumpscare renders", () => {
        expect("https://www.youtube.com/embed/DSZ9 - eEn3Hc");
    });
});
