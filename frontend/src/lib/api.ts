// API utilities for fetching guest requests


import { GuestRequest } from './types';

const API_BASE_URL = 'http://localhost:3000/api';

export async function fetchRequests(): Promise<GuestRequest[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/requests`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const requests = await response.json();
    return requests;
  } catch (error) {
    console.error('Error fetching requests:', error);
    throw error;
  }
}

export async function createRequest(guestPhone: string, requestText: string): Promise<GuestRequest> {
  try {
    const response = await fetch(`${API_BASE_URL}/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        guestPhone,
        requestText,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const request = await response.json();
    return request;
  } catch (error) {
    console.error('Error creating request:', error);
    throw error;
  }
}