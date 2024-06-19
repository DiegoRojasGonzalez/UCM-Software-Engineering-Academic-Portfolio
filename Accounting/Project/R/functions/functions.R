#library(jsonlite)

#! data to json parser
datatojson <- function(text) {

    data <- gsub("(\\d)\\s+(\\d)", "\\1|\\2", text)

    #Remove whitespaces    
    data <- gsub(" ", "", data)

    #Add , char
    data <- gsub("(?<=[a-zA-Z])-|-(?=[a-zA-Z])", "-", data, perl = TRUE)
    data <- gsub("(?<=[a-zA-Z])(?=[0-9])|(?<=[0-9])(?=[a-zA-Z])", ",", data, perl = TRUE)

    # Split string on substrings
    subStringsData <- strsplit(data, "\n")[[1]]
    
    gMaj <- gsub('"|Gananciasporventas-Mayoristas,', '', subStringsData[3])
    gMaj <- gsub(' ', '', gMaj)
    gMaj <- unlist(strsplit(gMaj, "\\|"))
    
    gMin <- gsub('"|Gananciasporventas-Minoristas,', '', subStringsData[4])
    gMin <- gsub(' ', '', gMin)
    gMin <- unlist(strsplit(gMin, "\\|"))
    
    # Get Years
    years <- unlist(strsplit(subStringsData[2], "\\|"))
    
    # Crear la estructura del JSON con valores por defecto
    json_data <- lapply(seq_along(years), function(i) {
        list(
            year = years[i],
            data = list(
                Gananciasporventas_Mayoristas = ifelse(i <= length(gMaj), gMaj[i], "0"),
                Gananciasporventas_Minoristas = ifelse(i <= length(gMin), gMin[i], "0")
            )
        )
    })
    
    # Convertir a JSON
    json_output <- toJSON(json_data, pretty = TRUE)
    
    return(json_output)
}

#! jsontoproyeccion

library(jsonlite)

# Función para realizar la proyección lineal y guardar los resultados
proyecciones_lineal <- function(file_path) {
  # Leer el archivo JSON
data <- fromJSON(file_path)
#print(data)

print(data)
  
}


library(jsonlite)



library(jsonlite)

# Función para realizar la regresión lineal
regresion_lineal <- function(file_path) {
  # Leer el archivo JSON
  data <- fromJSON(file_path)

  # Convertir los datos a un data frame
  df <- as.data.frame(data)

  # Convertir las columnas de ganancias a numérico
  df$Gananciasporventas_Mayoristas <- as.numeric(gsub("\\.", "", df$Gananciasporventas_Mayoristas))
  df$Gananciasporventas_Minoristas <- as.numeric(gsub("\\.", "", df$Gananciasporventas_Minoristas))

  # Realizar la regresión lineal para las ganancias por ventas mayoristas
  lm_mayoristas <- lm(Gananciasporventas_Mayoristas ~ as.numeric(year), data = df)
  summary(lm_mayoristas)

  # Realizar la regresión lineal para las ganancias por ventas minoristas
  lm_minoristas <- lm(Gananciasporventas_Minoristas ~ as.numeric(year), data = df)
  summary(lm_minoristas)

  # Predecir las ganancias por ventas para los próximos 5 años
  pred_year <- data.frame(year = seq(2024, 2028))
  pred_mayoristas <- predict(lm_mayoristas, newdata = pred_year)
  pred_minoristas <- predict(lm_minoristas, newdata = pred_year)

  predicciones <- data.frame(year = pred_year$year,
                              Gananciasporventas_Mayoristas = pred_mayoristas,
                              Gananciasporventas_Minoristas = pred_minoristas)

  # Agregar la información del JSON original
  df_resultado <- rbind(df, predicciones)
  return(df_resultado)
}


#! GRAPICHS 

# Crear una función para generar gráficos por separado y guardarlos en archivos PNG
crear_graficos_separados <- function(resultados) {
  # Convertir las columnas de Ganancias por ventas a numérico
  resultados$Gananciasporventas_Mayoristas <- as.numeric(resultados$Gananciasporventas_Mayoristas)
  resultados$Gananciasporventas_Minoristas <- as.numeric(resultados$Gananciasporventas_Minoristas)
  
  # Primer gráfico: Ganancias por ventas Mayoristas
  png("./outputs/Graphics/ganancias_mayoristas.png", width = 800, height = 600)
  plot(resultados$year, resultados$Gananciasporventas_Mayoristas, type = "o", col = "blue",
       xlab = "Año", ylab = "Ganancias por ventas Mayoristas",
       main = "Ganancias por ventas Mayoristas a lo largo de los años")
  dev.off()
  
  # Segundo gráfico: Ganancias por ventas Minoristas
  png("./outputs/Graphics/ganancias_minoristas.png", width = 800, height = 600)
  plot(resultados$year, resultados$Gananciasporventas_Minoristas, type = "o", col = "red",
       xlab = "Año", ylab = "Ganancias por ventas Minoristas",
       main = "Ganancias por ventas Minoristas a lo largo de los años")
  dev.off()
  
  # Tercer gráfico: Comparación de Ganancias por ventas
  png("./outputs/Graphics/comparacion_ganancias.png", width = 800, height = 600)
  plot(resultados$year, resultados$Gananciasporventas_Mayoristas, type = "o", col = "blue",
       xlab = "Año", ylab = "Ganancias por ventas",
       main = "Comparación de Ganancias por ventas")
  lines(resultados$year, resultados$Gananciasporventas_Minoristas, type = "o", col = "red")
  legend("topleft", legend = c("Mayoristas", "Minoristas"),
         col = c("blue", "red"), lty = 1, cex = 0.8)
  dev.off()
  
  # Cuarto gráfico: Ganancias por ventas totales
  png("./outputs/Graphics/ganancias_totales.png", width = 800, height = 600)
  ganancias_totales <- resultados$Gananciasporventas_Mayoristas + resultados$Gananciasporventas_Minoristas
  plot(resultados$year, ganancias_totales, type = "o", col = "green",
       xlab = "Año", ylab = "Ganancias por ventas Totales",
       main = "Ganancias por ventas Totales a lo largo de los años")
  dev.off()


  # Quinto gráfico: Ganancias por ventas con números
png("./outputs/Graphics/comparacion_ganancias_numeros.png", width = 800, height = 600)
plot(resultados$year, resultados$Gananciasporventas_Mayoristas, type = "o", col = "blue",
     xlab = "Año", ylab = "Ganancias por ventas",
     main = "Comparación de Ganancias por ventas con Números")
lines(resultados$year, resultados$Gananciasporventas_Minoristas, type = "o", col = "red")
legend("bottomright", legend = c("Mayoristas", "Minoristas"),
       col = c("blue", "red"), lty = 0, cex = 0.8)

# Agregar los números a cada punto del gráfico
text(resultados$year, resultados$Gananciasporventas_Mayoristas, labels = resultados$Gananciasporventas_Mayoristas, pos = 3, col = "blue")
text(resultados$year, resultados$Gananciasporventas_Minoristas, labels = resultados$Gananciasporventas_Minoristas, pos = 1, col = "red")
dev.off()
}

