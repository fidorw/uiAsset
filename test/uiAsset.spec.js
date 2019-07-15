import {expect} from 'chai'
import FakeXMLHTTPRequests from 'fakexmlhttprequest'
import uiAsset, {uiAssetOptional,initEnvIsDev,initAssetDefaults,initAutoupdateAssetDefaults,initHtdocsDefaultPath} from '../src/uiAsset'

var requests = []
global.XMLHttpRequest = function() {
	var r =  new FakeXMLHTTPRequests(arguments)
	requests.push(r)
	return r
}

describe('uiAsset, ' + new Date(), () => {
	var response = {status:'ok'}
	afterEach(() => {
		requests = []
	})

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

	// it('get undefined asset uri in dev mode because asset0 is not configured', (done) => {
	// 	initEnvIsDev(true)
	// 	expect(()=>uiAsset({},'a0')).to.throw('ERROR_ASSET_NOT_EXISTS ')
	// 	done()
	// })
})
