declare module "@clerk/nextjs/middleware" {
  export function authMiddleware(options: {
    publicRoutes?: string[];
    ignoredRoutes?: string[];
  }): any;

  export const config: {
    matcher: string[];
  };
}
