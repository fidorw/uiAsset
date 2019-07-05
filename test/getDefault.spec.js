import {expect} from 'chai'
import getDefault from '../src/getDefault'

describe('getDefault, ' + new Date(), () => {
	it('should return uri:/a', () => {
		expect(getDefault(undefined,'a')).to.deep.equal({uri:'/a',dynamic:false,optional:false})
	})
	it('should return uri:/a/b', () => {
		expect(getDefault(undefined,'a','/a/b')).to.deep.equal({uri:'/a/b',dynamic:false,optional:false})
	})
	it('should return uri:/a/b', () => {
		expect(getDefault(undefined,'a','a/b')).to.deep.equal({uri:'/a/b',dynamic:false,optional:false})
	})
	it('should return uri:/a/b', () => {
		expect(getDefault('','a','a/b')).to.deep.equal({uri:'/a/b',dynamic:false,optional:false})
	})
	it('should return uri:/a/b', () => {
		expect(getDefault('/a','b')).to.deep.equal({uri:'/a/b',dynamic:false,optional:false})
	})
	it('should return uri:/a/c', () => {
		expect(getDefault('/a','b','/c')).to.deep.equal({uri:'/a/c',dynamic:false,optional:false})
	})
	it('should return undefined', () => {
		expect(getDefault(undefined,{a:'b'})).to.deep.equal({uri:undefined,dynamic:false,optional:false})
	})
	it('should return undefined', () => {
		expect(getDefault(34,{a:'b'})).to.deep.equal({uri:undefined,dynamic:false,optional:false})
	})
	it('(htdocs,key,def,isDev)', () => {
		expect(getDefault('/a','b',{uri: '/c/d',dynamic:false,optional:false})).to.deep.equal({
			uri: '/c/d',
			dynamic: false,
			optional: false
		})
	})
	it('dynamic = true, optional = true', () => {
		expect(getDefault('/a',['dynamickey','_postfix'], null, true)).to.deep.equal({
			uri: '/a/dynamickey_postfix',
			dynamic: true,
			optional: true
		})
	})
	it('dynamic = true, optional = true one element in array', () => {
		expect(getDefault('/a',['dynamickey'], null, true)).to.deep.equal({
			uri: '/a/dynamickey',
			dynamic: true,
			optional: true
		})
	})
	it('on wrong key get only /path', () => {
		expect(getDefault('/path',[44], '', true)).to.deep.equal({
			uri: '/path',
			dynamic: true,
			optional: true
		})
	})
})
