import getDefaultURI from './getDefaultURI'

export default (htdocs, key, def, optional, isDev) => {
	var dynamic = false
	var optional = typeof optional === 'undefined' || optional == false ? false : true
	if (typeof def !== 'object' || ! def) {
		if (Array.isArray(key) && key.length > 0) {
			key = key[0] + (key[1] && typeof key[1] === 'string' ? key[1] : '')
			dynamic = true
		}
		def =  {uri: getDefaultURI(htdocs,key,def), dynamic, optional}
	}
	return def
}
