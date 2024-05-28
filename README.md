
## BackEnd NESTJS TypeORM CRUD ESTUDIANTES-PROFESORES-CLASES

Recomendación
Primero Ejecutar Backend en el puerto 3000
Despues FrontEnd en el puerto 3001

1- Crear la base de datos en MySQL (en mi caso la llamé cruddb)
2- Ajustar la conexión a la Base de datos en  src/app.module.ts 
3- Ejecutar `npm install`
4- Ejecutar `npm run start:dev`

##-
Ignorar si el FrontEnd esta en el 3001
1.En caso de problemas de CORS,
Ajustar el puerto en el src/main.ts con el del Frontend 


## Por mejorar(falta de tiempo)

-Manejo de errores 
Ejemplo. 
faltó en caso de intentar borrar un estudiante que ya tenga una clase asignada, generar su respectivo error
