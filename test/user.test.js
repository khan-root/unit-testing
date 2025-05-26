import {describe, test} from 'node:test'
import { fetchData } from '../app.js'

describe('User Fetched',()=>{
    test('fetches data from server', (t)=>{
        const data = fetchData(1)
        t.assert.snapshot(data)

    })
})