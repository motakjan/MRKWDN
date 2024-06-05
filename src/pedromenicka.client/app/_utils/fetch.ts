// Generic fetch function
export async function typedFetch<T>(url: string, options?: RequestInit): Promise<T[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/${url}`, options);

  if (!res.ok) {
    throw new Error(`Failed to fetch data for route: /${url}`);
  }

  return (await res.json()) as Promise<T[]>;
}
