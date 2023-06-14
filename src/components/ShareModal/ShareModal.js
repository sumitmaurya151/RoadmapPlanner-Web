import { CloseOutlined, WhatsAppOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, CopyOutlined } from '@ant-design/icons'
import { Col, Modal, Row, Input, Button } from 'antd'
import React, { useState } from 'react'
import styles from './ShareModal.module.scss'

function ShareModal({ isModalOpen, hideModal }) {
    const [copied, setCopied] = useState(false);
    const copyLink = () => {
        // Logic to copy the share link
        const shareLink = 'https://example.com/share'; // Replace with your share link
        navigator.clipboard.writeText(shareLink);
        // Display a success message or perform other actions
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        },5000)
    };

    return (
        <Modal
            open={isModalOpen}
            closable={false}
            footer={null}
            centered
            width={400}
        >
            <Row>
                <Col span={12} style={{ fontWeight: "500", fontSize: "15px" }}>
                    Share
                </Col>
                <Col span={12} align="right">
                    <CloseOutlined onClick={hideModal} />
                </Col>

            </Row>
            <Row justify="center" style={{ padding: "0px", margin:"20px" }}>
                <Col span={6} className={styles.share_icon}>
                    <WhatsAppOutlined style={{ fontSize: '24px' }} />
                </Col>
                <Col span={6} className={styles.share_icon}>
                    <GithubOutlined style={{ fontSize: '24px' }} />
                </Col>
                <Col span={6} className={styles.share_icon}>
                    <LinkedinOutlined style={{ fontSize: '24px' }} />
                </Col>
                <Col span={6} className={styles.share_icon}>
                    <MailOutlined style={{ fontSize: '24px' }} />
                </Col>
            </Row>
            
            <Row gutter={[16, 24]}>
                <Col span={16}>
                    <Input defaultValue="https://example.com/share" readOnly />
                </Col>
                <Col span={0}>
                </Col>
                <Col span={6}>
                    <Button icon={<CopyOutlined />} onClick={copyLink} disabled={copied} >{copied ? 'Copied' : 'Copy'}</Button>
                </Col>
            </Row>
        </Modal>
    )
}

export default ShareModal