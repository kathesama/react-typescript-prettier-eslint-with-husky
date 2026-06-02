import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/home', () =>
    HttpResponse.json({
      title: 'Eureka!',
    })
  ),
  http.get('/api/health', () =>
    HttpResponse.json({
      status: 'ok',
    })
  ),
];
