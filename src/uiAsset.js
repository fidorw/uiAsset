import {validateKey,envIsDev} from 'pubcore-ui-resource'
import getDefault from './getDefault'
import uiAsset from './uiAsset'

var htdocs

export {initEnvIsDev,initDefaults,initAutoupdateDefaults} from 'pubcore-ui-resource'
export const initHtdocsDefaultPath = htdocsDefaultPath => (htdocsDefaultPath = htdocs)
export const uiAssetOptional = (A, key, def) => uiAsset(A, key, def, true)
export default (A, key, def, optional) => {

	var uri
	var optional = typeof optional === 'undefined' || optional == false ? false : true
	var validated = validateKey({
		R: A,
		key: Array.isArray(key) ? key[0] : key,
		def: getDefault(htdocs,key,def,optional),
		isDev: envIsDev()
	})

	validated.value && typeof validated.value.uri === 'string' && (uri = validated.value.uri)
	typeof uri === 'undefined' && optional && (uri = '')

	if (envIsDev()) {
		//TODO check for physical file persistance validated.def.uri
		//TODO check for physical file persistance validated.value.uri if not undefined
		typeof uri === 'undefined' && (uri = validated.def.uri)
	}

	return uri
}
