import { Layout} from 'antd';
const {Header} = Layout

const RpHeader = () => {
     return (
          <Header
               theme="light"
               style={{
                    padding: 0,
                    backgroundColor:'white',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    margin:'8px',
                    padding:'8px',
                    borderRadius:'8px',
                    fontSize:'20px',
                    fontWeight:'700'
               }}   
          >
               Roadmap Planner
          </Header>
     );
};
export default RpHeader;
