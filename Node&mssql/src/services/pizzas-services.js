import config from '../../dbconfig-env.js';
//import config from '../../dbconfig.js';
import sql from 'mssql';

class PizzasService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: PizzaService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query("SELECT * from Pizzas");
            returnArray = result.recordsets[0];
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
                                .query('SELECT * FROM Pizzas WHERE id = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    insert = async (pizza) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzaService.insert(pizza)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre'     , sql.NChar , pizza?.nombre ?? '')
                .input('pLibreGluten', sql.Bit   , pizza?.libreGluten ?? false)
                .input('pImporte'    , sql.Float , pizza?.importe ?? 0)
                .input('pDescripcion', sql.NChar , pizza?.descripcion ?? '')
                .query(`INSERT INTO Pizzas (Nombre, LibreGluten, Importe, Descripcion) VALUES (@pNombre, @pLibreGluten, @pImporte, @pDescripcion)`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    update = async (pizza) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzaService.update(pizza)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre'     , sql.NChar , pizza?.nombre ?? '')
                .input('pLibreGluten', sql.Bit   , pizza?.libreGluten ?? false)
                .input('pImporte'    , sql.Float , pizza?.importe ?? 0)
                .input('pDescripcion', sql.NChar , pizza?.descripcion ?? '')
                .input('pId'         , sql.Int   , pizza?.id ?? 0)
                .query(`UPDATE Pizzas SET Nombre = @pNombre, LibreGluten=@pLibreGluten, Importe=@pImporte, Descripcion=@pDescripcion WHERE Id=@pId`);
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
                                .query('DELETE FROM Pizzas WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default PizzasService;

