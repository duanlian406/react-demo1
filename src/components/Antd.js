import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon, Typography, Divider } from 'antd';
const { Title, Paragraph, Text } = Typography;

class Antd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            items: [
                { id: 1, title: 'aaa' },
                { id: 2, title: 'bbb' },
                { id: 3, title: 'ccc' },
            ],
            text: 'This text can edit'
        };
    }
    toggleLoading = () => {
        this.setState({
            loading: { delay: 2000 }
        });
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 4000)
    }
    handleMenuClick = (e) => {
        console.log(e);
    }
    editText = (str) => {
        this.setState({
            text: str
        });
    }
    onCopy = (e) => {
        console.log(e)
    }
    render() {
        return (
            <div>
                <Button type="primary" >Primary Button</Button>
                <Button type="danger" icon="search">Search</Button>
                <Button type="dashed" size="small">Link</Button>
                <Button type="default" size="large" disabled icon="stop">Default</Button>
                <Button type="primary" loading={this.state.loading} onClick={this.toggleLoading} block>Loading</Button>
                <Dropdown overlay={<Menu onClick={this.handleMenuClick}>{this.state.items.map((item, k) => <Menu.Item key={item.id}>{item.title}</Menu.Item>)}</Menu>}>
                    <Button>
                        Actions <Icon type="down" />
                    </Button>
                </Dropdown>
                <Button.Group>
                    <Button icon="left"></Button>
                    <Button icon="right"></Button>
                </Button.Group>
                <Icon type="sync" spin style={{ color: 'red', fontSize: '30px' }}></Icon>
                <Typography>
                    <Title>I am a Title</Title>
                    <Paragraph>
                        In the process of internal desktop applications development, many different design specs and
                        implementations would be involved, which might cause designers and developers difficulties and
                        duplication and reduce the efficiency of development.
                    </Paragraph>
                    <Paragraph>
                        After massive project practice and summaries, Ant Design, a design language for background
                        applications, is refined by Ant UED Team, which aims to{' '}
                        <Text strong>
                            uniform the user interface specs for internal background projects, lower the unnecessary
                            cost of design differences and implementation and liberate the resources of design and
                            front-end development.
                        </Text>
                    </Paragraph>
                    <Paragraph>
                        <ul>
                            {this.state.items.map((v, k) => {
                                return <li key={k}>{v.title}</li>
                            })}
                        </ul>
                    </Paragraph>
                    <Divider />
                    <div>
                        <Paragraph editable={{ onChange: this.editText }}>{this.state.text}</Paragraph>
                        <Paragraph copyable>This text can copy</Paragraph>
                        <Paragraph copyable={{ text: 'copy text', onCopy: this.onCopy }} strong type="danger">Click to copy text</Paragraph>
                    </div>
                </Typography>
            </div>
        );
    }
}

export default Antd;