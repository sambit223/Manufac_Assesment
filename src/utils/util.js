
//adding util files for calculating mean , median and mode 
//passing three params in each functions - the dataset , the property and the class to uniquely identify and fetch data

export const calculateMean = (data, property, alcoholClass) => {
    const filteredData = data.filter((wine) => wine.Alcohol === alcoholClass);
    const sum = filteredData.reduce((acc, wine) => acc + wine[property], 0);
    const mean = sum / filteredData.length;
    return mean.toFixed(3);
  };
  
 export const calculateMedian = (data, property, alcoholClass) => {
    const filteredData = data.filter((wine) => wine.Alcohol === alcoholClass);
    const sortedValues = filteredData.map((wine) => wine[property]).sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedValues.length / 2);
    const median = sortedValues.length % 2 === 0
      ? (sortedValues[middleIndex - 1] + sortedValues[middleIndex]) / 2
      : sortedValues[middleIndex];
    return median.toFixed(3);
  };
  
 export const calculateMode = (data, property, alcoholClass) => {
    const filteredData = data.filter((wine) => wine.Alcohol === alcoholClass);
    const countMap = {};
    filteredData.forEach((wine) => {
      countMap[wine[property]] = (countMap[wine[property]] || 0) + 1;
    });
    const mode = Object.keys(countMap).reduce((a, b) =>
      countMap[a] > countMap[b] ? a : b
    );
    return parseFloat(mode).toFixed(3);
  };
  