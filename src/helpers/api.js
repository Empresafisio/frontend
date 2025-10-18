const API_URL = process.env.REACT_APP_API_URL;

export async function fetchComBase(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Erro no servidor');
  }

  return response.json();
}

