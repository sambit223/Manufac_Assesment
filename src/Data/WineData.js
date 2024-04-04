//creating a Mock dataset , inorder to fetch the data and calculate the mean , median and mode

const wineData = [
    { Alcohol: 'Class 1', Flavanoids: 13, Ash: 2.5, Magnesium: 90, Hue: 2, Gamma: Number(((2.5 * 2) / 90).toFixed(3)) },
    { Alcohol: 'Class 2', Flavanoids: 20, Ash: 2.8, Magnesium: 95, Hue: 3, Gamma: Number(((2.8 * 3) / 95).toFixed(3)) },
    { Alcohol: 'Class 1', Flavanoids: 15, Ash: 2.6, Magnesium: 88, Hue: 2, Gamma: Number(((2.6 * 2) / 88).toFixed(3)) },
    { Alcohol: 'Class 3', Flavanoids: 12, Ash: 2.4, Magnesium: 85, Hue: 2, Gamma: Number(((2.4 * 2) / 85).toFixed(3)) },
    { Alcohol: 'Class 1', Flavanoids: 8, Ash: 2.3, Magnesium: 87, Hue: 1, Gamma: Number(((2.3 * 1) / 87).toFixed(3)) },
    { Alcohol: 'Class 2', Flavanoids: 18, Ash: 2.7, Magnesium: 93, Hue: 3, Gamma: Number(((2.7 * 3) / 93).toFixed(3)) },
    { Alcohol: 'Class 3', Flavanoids: 14, Ash: 2.5, Magnesium: 86, Hue: 2, Gamma: Number(((2.5 * 2) / 86).toFixed(3)) },
    { Alcohol: 'Class 4', Flavanoids: 25, Ash: 3.0, Magnesium: 98, Hue: 4, Gamma: Number(((3.0 * 4) / 98).toFixed(3)) },
    { Alcohol: 'Class 2', Flavanoids: 22, Ash: 2.9, Magnesium: 97, Hue: 3, Gamma: Number(((2.9 * 3) / 97).toFixed(3)) },
    { Alcohol: 'Class 3', Flavanoids: 16, Ash: 2.7, Magnesium: 89, Hue: 2, Gamma: Number(((2.7 * 2) / 89).toFixed(3)) },
    { Alcohol: 'Class 4', Flavanoids: 28, Ash: 3.1, Magnesium: 100, Hue: 4, Gamma: Number(((3.1 * 4) / 100).toFixed(3)) },
    { Alcohol: 'Class 1', Flavanoids: 9, Ash: 2.4, Magnesium: 85, Hue: 1, Gamma: Number(((2.4 * 1) / 85).toFixed(3)) },
    { Alcohol: 'Class 2', Flavanoids: 21, Ash: 2.8, Magnesium: 96, Hue: 3, Gamma: Number(((2.8 * 3) / 96).toFixed(3)) },
    { Alcohol: 'Class 3', Flavanoids: 13, Ash: 2.6, Magnesium: 87, Hue: 2, Gamma: Number(((2.6 * 2) / 87).toFixed(3)) },
    { Alcohol: 'Class 4', Flavanoids: 26, Ash: 3.2, Magnesium: 102, Hue: 4, Gamma: Number(((3.2 * 4) / 102).toFixed(3)) },
];

  export default wineData;