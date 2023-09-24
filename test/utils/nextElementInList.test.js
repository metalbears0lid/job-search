import { describe, it, expect } from 'vitest'
import nextElementInList from '@/utils/nextElementInList'

describe('nextElementInList', () => {
  it('locates elt in list and returns next elt in list', () => {
    const list = ['a', 'b', 'c', 'd', 'e']
    const value = 'c'
    const result = nextElementInList(list, value)
    expect(result).toBe('d')
  })
})

describe('when elt at end of list', () => {
  it('locates next elt at start of list', () => {
    const list = ['a', 'b', 'c', 'd', 'e']
    const value = 'e'
    const result = nextElementInList(list, value)
    expect(result).toBe('a')
  })
})
