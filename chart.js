
export default function BoxChartApp() {
  const data = {
    'Rocket Gang Glory': [3000, 3200, 3500, 4000],
    'Battle Partners': [2800, 2900, 2950, 3100],
    'SV151': [2700, 2800, 2850, 2900],
  };
  const dates = ['Jul 1', 'Jul 2', 'Jul 3', 'Jul 4'];

  return React.createElement('div', {},
    React.createElement('h2', {}, 'BOX Chart Sample'),
    React.createElement('table', { border: 1, style: { width: '100%', textAlign: 'center' } },
      React.createElement('thead', {},
        React.createElement('tr', {},
          React.createElement('th', {}, 'Date'),
          ...Object.keys(data).map(box => React.createElement('th', {}, box))
        )
      ),
      React.createElement('tbody', {},
        dates.map((date, i) =>
          React.createElement('tr', {},
            React.createElement('td', {}, date),
            ...Object.keys(data).map(box => React.createElement('td', {}, data[box][i]))
          )
        )
      )
    )
  );
}
