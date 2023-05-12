import config from '../../dbconfig.js';
//import config from '../../dbconfig.js';
import sql from 'mssql';

class DisneyService {
    getAllPersonajes = async () => {
        let returnArray = null;
        console.log('Estoy en: DisneyService.getAllPersonajes()');
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

    getAllPeliSeries = async () => {
        let returnArray = null;
        console.log('Estoy en: DisneyService.getAllPeliSeries()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query("SELECT * from PeliSerie");
            returnArray = result.recordsets[0]; //traer un array y apunta al 1er dato
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    getPersonajeById = async (idPersonaje) => {
        let returnEntity = null;
        console.log('Estoy en: DisneyService.getPersonajeById(idPersonaje)');
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

    getPersonajeByName = async (Nombre) => {
        let returnEntity = null;
        console.log('Estoy en: DisneyService.getPersonajeByName(Nombre)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pNombre', sql.VarChar(150), Nombre)
                                .query('SELECT * FROM Personaje WHERE Nombre = @pNombre');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    getPersonajeByAge = async (Edad) => {
        let returnEntity = null;
        let returnArray = null;
        console.log('Estoy en: DisneyService.getPersonajeByAge(Edad)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pEdad', sql.Int, Edad)
                                .query('SELECT * FROM Personaje WHERE Edad = @pEdad');
            returnEntity = result.recordsets[0][0];
            returnArray = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    getPeliSerieByIdPersonaje = async (idPersonaje) => { //Corregir, no funciona
        let returnEntity = null;
        console.log('Estoy en: DisneyService.getPeliSerieByIdPersonaje(idPersonaje)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, idPersonaje)
                                .query('SELECT * FROM PeliSerie INNER JOIN PersonajeXPeliSerie ON PersonajeXPeliSerie.idPeliSerie = PeliSerie.idPeliSerie WHERE PersonajeXPeliSerie.idPersonaje = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }



    insertPeliSerie = async (peliSerie) => {
        let rowsAffected = 0;
        console.log('Estoy en: DisneyService.insertPeliSerie(peliSerie)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pTitulo'     , sql.Int , peliSerie?.Titulo ?? '')
                .input('pImagen'     , sql.VarChar(max)   , peliSerie?.Imagen ?? '')
                .input('pFechaCreacion'       , sql.Int   , peliSerie?.FechaCreacion ?? 0)
                .input('pCalificacion'       , sql.Float , peliSerie?.Calificacion ?? 0)
                .query(`INSERT INTO PeliSerie (Titulo, Imagen, FechaCreacion, Calificacion) VALUES (@pTitulo, @pImagen, @pFechaCreacion, @pCalificacion)`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    updatePeliSerie = async (peliSerie) => {
        let rowsAffected = 0;
        console.log('Estoy en: DisneyService.updatePeliSerie(peliSerie)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pTitulo'     , sql.Int , peliSerie?.Titulo ?? '')
                .input('pImagen'     , sql.VarChar(max)   , peliSerie?.Imagen ?? '')
                .input('pFechaCreacion'       , sql.Int   , peliSerie?.FechaCreacion ?? 0)
                .input('pCalificacion'       , sql.Float , peliSerie?.Calificacion ?? 0)
                .input('pId'         , sql.Int   , peliSerie?.idPeliSerie ?? 0)
                .query(`UPDATE PeliSerie SET Titulo = @pTitulo, Imagen =  @pImagen, FechaCreacion = @pFechaCreacion, Calificacion = @pCalificacion WHERE idPeliSerie=@pId`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    
    deletePeliSerieById = async (idPeliSerie) => {
        let rowsAffected = 0;
        console.log('Estoy en: DisneyService.deleteById(idPeliSerie)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, idPeliSerie)
                                .query('DELETE FROM PeliSerie WHERE idPeliSerie = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default DisneyService;

