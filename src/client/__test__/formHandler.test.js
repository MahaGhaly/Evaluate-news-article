import "babel-polyfill";
import { handleSubmit } from '../js/formHandler.js'

describe("Testing handleSubmit functionality", () => {
    test("Testing the handleSubmit()", () => {
        expect(handleSubmit).toBeDefined();
})
});