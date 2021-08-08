import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addNpc, updateNpc, getNpc, getAllNpcs, deleteNpc } from '../services/npcs-api';

export const useAddNpc = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleAdd = async (npcToAdd) => {
    console.log('made it to add');
    setLoading(true);
    addNpc(npcToAdd)
      .then(res => history.push(`/npcs/${res.id}`))
      .then(() => setLoading(false));
    console.log(npcToAdd);
  };
  return { handleAdd, loading };
};

export const useUpdateNpc = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleUpdate = async (npcToUpdate) => {
    setLoading(true);
    updateNpc(npcToUpdate)
      .then(res => history.push(`/npcs/${res.id}`))
      .then(() => setLoading(false));
  };
  return { handleUpdate, loading };
};

export const useNpcs = () => {
  const [loading, setLoading] = useState(true);
  const [npcs, setNpcs] = useState([]);

  useEffect(() => {
    getAllNpcs()
      .then(setNpcs)
      .finally(() => setLoading(false));
  }, []);
  return { loading, npcs };
};

export const useNpcById = (id) => {
  const [npc, setNpc] = useState(null);
  useEffect(() => {
    getNpc(id)
      .then(setNpc);
  }, []);
  console.log('get by id', npc);
  return npc;
};

export const useDeleteNpcById = (id) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const npc = useNpcById(id);

  const confirmation = `Sure you want to delete ${npc.name}?`;
  if (!window.confirm(confirmation)) return;

  const handleDelete = async (npcToDelete) => {
    setLoading(true);
    deleteNpc(npcToDelete)
      .then(res => history.push('/npcs'))
      .then(() => setLoading(false));
  };
  return { handleDelete, loading };
};