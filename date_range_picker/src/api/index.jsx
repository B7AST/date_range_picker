import data from "./timeseries.json";

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