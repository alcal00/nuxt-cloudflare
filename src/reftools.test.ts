import { describe, test, expect } from 'vitest'
import { _PP_PATH_PREFIX, expandPath } from "./reftools"

describe('reftools tests', () => {


    test('example touched', async () => {
        const backend = 'https://dev.paxpar.tech'
        const src = "🌐pp/api/bucket/public/usage/check_result/paf_1201d"
        const dst = "https://dev.paxpar.tech/api/bucket/public/usage/check_result/paf_1201d"
      
        expect(expandPath(src, backend)).toEqual(dst)
    })


    test('example untouched', async () => {
        const backend = 'https://dev.paxpar.tech'
        const src = "http://my.com/api/bucket/public/usage/check_result/paf_1201d"
      
        expect(expandPath(src, backend)).toEqual(src)
    })


})