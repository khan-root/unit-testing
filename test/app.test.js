import {suite, test} from 'node:test'
import assert  from 'node:assert'
import { greet, sumNumber } from "../app.js"


suite('Greeting and sum functions',()=>{

    
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

    test("return sum of two numbers", ()=>{
        const expected = 6
        const actual = sumNumber(4,2)
        assert.strictEqual(actual, expected)
    })

})