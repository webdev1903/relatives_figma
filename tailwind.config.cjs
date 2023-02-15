module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      inset: {
        33: "33%",
        22: "22px",
        17: "17px",
        31: "31px",
        29.5: "29.5px",
      },
      fontFamily: {
        tomorrow: ["Tomorrow"],
      },
      fontSize: {
        lbase: ["16px", "32px"],
      },
      colors: {
        trend: "#ECF0FF",
        purple: "#14172B",
        tcol: "#737BAE",
        custom: "rgb(30,32,48)",
        custom2: "rgb(27,30,51)",
        custom3:
          "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%);",
        custom4: "#14172B",
        custom5: "#ECF0FF",
        custom6: "#00FFA3",
        custom7: "#FF4D4D",
      },
      letterSpacing: {
        tightest: "-0.01em",
      },
      backdropSepia: {
        50: "blur(50px)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%)",
        "custom-gradient2":
          "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(220, 31, 255, 0.1) 100%)",
      },
      borderRadius: {
        curve: "20px",
        fcurve: "50%",
      },
      skew: {
        inward: "-10deg",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
    },
  },
  plugins: [],
};
