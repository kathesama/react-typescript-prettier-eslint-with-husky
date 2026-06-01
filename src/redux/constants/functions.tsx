import type { AxiosError, AxiosResponse } from 'axios';

type ApiResponseBody = {
  error?: string;
  success?: boolean;
} & Record<string, unknown>;

export const responseSuccessStructure = (
  response: AxiosResponse<ApiResponseBody>
) => ({
  code: response.status,
  statusText: response.statusText,
  status: response.data.success,
  data: response.data || [],
});

export const responseErrorStructure = (error: AxiosError<ApiResponseBody>) => ({
  code: error.response?.status ?? 500,
  status: error.response?.data?.error ?? error.message,
  statusText: error.response?.statusText ?? 'Unknown error',
});
