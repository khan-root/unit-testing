import {describe, mock, test} from 'node:test'
import { processOrder } from '../app.js';
import assert from 'node:assert';
describe('Order Feature', () => {
    test("that process the order correctly", ()=>{


       const mockedProcessPayment =   mock.fn((amount)=>{
            console.log('im mocked ...')
            return {id: '123', amount: amount}
        })

        const expected = {id:'123', amount: 100}

        // SPY
        assert.strictEqual(mockedProcessPayment.mock.callCount(), 0)
        const actual = processOrder({amount:100}, {processPayment: mockedProcessPayment})


        assert.deepStrictEqual(actual, expected)
        assert.strictEqual(mockedProcessPayment.mock.callCount(), 1)

        const call = mockedProcessPayment.mock.calls[0]
        assert.deepStrictEqual(call.arguments, [100])
    })
});
