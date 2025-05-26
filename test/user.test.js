import {describe, test} from 'node:test'
import { fetchData } from '../app.js'


// node --test --test-update-snapshots

describe('User Fetched',()=>{
    test('fetches data from server', (t)=>{
        const data = fetchData(1)
        t.assert.snapshot(data)

    })
})