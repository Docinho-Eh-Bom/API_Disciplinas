import crypto from 'crypto';

const disciplinasRepository = () => {
   const disciplinas = [];
 
   const create = ({ nome, cargaHoraria, obrigatoria }) => {
    const newDisciplina = {
       id: crypto.randomUUID(),
       nome,
       cargaHoraria,
       obrigatoria: true, //Como não tem especificação, o padrão é true
    };
    disciplinas.push(newDisciplina);
    return newDisciplina;
 };
 
   const list = (nome = "") => {
      return disciplinas.filter(disciplina => {
         return disciplina.nome.toLowerCase().includes(nome.toLowerCase());
      });
   };
 
   const findById = (id) => {
      return disciplinas.find(disciplina => disciplina.id === id);
   }

   const update = (id, data) => {
      const disciplina = disciplinas.find(disciplina => disciplina.id === id);
      if (!disciplina) return null;
      disciplina.nome = data.nome;
      disciplina.cargaHoraria = data.cargaHoraria;
      disciplina.obrigatoria = data.obrigatoria;
      return disciplina;
   };
 
   const setObrigatoriaStatus = (id, isobrigatoria) => {
      const disciplina = disciplinas.find(disciplina => disciplina.id === id);
      if (!disciplina) return null;
      disciplina.obrigatoria = isobrigatoria;
      return disciplina;
   };
 
   const remove = (id) => {
      const index = disciplinas.findIndex(disciplina => disciplina.id === id);
      if (index === -1) return false;
      disciplinas.splice(index, 1);
      return true;
   };
 
   return {
     create,
     list,
     findById,
     update,
     setObrigatoriaStatus,
     remove,
   };
 };

 export default disciplinasRepository;