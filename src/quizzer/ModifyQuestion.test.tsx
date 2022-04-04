import { EditMode } from "./ModifyQuestion";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

test("Testing Edit Question", () => {
    expect(ModifyQuestion()).toEqual(1);
});
