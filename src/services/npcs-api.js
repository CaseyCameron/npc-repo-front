import request from 'superagent';
import dotenv from 'dotenv';
dotenv.config();

const URL = 'https://npc-repository.herokuapp.com/api/v1/npcs/';

export async function getAllNpcs() {
  const response = await request.get(URL);
  console.log('trying to get npcs', URL);
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