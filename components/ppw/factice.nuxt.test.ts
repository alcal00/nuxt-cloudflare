import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Factice from './factice.vue'

describe('Factice', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(Factice)
        expect(wrapper.vm).toBeTruthy()
    })
})
