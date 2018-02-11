const encodeParameters = params => {
  return Object.keys(params)
    .map(k => `${k}=${encodeURIComponent(params[k])}`)
    .join("&");
};

export const get = async (endpoint, params = {}, headers = new Headers()) => {
  const url = `${endpoint}?${encodeParameters(params)}`;
  const response = await fetch(url, {method: 'GET', headers});
  const json = await response.json();
  return json;
};
