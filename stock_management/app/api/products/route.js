import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const url = 'mongodb+srv://shaunak:6eEvklyHKzskKLda@inventorymanagementcluster.kvctbhl.mongodb.net/';
  const client = new MongoClient(url);
  try {  
    const database = client.db('database');
    const inv = database.collection('inventory');
    const query = { };
    const allProd = await inv.find(query).toArray();  
    return NextResponse.json({ allProd });
  } finally {
    await client.close();
  }
}

export async function POST(request) {
  try {
    let body = await request.json();
    const url = 'mongodb+srv://shaunak:6eEvklyHKzskKLda@inventorymanagementcluster.kvctbhl.mongodb.net/';
    const client = new MongoClient(url);
    const database = client.db('database');
    const inv = database.collection('inventory');
    const query = { };
    const allProd = await inv.insertOne(body);
    return NextResponse.json({ allProd, ok: true });
  } finally {
    await client.close();
  }
}