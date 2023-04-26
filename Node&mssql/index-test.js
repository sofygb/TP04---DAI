import config from './dbconfig.js';
import sql from 'mssql';

console.clear();
console.log('\nconfig: ');
console.log(config);

test_01();

async function test_01(){
    let pool   = await sql.connect(config);
    let result = await pool.request().query("SELECT TOP 2 * FROM Pizzas");
    
    // first recordset from result.recordsets
    console.log('\nresult.recordset: ');
    console.log(result.recordset)            
    console.log('\nresult.recordsets[0]: ');
    console.log(result.recordsets[0]);   
    
    // count of recordsets returned by the procedure
    console.log('\nresult.recordsets.length: ');
    console.log(result.recordsets.length);

     // count of rows contained in first recordset
    console.log('\nresult.recordsets[0].length: ');
    console.log(result.recordsets[0].length); 
    
    // array of numbers, each number represents
    console.log('\nresult.rowsAffected: ');
    console.log(result.rowsAffected) ;         
    
    //  the number of rows affected by executed statements
    // procedure return value
    console.log('\nresult.returnValue: ');
    console.log(result.returnValue);

    // key/value collection of output values
    console.log('\nresult.output: ');
    console.log(result.output)                      
    
    process.exit();
}



