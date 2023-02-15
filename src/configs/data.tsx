export interface CryptoData {
  logo: string;
  title: string;
  price: string;
  change: string;
  TVL: string;
  pairLogos: string[];
}

export const data: CryptoData[] = [
  {
    logo: "./icons/Bitcoin.png",
    title: "Bitcoin (BTC)",
    price: "31,812.80",
    change: "+10%",
    TVL: "60,000",
    pairLogos: [
      "./icons/Solana.png",
      "./icons/Ethereum.png",
      "./icons/Binance.png",
    ],
  },
  {
    logo: "./icons/Solana.png",
    title: "Solana (SOL)",
    price: "32.83",
    change: "-12.32%",
    TVL: "60,000",
    pairLogos: [
      "./icons/Bitcoin.png",
      "./icons/Ethereum.png",
      "./icons/Binance.png",
    ],
  },
  {
    logo: "./icons/Ethereum.png",
    title: "Ethereum (ETH)",
    price: "1,466.45",
    change: "-11.93%",
    TVL: "60,000",
    pairLogos: [
      "./icons/Solana.png",
      "./icons/Bitcoin.png",
      "./icons/Binance.png",
    ],
  },
  {
    logo: "./icons/Binance.png",
    title: "Binance USD (BUSD)",
    price: "1.00",
    change: "+0.26%",
    TVL: "60,000",
    pairLogos: [
      "./icons/Solana.png",
      "./icons/Ethereum.png",
      "./icons/Binance.png",
    ],
  },
  {
    logo: "./icons/Bitcoin.png",
    title: "Shiba Inu(SHIB)",
    price: "0.00000001948",
    change: "-8.1%",
    TVL: "60,000",
    pairLogos: [
      "./icons/Solana.png",
      "./icons/Ethereum.png",
      "./icons/Binance.png",
    ],
  },
];
