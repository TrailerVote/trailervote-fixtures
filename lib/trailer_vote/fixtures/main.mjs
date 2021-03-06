import path from 'path'
import url from 'url'

const pathname = decodeURI(new url.URL(import.meta.url).pathname)
const normalized_path = path.normalize(pathname).replace(/^\\([A-Z]):\\/, '$1:\\')
const dirname = path.dirname(normalized_path)
export default function(mediaType) {
  return path.join(dirname, ...mediaType.split('/'))
}
