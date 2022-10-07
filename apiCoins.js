const bitcon = (element) => {
  const ul = document.querySelector('#coins-list');
  const li = document.createElement('li');
  li.innerText = `${element.name} (${element.symbol}): ${Number(element.priceUsd)
    .toFixed(2)}`;
  ul.appendChild(li);
};

const fetchCoins = async () => {
  try {
    const url = await fetch('https://api.coincap.io/v2/assets');
    const { data } = await url.json();
    data.slice(0, 10).forEach((element) => bitcon(element));
  } catch (err) {
    return 'FetchError: invalid';
  }
};

fetchCoins();
