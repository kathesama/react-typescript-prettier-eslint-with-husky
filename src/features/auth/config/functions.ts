type ApiResponseBody = {
  error?: string;
  success?: boolean;
} & Record<string, unknown>;

type ApiResponse = {
  data: ApiResponseBody;
  status: number;
  statusText: string;
};

type ApiError = Error & {
  response?: {
    data?: ApiResponseBody;
    status?: number;
    statusText?: string;
  };
};

export const responseSuccessStructure = (response: ApiResponse) => ({
  code: response.status,
  statusText: response.statusText,
  status: response.data.success,
  data: response.data || [],
});

export const responseErrorStructure = (error: ApiError) => ({
  code: error.response?.status ?? 500,
  status: error.response?.data?.error ?? error.message,
  statusText: error.response?.statusText ?? 'Unknown error',
});
