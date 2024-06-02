function exists(name) {
  if(document.cookie.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'))) {
    return true
  } 

  return false
}

function setCookie(name, value, daysToExpire) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  const cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;

  document.cookie = cookie;
}

module.exports = {
  exists: exists,
  setCookie: setCookie
}