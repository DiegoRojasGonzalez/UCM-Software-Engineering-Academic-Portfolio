Claro, aquí tienes una lista de comandos comunes de MongoDB shell con ejemplos:

1. **Listar bases de datos:**
   ```javascript
   show dbs
   ```

2. **Usar una base de datos:**
   ```javascript
   use nombre_de_la_base_de_datos
   ```

3. **Eliminar una base de datos:**
   ```javascript
   db.dropDatabase()
   ```

4. **Listar colecciones en una base de datos:**
   ```javascript
   show collections
   ```

5. **Crear una colección:**
   ```javascript
   db.createCollection('nombre_de_la_coleccion')
   ```

6. **Eliminar una colección:**
   ```javascript
   db.nombre_de_la_coleccion.drop()
   ```

7. **Insertar un documento en una colección:**
   ```javascript
   db.nombre_de_la_coleccion.insertOne({campo: 'valor'})
   ```

8. **Actualizar un documento en una colección:**
   ```javascript
   db.nombre_de_la_coleccion.updateOne({campo: 'valor'}, {$set: {nuevo_campo: 'nuevo_valor'}})
   ```

9. **Eliminar un documento de una colección:**
   ```javascript
   db.nombre_de_la_coleccion.deleteOne({campo: 'valor'})
   ```

10. **Editar un nombre de campo en un documento:**
    ```javascript
    db.nombre_de_la_coleccion.updateOne({}, {$rename: {'nombre_actual': 'nuevo_nombre'}})
    ```

Estos son solo algunos ejemplos básicos. MongoDB Shell tiene muchos más comandos y opciones disponibles para gestionar bases de datos y colecciones.