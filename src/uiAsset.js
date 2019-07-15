import http from 'pubcore-http'
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

export default (A, key, def, optional) => {
	var uri = getAssetUri({A, key, def, isDev:envIsDev(), htdocs, optional})
	if (envIsDev()) {
		//TODO check for physical file persistance validated.def.uri
		//TODO check for physical file persistance validated.value.uri if not undefined
		http(uri, null, 'GET').then(
	    response => {
				return uri
			},
	    error => {
				//throw 'ERROR_ASSET_NOT_EXISTS '+uri
				return uri
		})

	} else {
		return uri
	}
}
