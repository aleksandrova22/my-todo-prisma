//import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';


const connectionString = `${process.env.DATABASE_URL}`
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })



export default async function todo(request, response) {
  const
    // request: NextApiRequest,
    // response: NextApiResponse,
    { query, method } = request,
    id = Number(query?.path?.[0]);
  //console.log('parsing', request.method, { path, id });

  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  switch (method) {
    case 'GET':
      response.setHeader('content-type', 'application/json; charset=utf-8');
      const rowsGet = await prisma.ToDoList.findMany();
      response.status(200).json(rowsGet);
      return;
    case 'POST':
      const
        text = request.body.text;
      await prisma.ToDoList.create({ data: { text } });
      response.status(201).json({});

      return;
    case 'DELETE':
      await prisma.ToDoList.delete({ where: { id } });
      response.status(200).json({});
      return;
    case 'PATCH':
      const
        text1 = request.body.text;
      await prisma.ToDoList.update({ where: { id }, data: { text: text1, checked: 'false' } });
      response.status(200).json({});
      return;
  }

}

