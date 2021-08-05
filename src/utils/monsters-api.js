import request from 'superagent';

const URL = '/api/monsters';

export async function getAllMonsters(){
  const response = await request.get(URL);
  return response.body;
}

export async function getMonster(id){
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}

export async function addMonster(monster){
  const response = await request.post(URL).send(monster);
  return response.body;
}

export async function deleteMonster(id){
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function updateMonster(monster){
  const response = await request.put(`${URL}/${monster.id}`).send(monster);
  return response.body;
}