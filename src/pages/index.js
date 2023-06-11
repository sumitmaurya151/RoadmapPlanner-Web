import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import ConfigProviderForAntd from "@roadmap-planner/components/ConfigProviderForAntd/ConfigProviderForAntd";
import RpLayout from "@roadmap-planner/components/RpLayout/RpLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
     return (
          <>
               <ConfigProviderForAntd>
                    <RpLayout/>
               </ConfigProviderForAntd>
          </>
     );
}
