import data from "./timeseries.json";

// the getData function takes an object params containing optional dateFrom and dateTo properties. 
// It filters the imported data array based on these properties and returns the filtered data array as the result.
export default function getData(params) {
    let filteredData = [...data];
    
    if (params?.dateFrom) {
        filteredData = filteredData.filter(x => {
            const paramValue = new Date(params.dateFrom)
            const xValue = new Date(x.DateTime)
            return xValue >= paramValue;
        })
    }

    if (params?.dateTo) {
        filteredData = filteredData.filter(x => {
            const paramValue = new Date(params.dateTo)
            const xValue = new Date(x.DateTime)
            return xValue <= paramValue;
        })
    }
   

    return filteredData;
}