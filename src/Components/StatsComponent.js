import React from "react";
import { calculateMean, calculateMedian, calculateMode } from "../utils/util";
import "./StatsComponent.css";

const StatsComponent = ({ wineData }) => {
  const flavanoidsTable = (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {Array.from(new Set(wineData.map((elem) => elem.Alcohol))).map(
            (cls) => (
              <th key={cls}>{cls}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Flavanoids Mean</td>
          {Array.from(new Set(wineData.map((elem) => elem.Alcohol))).map(
            (cls) => (
              <td key={cls}>{calculateMean(wineData, "Flavanoids", cls)}</td>
            )
          )}
        </tr>
        <tr>
          <td>Flavanoids Median</td>
          {Array.from(new Set(wineData.map((elem) => elem.Alcohol))).map(
            (cls) => (
              <td key={cls}>{calculateMedian(wineData, "Flavanoids", cls)}</td>
            )
          )}
        </tr>
        <tr>
          <td>Flavanoids Mode</td>
          {Array.from(new Set(wineData.map((elem) => elem.Alcohol))).map(
            (cls) => (
              <td key={cls}>{calculateMode(wineData, "Flavanoids", cls)}</td>
            )
          )}
        </tr>
      </tbody>
    </table>
  );

//Gamma table  starts here 

  const gammaTable = (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {Array.from(new Set(wineData.map((elem) => elem.Alcohol))).map(
            (cls) => (
              <th key={cls}>{cls}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gamma Mean</td>
          {Array.from(new Set(wineData.map((elem) => elem.Alcohol))).map(
            (cls) => (
              <td key={cls}>{calculateMean(wineData, "Gamma", cls)}</td>
            )
          )}
        </tr>
        <tr>
          <td>Gamma Median</td>
          {Array.from(new Set(wineData.map((elem) => elem.Alcohol))).map(
            (cls) => (
              <td key={cls}>{calculateMedian(wineData, "Gamma", cls)}</td>
            )
          )}
        </tr>
        <tr>
          <td>Gamma Mode</td>
          {Array.from(new Set(wineData.map((elem) => elem.Alcohol))).map(
            (cls) => (
              <td key={cls}>{calculateMode(wineData, "Gamma", cls)}</td>
            )
          )}
        </tr>
      </tbody>
    </table>
  );

  return (
    <div>
      <h2 className="title">
        <u>Flavanoids Statistics</u>
      </h2>
      {flavanoidsTable}
      <h2 className="title">
        <u>Gamma Statistics</u>
      </h2>
      {gammaTable}
    </div>
  );
};

export default StatsComponent;
