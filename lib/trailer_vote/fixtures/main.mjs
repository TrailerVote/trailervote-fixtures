import path from 'path'
var dirname = path.dirname(path.join(...new URL(import.meta.url).pathname.split('/')))
export default function(mediaType) {
  return path.resolve(dirname, path.join(...mediaType.split('/')))
}
