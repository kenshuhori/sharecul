const api = {
  get: async (url: string) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err);
    }
    return await response.json();
  },

  post: async (url: string, data: { [key: string]: string }) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err);
    }
    return await response.json();
  },

  delete: async (url: string, data: { [key: string]: string }) => {
    // const query_string = Object.keys(query).map((key) => { return `${key}=${query[key]}`; }).join('&');
    // if (query_string) {
    //   url = url + '?' + query_string;
    // }
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err);
    }
    return await response.json();
  },
};

export default api;
