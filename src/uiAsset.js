import request from '@pubcore/http-client'
import https from 'https'
import {envIsDev,initDefaults,initAutoupdateDefaults} from 'pubcore-ui-resource'
import getAssetUri from './getAssetUri'
import uiAsset from './uiAsset'

//only fol default not for A
var htdocs

export {initEnvIsDev} from 'pubcore-ui-resource'
export const initHtdocsDefaultPath = htdocsDefaultPath => (htdocs = htdocsDefaultPath)
export const uiAssetOptional = (A, key, def) => uiAsset(A, key, def, true)
export const initAssetDefaults = defaults => {
	initDefaults(defaults,'asset')
}
export const initAutoupdateAssetDefaults = c => {
	initAutoupdateDefaults(c,'asset')
}

export default (A, key, def, optional, host) => {
	if (envIsDev()) {
		var uri = getAssetUri({A, key, def, isDev:envIsDev(), htdocs, optional, autoupdateOff:true})
		const agent = new https.Agent({
		  rejectUnauthorized: false
		})
		request({uri:'https://' + (host || window.location.host) + uri, httpsAgent: agent}).then(
	    response => {
				if (response.status != 200) throw('ERROR_ASSET_NOT_FOUND '+uri)
			},
	    error => {
				throw('ERROR_ASSET_NOT_FOUND '+uri)
		})

	}
	return getAssetUri({A, key, def, isDev:envIsDev(), htdocs, optional})
}
