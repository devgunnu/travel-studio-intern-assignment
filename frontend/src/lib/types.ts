// TypeScript types for the application

export interface GuestRequest {
    id: number;
    guestPhone: string;
    requestText: string;
    createdAt: string;
    status: string;
  }
  
  export interface ApiResponse<T> {
    data: T;
    error?: string;
  }