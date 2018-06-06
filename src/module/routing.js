export const handleGHPagesRedirect = ({ location, history }) => {
  if (location.search) {
    const q = {}
    location.search
      .slice(1)
      .split('&')
      .forEach(v => {
        const a = v.split('=')
        q[a[0]] = a
          .slice(1)
          .join('=')
          .replace(/~and~/g, '&')
      })
    if (q.p !== undefined) {
      history.replaceState(
        null,
        null,
        `${location.pathname.slice(0, -1)}${q.p || ''}${q.q ? `?${q.q}` : ''}${
          location.hash
        }`,
      )
    }
  }
}
