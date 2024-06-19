#! STEP 0 (CARGAR LIBRERIAS)

#Cargamos Funciones
source("R/functions/functions.R")

# Load Librarys 
library(pdftools)
library(jsonlite)

#! STEP 1 (DATA PDF TO JSON) - DEPRECATED

# Save a pdf PATH
#path <- "./data/raw/bd-raw.pdf"

# Read PDF content
#getPDF <- pdf_text(path)

# Use datatojson function
#dataPDF <- datatojson(getPDF)


#file_path <- "./data/processed/data.json"

# Guardar el JSON en el archivo
#write(dataPDF, file = file_path)
#cat("JSON guardado en", file_path, "\n")


#! STEP 2 (REGRESIÓN LINEAL)

# Ejecutar la función
resultados <- regresion_lineal("./data/processed/dataRefactor.json")

crear_graficos_separados(resultados)

print(resultados)