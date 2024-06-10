datatojson <- function(text) {

    data <- gsub("(\\d)\\s+(\\d)", "\\1|\\2", text)


    #Remove whitespaces    
    data <- gsub(" ", "", data)

    #Add , char

    data <- gsub("(?<=[a-zA-Z])-|-(?=[a-zA-Z])", "-", data, perl = TRUE)
    data <- gsub("(?<=[a-zA-Z])(?=[0-9])|(?<=[0-9])(?=[a-zA-Z])", ",", data, perl = TRUE)

    # Split string on substrings
    subStringsData <- strsplit(data, "\n")[[1]]

    # Show in objets
    for (i in 1:length(subStringsData)) {
      cat("Objeto", i, ":", subStringsData[i], "\n")
    }
    
}
