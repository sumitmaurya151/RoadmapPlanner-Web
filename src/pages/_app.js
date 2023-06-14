import ConfigProviderForAntd from '@roadmap-planner/components/ConfigProviderForAntd/ConfigProviderForAntd';
import RpLayout from '@roadmap-planner/components/RpLayout/RpLayout';
import store from '@roadmap-planner/redux/store';
import '@roadmap-planner/styles/globals.css'
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
     return(
          <Provider store={store}>
               <ConfigProviderForAntd>
                    <RpLayout>
                         <Component {...pageProps} />
                    </RpLayout>
               </ConfigProviderForAntd>
          </Provider>
     );
}
