import { Button, ConfigProvider } from 'antd'
import React from 'react'


const theme = {
     token: {
       colorPrimary: '087ea4',
     },
};

function ConfigProviderForAntd({children}) {
     return (
          <ConfigProvider theme={theme}>
               {children}
          </ConfigProvider>
     )
}

export default ConfigProviderForAntd