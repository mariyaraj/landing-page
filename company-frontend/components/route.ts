// app/api/companies/route.ts
import { NextResponse } from 'next/server';

const API_URL = 'http://localhost:8082/api/companies';

// Basis-Konfiguration für fetch
const fetchConfig = {
  headers: {
    'Content-Type': 'application/json',
    // Falls Basic Auth verwendet wird
    // 'Authorization': 'Basic ' + Buffer.from('username:password').toString('base64'),
    // Oder alternativ:
    // 'Authorization': 'Basic YWRtaW46YWRtaW4=',  // für admin:admin
  },
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const response = await fetch(API_URL, {
      ...fetchConfig,
      method: 'POST',
      body: JSON.stringify(body)
    });

    // Handle 401/403 spezifisch
    if (response.status === 401 || response.status === 403) {
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      );
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to create company' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const response = await fetch(API_URL, fetchConfig);

    if (response.status === 401 || response.status === 403) {
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      );
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch companies' },
      { status: 500 }
    );
  }
}