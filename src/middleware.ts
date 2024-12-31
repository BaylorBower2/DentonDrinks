import { defineMiddleware } from 'astro:middleware';
import { validateVenueType } from './lib/utils/routing';

export const onRequest = defineMiddleware(async (context, next) => {
  // Add request timing
  const startTime = Date.now();

  // Process the request
  const response = await next();
  
  // Add timing header
  const duration = Date.now() - startTime;
  response.headers.set('Server-Timing', `total;dur=${duration}`);
  
  return response;
});