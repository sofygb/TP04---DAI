import config from '../../dbconfig.js';
//import config from '../../dbconfig.js';
import sql from 'mssql';

class PizzasService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: PizzaService.getAll()');
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

    getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PizzaService.getById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query('SELECT * FROM Personaje WHERE id = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    insert = async (personaje) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzaService.insert(personaje)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre'     , sql.NChar , personaje?.nombre ?? '')
                .input('pImagen'     , sql.NChar   , personaje?.imagen ?? '')
                .input('pEdad'       , sql.Int   , personaje?.edad ?? 0)
                .input('pPeso'       , sql.Float , personaje?.peso ?? 0)
                .input('pHistoria'   , sql.NChar , personaje?.historia ?? '')
                .query(`INSERT INTO Personaje (Nombre, Imagen, Edad, Peso, Historia) VALUES (@pNombre, @pImagen, @pEdad, @pPeso, @pHistoria)`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    update = async (personaje) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzaService.update(personaje)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre'     , sql.NChar , personaje?.nombre ?? '')
                .input('pImagen'     , sql.NChar   , personaje?.imagen ?? '')
                .input('pEdad'       , sql.Int   , personaje?.edad ?? 0)
                .input('pPeso'       , sql.Float , personaje?.peso ?? 0)
                .input('pHistoria'   , sql.NChar , personaje?.historia ?? '')
                .input('pId'         , sql.Int   , personaje?.id ?? 0)
                .query(`UPDATE Personaje SET Nombre = @pNombre, Imagen=@pImagen, Edad=@pEdad, Peso=@pPeso, Historia=@pHistoria WHERE Id=@pId`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    
    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzaService.deleteById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query('DELETE FROM Personaje WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default PizzasService;

