export interface Response<T> {
  code: number;
  data: {
    results: T;
    count: number;
    limit: number;
    total: number;
    offset: number;
  };
  status: string;
  attributionHTML: string;
  attributionText: string;
  copyright: string;
}
