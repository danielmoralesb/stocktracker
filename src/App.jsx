import "./styles.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Stock Tracker</h1>
      <div className="flex justify-center">
        <div className="w-1/2">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Symbol</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Change</th>
                <th className="px-4 py-2">Change %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">AAPL</td>
                <td className="border px-4 py-2">145.86</td>
                <td className="border px-4 py-2">+0.22</td>
                <td className="border px-4 py-2">+0.15%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">GOOGL</td>
                <td className="border px-4 py-2">2,763.82</td>
                <td className="border px-4 py-2">-4.18</td>
                <td className="border px-4 py-2">-0.15%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">MSFT</td>
                <td className="border px-4 py-2">277.65</td>
                <td className="border px-4 py-2">+0.15</td>
                <td className="border px-4 py-2">+0.05%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
