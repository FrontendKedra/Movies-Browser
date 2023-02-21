export const getApiDatabase = async <ApiType>(
  url: string
): Promise<ApiType> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
