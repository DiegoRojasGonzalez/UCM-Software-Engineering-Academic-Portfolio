#Cargamos Funciones
source("R/functions/functions.R")

# Load Librarys 
library(pdftools)

# Save a pdf PATH
path <- "./data/raw/bd-raw.pdf"

# Read PDF content
getPDF <- pdf_text(path)

# Use datatojson function
dataPDF <- datatojson(getPDF)

#Print data
print(dataPDF)