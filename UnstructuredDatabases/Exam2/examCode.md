
use prueba1


db.createCollection("Clientes")
db.createCollection("Productos")
db.createCollection("Ventas")


3
db.Clientes.find({})






4
db.Productos.find({ existencia: 0 })



5

db.Clientes.find({ edad: { $gt: 35 } })



6 
db.Productos.updateOne({ nombre: "Producto A" }, { $inc: { existencia: 10 } })



7



db.Productos.find({ existencia: { $gt: 0 }, precio: { $gt: 1000 } })





Insert to clientes


db.Clientes.insertMany([
    { nombre: "Pedro", edad: 35, ciudad: "Concepción" },
    { nombre: "Luisa", edad: 25, ciudad: "Antofagasta" },
    { nombre: "Manuel", edad: 50, ciudad: "Arica" },
    { nombre: "Camila", edad: 30, ciudad: "La Serena" },
    { nombre: "Javier", edad: 45, ciudad: "Viña del Mar" },
    { nombre: "Carmen", edad: 55, ciudad: "Puerto Montt" },
    { nombre: "Diego", edad: 22, ciudad: "Talca" },
    { nombre: "Fernanda", edad: 27, ciudad: "Temuco" },
    { nombre: "Gonzalo", edad: 33, ciudad: "Iquique" },
    { nombre: "Carolina", edad: 42, ciudad: "Rancagua" },
    { nombre: "Francisco", edad: 38, ciudad: "Copiapó" },
    { nombre: "Valentina", edad: 29, ciudad: "Los Ángeles" },
    { nombre: "Andrés", edad: 47, ciudad: "Calama" },
    { nombre: "Gabriela", edad: 32, ciudad: "Osorno" },
    { nombre: "Felipe", edad: 36, ciudad: "Punta Arenas" }
])



Insert to clientes


db.Clientes.insertMany([
    { nombre: "Pedro", edad: 35, ciudad: "Concepción" },
    { nombre: "Luisa", edad: 25, ciudad: "Antofagasta" },
    { nombre: "Manuel", edad: 50, ciudad: "Arica" },
    { nombre: "Camila", edad: 30, ciudad: "La Serena" },
    { nombre: "Javier", edad: 45, ciudad: "Viña del Mar" },
    { nombre: "Carmen", edad: 55, ciudad: "Puerto Montt" },
    { nombre: "Diego", edad: 22, ciudad: "Talca" },
    { nombre: "Fernanda", edad: 27, ciudad: "Temuco" },
    { nombre: "Gonzalo", edad: 33, ciudad: "Iquique" },
    { nombre: "Carolina", edad: 42, ciudad: "Rancagua" },
    { nombre: "Francisco", edad: 38, ciudad: "Copiapó" },
    { nombre: "Valentina", edad: 29, ciudad: "Los Ángeles" },
    { nombre: "Andrés", edad: 47, ciudad: "Calama" },
    { nombre: "Gabriela", edad: 32, ciudad: "Osorno" },
    { nombre: "Felipe", edad: 36, ciudad: "Punta Arenas" }
])




Insert ventas with ref no datado




db.Ventas.insertMany([
    { cliente: ObjectId("cliente_id_3"), producto: ObjectId("producto_id_103"), cantidad: 2 },
    { cliente: ObjectId("cliente_id_4"), producto: ObjectId("producto_id_104"), cantidad: 7 },
    { cliente: ObjectId("cliente_id_5"), producto: ObjectId("producto_id_105"), cantidad: 4 },
    { cliente: ObjectId("cliente_id_6"), producto: ObjectId("producto_id_106"), cantidad: 6 },
    { cliente: ObjectId("cliente_id_7"), producto: ObjectId("producto_id_107"), cantidad: 3 },
    { cliente: ObjectId("cliente_id_8"), producto: ObjectId("producto_id_108"), cantidad: 8 },
    { cliente: ObjectId("cliente_id_9"), producto: ObjectId("producto_id_109"), cantidad: 1 },
    { cliente: ObjectId("cliente_id_10"), producto: ObjectId("producto_id_110"), cantidad: 5 },
    { cliente: ObjectId("cliente_id_11"), producto: ObjectId("producto_id_111"), cantidad: 3 },
    { cliente: ObjectId("cliente_id_12"), producto: ObjectId("producto_id_112"), cantidad: 2 },
    { cliente: ObjectId("cliente_id_13"), producto: ObjectId("producto_id_113"), cantidad: 4 },
    { cliente: ObjectId("cliente_id_14"), producto: ObjectId("producto_id_114"), cantidad: 7 },
    { cliente: ObjectId("cliente_id_15"), producto: ObjectId("producto_id_115"), cantidad: 6 },
    { cliente: ObjectId("cliente_id_16"), producto: ObjectId("producto_id_116"), cantidad: 9 },
    { cliente: ObjectId("cliente_id_17"), producto: ObjectId("producto_id_117"), cantidad: 3 }
])