import request from 'superagent';
import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.URL;

export async function getAllNpcs() {
  const response = await request.get(URL);
  console.log('trying to get npcs');
  return response.body;
}

export async function getNpc(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}

export async function addNpc(npc) {
  const response = await request.post(URL).send(npc);
  return response.body;
}

export async function deleteNpc(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function updateNpc(npc) {
  const response = await request.put(`${URL}/${npc.id}`).send(npc);
  return response.body;
}