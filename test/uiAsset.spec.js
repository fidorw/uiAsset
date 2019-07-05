import {expect} from 'chai'
import uiAsset, {uiAssetOptional,initEnvIsDev,initDefaults,initAutoupdateDefaults} from '../src/uiAsset'

describe('uiAsset, ' + new Date(), () => {
	it('get default uri of a0 because asset0 is not set', () => {
		initEnvIsDev(true)
		expect(uiAsset({},'a0')).to.deep.equal('/a0')
	})
	it('get undefined asset uri not in dev mode because asset0 is not configured', () => {
		initEnvIsDev(false)
		expect(uiAsset({},'a0')).to.deep.equal(undefined)
	})
	it('get uri of asset1', () => {
		initEnvIsDev(true)
		expect(uiAsset({'a1':{uri:'/path/asset1'}},'a1')).to.deep.equal('/path/asset1')
	})
	it('get empty uiAssetOptional', () => {
		initEnvIsDev(true)
		expect(uiAssetOptional({},'a0')).to.deep.equal('')
	})
	it('get uri of asset2', () => {
		initEnvIsDev(true)
		expect(uiAsset({'a2':{uri:'/path/asset2'}},['a2','1'],)).to.deep.equal('/path/asset2')
	})
})
