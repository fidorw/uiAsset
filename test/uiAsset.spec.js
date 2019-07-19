import {expect} from 'chai'
import uiAsset, {uiAssetOptional,initEnvIsDev,initAssetDefaults,initAutoupdateAssetDefaults,initHtdocsDefaultPath} from '../src/uiAsset'

describe('uiAsset, ' + new Date(), () => {

	it('get undefined asset uri not in dev mode because asset0 is not configured', () => {
		initEnvIsDev(false)
		expect(uiAsset({},'a0')).to.deep.equal(undefined)
	})

	it('initAssetDefaults()', () => {
		initAssetDefaults({})
	})
	it('initAutoupdateAssetDefaults()', () => {
		initAutoupdateAssetDefaults({})
	})
	it('existing asset on dev should return uri', (done) => {
		initEnvIsDev(true)
		expect(uiAsset({a1:{uri:'/fidorw/uiAsset.git'}},'a1',undefined,undefined,'github.com')).to.equal('/fidorw/uiAsset.git')
		done()
	})
})
