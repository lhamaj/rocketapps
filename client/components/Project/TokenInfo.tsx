export default function TokenInfo() {
  return (
    <div className="my-6">
      <div className="bg-black rounded">
        <iframe
          id="geckoterminal-embed"
          title="GeckoTerminal Embed"
          src="https://www.geckoterminal.com/base/pools/0xd5be4398b73f5b0bb0f1d37270615e6192c97c94?embed=1&info=0&swaps=0&grayscale=0&light_chart=0&chart_type=market_cap&resolution=5m"
          height="500"
          width="100%"
          allow="clipboard-write"
          allowFullScreen />
      </div>
    </div>
  );
};