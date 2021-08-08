import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addNpc, updateNpc, getNpc, getAllNpcs } from '../services/npcs-api';

export const useAddNpc = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleAdd = async (npcToAdd) => {
    setLoading(true);
    addNpc(npcToAdd)
      .then(res => history.push(`/npcs/${res.id}`))
      .then(() => setLoading(false));
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

// export const useDeleteNpcById = (id) => {
//   const [deletedNpc, setDeletedNpc] = useState(null);

//   useEffect(() => {
//     deleteNpc(id)
//       .then()
//   });
// };