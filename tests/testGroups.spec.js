import {test} from "playwright/test";

test.describe("Test Group1", () => {

    test.beforeAll(async() => {
        console.log("Before All executed");
    });

    test.beforeEach(async ({page}) => {
        console.log("Before Each executed");
    });

    test.afterEach(async ({page}) => {
        console.log("After Each executed");
    });

    test.afterAll(async() => {
        console.log("After All executed");
    });

    test("Test Case 1", async ({page}) => {
        console.log("Test Case 1 is expected");  
    });

    test("Test Case 2", async ({page}) => {
        console.log("Test Case 2 is expected");  
    });

     test("Test Case 3", async ({page}) => {
        console.log("Test Case 3 is expected");   
 });
});