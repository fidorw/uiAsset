import {expect} from 'chai'
import getAssetUri from '../src/getAssetUri'

describe('uiAssetUri, ' + new Date(), () => {
	it('get default uri of a0 because asset0 is not set', () => {
		expect(getAssetUri({key:'a0', isDev:true})).to.deep.equal('/a0')
	})
	it('get undefined asset uri not in dev mode because asset0 is not configured', () => {
		expect(getAssetUri({key:'a0'})).to.deep.equal(undefined)
	})
	it('get uri of asset1', () => {
		expect(getAssetUri({A:{'a1':{uri:'/path/asset1'}},key:'a1',isDev:true})).to.deep.equal('/path/asset1')
	})
	it('get empty getAssetUri', () => {
		expect(getAssetUri({key:'ae', isDev:true, optional:true})).to.deep.equal('')
	})
	it('get uri of asset2', () => {
		expect(getAssetUri({A:{'a2':{uri:'/path/asset2'}},key:['a2','1'],isDev:true, optional:true})).to.deep.equal('/path/asset2')
	})
})
