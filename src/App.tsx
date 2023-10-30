import "./App.css";
import { GammaValue, getClasses } from "./utils/method";

function App() {
  const { tableData, alcholClasses } = getClasses();
  const { gammaTableData } = GammaValue();
  return (
    <div className='container'>
      <header className='App-header'>Data Visualization</header>
      <h1>Wine Flavanoids Mean , Mode , Median</h1>
      <table className='table-data'>
        <tbody>
          <tr className='rows'>
            <th>Measure</th>
            {alcholClasses?.map((value: any, index: number) => {
              return <th key={`list-${index}`}> Wine Class {value}</th>;
            })}
          </tr>
          <tr className='rows'>
            <td>Flavanoids Mean</td>
            {tableData?.map((list: any, index: number) => {
              return <td key={`list-${index}`}>{list.meanValue}</td>;
            })}
          </tr>
          <tr className='rows'>
            <td>Flavanoids Median</td>
            {tableData?.map((list: any, index: number) => {
              return <td key={`list-${index}`}>{list.medianValue}</td>;
            })}
          </tr>
          <tr className='rows'>
            <td>Flavanoids Mode</td>
            {tableData?.map((list: any, index: number) => {
              return <td key={`list-${index}`}>{list.modeValue}</td>;
            })}
          </tr>
        </tbody>
      </table>

      <h1>Gamma Mean , Mode , Median Data</h1>
      <table className='table-data'>
        <tbody>
          <tr className='rows'>
            <th>Measure</th>
            {alcholClasses?.map((value: any, index: number) => {
              return <th key={`list-${index}`}> Wine Class {value}</th>;
            })}
          </tr>
          <tr className='rows'>
            <td>Gamma Mean</td>
            {gammaTableData?.map((list: any, index: number) => {
              return <td key={`list-${index}`}>{list.meanValue}</td>;
            })}
          </tr>
          <tr className='rows'>
            <td>Gamma Median</td>
            {gammaTableData?.map((list: any, index: number) => {
              return <td key={`list-${index}`}>{list.medianValue}</td>;
            })}
          </tr>
          <tr className='rows'>
            <td>Gamma Mode</td>
            {gammaTableData?.map((list: any, index: number) => {
              return <td key={`list-${index}`}>{list.modeValue}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
