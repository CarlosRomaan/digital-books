
export interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}

export interface BuildQueryParams {
  type: string;
  query: string;
  category: string;
  page: number;
  perPage?: number;
}

export interface ResourceCardProps {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
  downloadLink: string;
}

export interface SearchParams {
  searchParams: { [key: string]: string | undefined };
}

export interface UrlQueryParams {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
}

export interface HeaderParams {
  query: string;
  category: string;
}