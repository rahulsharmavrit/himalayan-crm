import { createTheme } from "@mui/material";
import { webColors } from ".";


export const colors = {
  primary: {
    main: webColors['primary'],
  },
  secondary: {
    main: "#ff4081", // Your secondary color
  },
  // You can customize other colors as well
};

export const theme = createTheme({
  palette: colors,
});

// export function getStatusColor(value: string) {
//   switch (value) {
//     case "delivered":
//       return webColors.status["delivered"];
//     case "in-progress":
//       return webColors.status["pending"];
//     case "shipped":
//       return webColors.status["shipped"];
//     case "canceled":
//       return webColors.status["cancelled"];
//     case "checkout":
//       return webColors.status["checkout"];
//     case "in-progress":
//       return webColors.status["in-progress"];
//     case "cod":
//       return webColors.status["cod"];
//     case "paid":
//       return webColors.status["paid"];
//     case "refunded":
//       return webColors.status["refunded"];
//     case "unpaid":
//       return webColors.status["unpaid"];
//     default:
//       return null;
//   }
// }
