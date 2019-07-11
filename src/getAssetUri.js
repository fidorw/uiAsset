import {validateKey} from 'pubcore-ui-resource'
import getDefault from './getDefault'

export default ({A, key, def, isDev, htdocs, optional}) => {
	var uri
	optional = typeof optional === 'undefined' || optional == false ? false : true
	var validated = validateKey({
		R: A,
		key: Array.isArray(key) ? key[0] : key,
		def: getDefault(htdocs,key,def,optional),
		isDev: isDev
	})
	validated.value && typeof validated.value.uri === 'string' && (uri = validated.value.uri)
	typeof uri === 'undefined' && optional && (uri = '')
	isDev && typeof uri === 'undefined' && (uri = validated.def.uri)
	return uri
}
