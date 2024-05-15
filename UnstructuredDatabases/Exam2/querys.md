Claro, aquí te dejo un listado de consultas comunes en MongoDB, junto con ejemplos de cómo usarlos en diversas situaciones:

1. **Consultar todos los documentos en una colección:**
   ```javascript
   db.nombre_de_la_coleccion.find()
   ```

2. **Consultar documentos con un campo específico igual a un valor:**
   ```javascript
   db.nombre_de_la_coleccion.find({ campo: 'valor' })
   ```

3. **Consultar documentos donde un campo existe:**
   ```javascript
   db.nombre_de_la_coleccion.find({ campo: { $exists: true } })
   ```

4. **Consultar documentos donde un campo es mayor que un valor:**
   ```javascript
   db.nombre_de_la_coleccion.find({ campo: { $gt: valor } })
   ```

5. **Consultar documentos donde un campo está en una lista de valores:**
   ```javascript
   db.nombre_de_la_coleccion.find({ campo: { $in: [valor1, valor2] } })
   ```

6. **Consultar documentos y limitar los resultados:**
   ```javascript
   db.nombre_de_la_coleccion.find().limit(5)
   ```

7. **Consultar documentos y ordenar los resultados:**
   ```javascript
   db.nombre_de_la_coleccion.find().sort({ campo: 1 })
   ```

8. **Consultar documentos y contar el número de resultados:**
   ```javascript
   db.nombre_de_la_coleccion.find().count()
   ```

9. **Consultar documentos y agregar una proyección para incluir o excluir campos:**
   ```javascript
   db.nombre_de_la_coleccion.find({}, { campo1: 1, campo2: 0 })
   ```

10. **Consultar documentos y realizar una búsqueda de texto completo:**
    ```javascript
    db.nombre_de_la_coleccion.find({ $text: { $search: "texto" } })
    ```

Estos son solo algunos ejemplos de consultas que puedes realizar en MongoDB. La flexibilidad del modelo de datos de MongoDB te permite realizar consultas muy específicas y poderosas para adaptarse a diversas situaciones.