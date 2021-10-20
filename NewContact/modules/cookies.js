export function saveCookie(name, value) {
  document.cookie = `${name}=${value}`;
}

export function getCookieValue(cookieName) {
  let cookie = document.cookie
    .split("; ")
    .find((name) => name.startsWith(cookieName))
    .split("=")[1];

  return cookie;
}

// export function cookieCountIncrese(cookieName) {
//   let count = getCookieValue(cookieName) || 0;
//   count++;
//   return count;
// } // Ovo ide u script
