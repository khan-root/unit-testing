import {test} from 'node:test'
import assert  from 'node:assert'
import { greet } from "../app.js"

test("greet return the correct greeting", ()=>{

    // AAA

    /**
     * Arrange
     * Act
     * Assert
    */


    const expected = "Hello, World"
    const actual = greet("World")

    assert.strictEqual(actual, expected)

})