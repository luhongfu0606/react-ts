import Layout, {Content, Header} from "antd/es/layout/layout";
import Head from "./components/head/Head";
import Router from "./router/router";

export default function App() {
    return (
        <div className="App">
            <Layout>
                <Header>
                    <Head/>
                </Header>
                <Content>
                    <Router/>
                </Content>
            </Layout>
        </div>
    );
}

