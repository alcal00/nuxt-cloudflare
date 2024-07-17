export const _PP_PATH_PREFIX = '🌐pp'
export function expandPath(path: string | undefined, backend: string): string {
  /*
  Expand the given url with paxpar API backend
  => 🌐pp/api/bucket/public/usage/check_result/paf_1201d
  <= https://dev.paxpar.tech/api/bucket/public/usage/check_result/paf_1201d
  */
  // replace the prefix if found
  const p = path || ''
  return (p?.startsWith(_PP_PATH_PREFIX)) ? p.replace(_PP_PATH_PREFIX, backend) : p
}
