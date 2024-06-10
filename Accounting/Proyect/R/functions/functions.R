datatojson <- function(text) {

    data <- gsub("(\\d)\\s+(\\d)", "\\1|\\2", text)

    #Remove whitespaces    
    data <- gsub(" ", "", data)

    #Add , char
    data <- gsub("(?<=[a-zA-Z])-|-(?=[a-zA-Z])", "-", data, perl = TRUE)
    data <- gsub("(?<=[a-zA-Z])(?=[0-9])|(?<=[0-9])(?=[a-zA-Z])", ",", data, perl = TRUE)

    # Split string on substrings
    subStringsData <- strsplit(data, "\n")[[1]]

  
    years <- unlist(strsplit(subStringsData[2], "\\|"))
    json_data <- toJSON(
        lapply(years, function(year) {
            list(year = year, data = list(
                Gananciasporventas_Mayoristas = 0,
                Gananciasporventas_Minoristas = 0
            ))
        })
    )
    return(json_data)
}