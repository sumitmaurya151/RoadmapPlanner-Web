import ConfigProviderForAntd from '@roadmap-planner/components/ConfigProviderForAntd/ConfigProviderForAntd';
import RpLayout from '@roadmap-planner/components/RpLayout/RpLayout';
import '@roadmap-planner/styles/globals.css'

export default function App({ Component, pageProps }) {
     return(
          <ConfigProviderForAntd>
               <RpLayout>
                    <Component {...pageProps} />
               </RpLayout>
          </ConfigProviderForAntd>
     );
}
