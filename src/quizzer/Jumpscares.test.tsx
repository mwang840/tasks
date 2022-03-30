import React from "react";
import { render } from "@testing-library/react";
import { GetJumpScared } from "./Jumpscares";

describe("JumpScares Tests", () => {
    test("The Jumpscare renders an each small attribute of a jumpscare", {});
    beforeEach(() => {
        render(<GetJumpScared id={"DSZ9 - eEn3Hc"} />);
    });
    test("The Jumpscare renders", () => {
        expect("https://www.youtube.com/embed/DSZ9 - eEn3Hc");
    });
});
