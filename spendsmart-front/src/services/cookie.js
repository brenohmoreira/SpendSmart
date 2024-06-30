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

function getCookie(name) {
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      
      if (cookie.startsWith(name + '=')) {
          return cookie.substring(name.length + 1);
      }
  }
  
  return '';
}

module.exports = {
  exists: exists,
  setCookie: setCookie,
  getCookie: getCookie
}