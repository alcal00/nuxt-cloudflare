import { describe, test, expect } from 'vitest'
import { PROVIDERS, ACCOUNTS } from "./signtools"

describe('signtools tests', () => {


    test('PROVIDERS', async () => {
        expect(PROVIDERS.length).toBeGreaterThan(0)
    })

    test('ACCOUNTS', async () => {
        expect(ACCOUNTS.length).toBeGreaterThan(0)
    })

})