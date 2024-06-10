library(jsonlite)

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