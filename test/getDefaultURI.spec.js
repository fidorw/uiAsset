import {expect} from 'chai'
import getDefaultURI from '../src/getDefaultURI'

describe('getDefaultURI, ' + new Date(), () => {
	it('should return /a', () => {
		expect(getDefaultURI(undefined,'a')).to.equal('/a')
	})
	it('should return /a/b', () => {
		expect(getDefaultURI(undefined,'a','/a/b')).to.equal('/a/b')
	})
	it('should return /a/b', () => {
		expect(getDefaultURI(undefined,'a','a/b')).to.equal('/a/b')
	})
	it('should return /a/b', () => {
		expect(getDefaultURI('','a','a/b')).to.equal('/a/b')
	})
	it('should return /a/b', () => {
		expect(getDefaultURI('/a','b')).to.equal('/a/b')
	})
	it('should return /a/c', () => {
		expect(getDefaultURI('/a','b','/c')).to.equal('/a/c')
	})
	it('should return undefined', () => {
		expect(getDefaultURI(undefined,{a:'b'})).to.equal(undefined)
	})
	it('should return undefined', () => {
		expect(getDefaultURI(34,{a:'b'})).to.equal(undefined)
	})
	it('wrong key return only /path', () => {
		expect(getDefaultURI('/path',33)).to.equal('/path')
	})
})
