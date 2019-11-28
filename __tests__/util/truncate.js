import database from '../../src/database/index';
// excluir todos os registros da tabela após rodar
// um it (teste integrado)
export default function truncate() {
  return Promise.all(
    Object.keys(database.connection.models).map(key => {
      return database.connection.models[key].destroy({
        truncate: true,
        force: true,
      });
    })
  );
}
