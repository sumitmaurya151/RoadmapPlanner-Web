import LoginButton from '@roadmap-planner/components/LoginButton/LoginButton';
import { Button, Col, Layout, Row} from 'antd';
import styles from './RpHeader.module.scss'
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
               <Row className={styles.display_row}>
                    <Col span={18} className={styles.logo}>
                         Roadmap Planner
                    </Col>
                    <Col span={6} className={styles.login}>
                         <LoginButton/>
                    </Col>
               </Row>
          </Header>
     );
};
export default RpHeader;
