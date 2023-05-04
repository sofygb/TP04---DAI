import config from '../../dbconfig.js';
//import config from '../../dbconfig.js';
import sql from 'mssql';

class DisneyService {
    getAllPersonajes = async () => {
        let returnArray = null;
        console.log('Estoy en: DisneyService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query("SELECT * from Personaje");
            returnArray = result.recordsets[0]; //traer un array y apunta al 1er dato
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    getPersonajeById = async (idPersonaje) => {
        let returnEntity = null;
        console.log('Estoy en: DisneyService.getById(idPersonaje)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, idPersonaje)
                                .query('SELECT * FROM Personaje WHERE idPersonaje = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    insertPersonaje = async (personaje) => {
        let rowsAffected = 0;
        console.log('Estoy en: DisneyService.insert(personaje)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre'     , sql.VarChar(50) , personaje?.Nombre ?? '')
                .input('pImagen'     , sql.VarChar(max)   , personaje?.Imagen ?? '')
                .input('pEdad'       , sql.Int   , personaje?.Edad ?? 0)
                .input('pPeso'       , sql.Float , personaje?.Peso ?? 0)
                .input('pHistoria'   , sql.VarChar(max) , personaje?.Historia ?? '')
                .query(`INSERT INTO Personaje (Nombre, Imagen, Edad, Peso, Historia) VALUES (@pNombre, @pImagen, @pEdad, @pPeso, @pHistoria)`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    updatePersonaje = async (personaje) => {
        let rowsAffected = 0;
        console.log('Estoy en: DisneyService.update(personaje)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre'     , sql.VarChar(50) , personaje?.Nombre ?? '')
                .input('pImagen'     , sql.VarChar(max) , personaje?.Imagen ?? '')
                .input('pEdad'       , sql.Int   , personaje?.Edad ?? 0)
                .input('pPeso'       , sql.Float , personaje?.Peso ?? 0)
                .input('pHistoria'   , sql.VarChar(max) , personaje?.Historia ?? '')
                .input('pId'         , sql.Int   , personaje?.idPersonaje ?? 0)
                .query(`UPDATE Personaje SET Nombre = @pNombre, Imagen=@pImagen, Edad=@pEdad, Peso=@pPeso, Historia=@pHistoria WHERE idPersonaje=@pId`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    
    deletePersonajeById = async (idPersonaje) => {
        let rowsAffected = 0;
        console.log('Estoy en: DisneyService.deleteById(idPersonaje)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, idPersonaje)
                                .query('DELETE FROM Personaje WHERE idPersonaje = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default DisneyService;

