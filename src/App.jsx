import { useEffect, useState} from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout} from "antd";
import SearchCollections from "components/SearchCollections";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Text from "antd/lib/typography/Text";
import NFTMarketTransactions from "components/NFTMarketTransactions";
import Logo from '../src/components/img/logo.png'
import './style.css'
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#fff",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 2,
    width: "100%",
    background: "#191820",
    display: "flex",
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    color:"#fff"
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
    marginRight:25,
  },
  teste:{
    backgroundColor: "#191820",
    width: "100%",
    height: "7%",
    zIndex: 2,
    position: "fixed",
    marginTop: 62,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  teste2:{
    color: "rgba(218, 218, 218, 0.801)",
  },
  teste4:{
    backgroundColor:"blue",
    borderRadius:5,
    width: 170,
  },
  logo:{
    width: "85px",
    height: "24px",
    marginLeft:25,
    marginBottom:5
  },
  navbar_lateral:{
    backgroundColor: "#191820",
    width: "12%",
    height: "100%",
    position: "fixed",
    zIndex:1,
    display: "block",
  },
  text_navbar_lateral:{
    marginTop:90,
    display: "flex",
    justifyContent: "center",
    marginLeft:10,
  },
  testenav:{
    display: "inline-block",
    verticalAlign: "middle",
  }
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();



  const [inputValue, setInputValue] = useState("explore");

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto", background: "#1d1c26" }}>
      <Router>
        <Header style={styles.header}>
        <img src={Logo} style={styles.logo}/>
        <SearchCollections setInputValue={setInputValue}/>
          <div style={styles.headerRight}>
            <Chains />
          </div>
        </Header>

        <div style={styles.navbar_lateral} className="navbar-lateral">

          <div style={styles.text_navbar_lateral}>
            <ul className="navbar-lateral-ul">
              <li style={styles.teste3}><NavLink style={styles.teste2} to="/NFTMarketPlace">🛒 Marketplace</NavLink></li> 
              <li style={styles.teste3}><NavLink style={styles.teste2} to="/nftBalance">🖼 My Collection</NavLink></li> 
              <li style={styles.teste3}><NavLink style={styles.teste2} to="/Transactions">📑 Transactions</NavLink></li> 
            </ul>
            <ul>
            </ul>
          </div>
        </div>

        <div style={styles.content}>
          <Switch>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/NFTMarketPlace">
              <NFTTokenIds inputValue={inputValue} setInputValue={setInputValue}/>
            </Route>
            <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route>
          </Switch>
          <Redirect to="/NFTMarketPlace" />
        </div>
      </Router>
      <Footer style={{ textAlign: "center", backgroundColor:"#1d1c26" }}>
        <Text style={{ display: "block" }}>
          ⭐️ Please star this{" "}
          <a
            href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            boilerplate
          </a>
          , every star makes us very happy!
        </Text>

        <Text style={{ display: "block" }}>
          🙋 You have questions? Ask them on the {""}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29"
          >
            Moralis forum
          </a>
        </Text>

        <Text style={{ display: "block" }}>
          📖 Read more about{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
          >
            Moralis
          </a>
        </Text>
      </Footer>
    </Layout>
  );
};



export default App;
