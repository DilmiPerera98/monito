/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["SVN-Gilroy", "sans-serif"],
      },
      fontSize: {
        52: "52px",
      },
      colors: {
        monYellow: {
          0: "#F7DBA7",
          40: "#FCEED5",
        },
        nuetral: {
          0: "#FDFDFD",
          20: "#CCD1D2",
          40: "#99A2A5",
          60: "#667479",
          100: "#00171F",
        },
        darkBlue: {
          0: "#003459",
          80: "#002A48",
        },
      },
      width: {
        42: "42px",
        1440: "1440px",
        115: "115px",
        280: "280px",
        203: "203px",
        248: "248px",
        264: "264px",
        309: "309px",
        389: "389px",
        508: "508px",
        538: "538.53px",
        635: "635px",
        707: "707px",
        782.29: "782.29px",
        1180: "1180px",
      },
      height: {
        34: "34px",
        38: "38px",
        100: "100px",
        40: "40px",
        44: "44px",
        48: "48px",
        70: "70px",
        72: "72px",
        98: "98px",
        248: "248px",
        264: "264px",
        358: "358.79",
        378: "378px",
        440: "440px",
        635: "635px",
        986: "986px",
      },
      spacing: {
        635: "635px",
      },
      gap: {
        60: "60px",
        562: "562px",
      },
      borderRadius: {
        20: "20px",
        99: "99px",
        46: "46px",
        14: "14px",
      },
      lineHeight: {
        18: "18px",
        54: "54px",
      },
      rotate: {
        rotateBlue: "9.35deg",
        rotateYellow: "25.23deg",
        rotatePaw: "125.93deg",
        rotate154: "154deg",
      },
      boxShadow: {
        custom: "0px 4px 28px -2px",
      },
      boxShadowColor: {
        shadowColor: "rgba(0, 0, 0, 0.08)",
      },
      top: {
        minus360: "{250px}",
      },
      left: {
        776: "776.78px",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        100: "100",
        auto: "auto",
      },
    },
  },
  plugins: [],
};
