import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

// You must specify the weights that are available
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold only
});
