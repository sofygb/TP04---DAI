import PizzasService from './src/services/pizzas-services.js' //llamando a la clase para obtener los datos
import Pizza from './src/models/pizza.js'

//desde la carpeta escribir en la dirección cmd, o si no cd y nombre de la carpeta
//node index-completo.js



await test_getAll();
//await test_getById();
//await test_insert();
//await test_update();
//await test_deleteById();

async function test_getAll(){
    let svc = new PizzasService();
    let data;

    data = await svc.getAll();
    console.log(data);  //muestro todas las pizzas

    //console.log(data[0].Id);
    //console.log(data[0].id);
    //console.log(data[0].Id);
}

async function test_getById(){
    let svc = new PizzasService();
    let data;
    data = await svc.getById(2);
    console.log(data);
}

async function test_insert(){
    let svc = new PizzasService();
    let data;
    let nuevaPizza = new Pizza();
    
    nuevaPizza.nombre       = 'Pizza Guesa';
    nuevaPizza.libreGluten  = true;
    nuevaPizza.importe      = 750.50;
    nuevaPizza.descripcion  = 'Pizza con sabor a hamburguesa';
    console.log('\nnuevaPizza: ');
    console.log(nuevaPizza);

    data = await svc.insert(nuevaPizza);
    console.log(data);
}

async function test_update(){
    let svc = new PizzasService();
    let data;
    let laPizza;

    laPizza = await svc.getById(12);
    if (laPizza!= null){
        laPizza.importe      = 10750.50;

        data = await svc.update(laPizza);
        console.log(data);
    } else {
        console.log('\laPizza: ');
        console.log(laPizza);
    }
}

async function test_deleteById(){
    let svc = new PizzasService();
    let data;

    data = await svc.deleteById(12);
    console.log(data);
}

process.exit();
