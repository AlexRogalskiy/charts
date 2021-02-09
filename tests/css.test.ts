import { describe, expect, test } from '@jest/globals'
import { css } from '../utils/getCss'

describe('Testing CSS style', () => {
  test('Style CSS SVG', () => {
    expect(css({backgroundColor: '#ecf0f1', fontColor: '#e64a19'})).toBeTruthy()
  })
})
