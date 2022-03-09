import { useEffect, useState } from "react";
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
import { Menu, Layout } from "antd";
import SearchCollections from "components/SearchCollections";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Text from "antd/lib/typography/Text";
import NFTMarketTransactions from "components/NFTMarketTransactions";
import Logo from "../src/components/img/logo.png";
import "./style.css";
import { MdOutlineLocalGroceryStore, MdOutlineLiveHelp } from "react-icons/md";
import { SiHackthebox, SiDiscord } from "react-icons/si";
import { RiFileList2Line } from "react-icons/ri";
import {  AiOutlineTwitter } from "react-icons/ai";
import { FiUsers, FiHelpCircle } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";


const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#fff",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 2,
    width: "100%",
    background: "#09060D",
    display: "flex",
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    color: "#fff",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
    marginLeft: -95,
  },
  teste: {
    backgroundColor: "#0D0912",
    width: "100%",
    height: "7%",
    zIndex: 2,
    position: "fixed",
    marginTop: 62,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  teste2: {
    color: "rgba(218, 218, 218, 0.901)",
  },
  teste4: {
    backgroundColor: "blue",
    borderRadius: 5,
    width: 170,
  },
  logo: {
    width: "95px",
    height: "28px",
    marginLeft: 68,
    marginBottom: 2,
    marginTop: 50,
  },
  navbar_lateral: {
    backgroundColor: "#0d141a",
    width: "12%",
    height: "100%",
    position: "fixed",
    zIndex: 1,
    display: "block",
    borderRight: "2px solid #314c64",
    justifyContent: "center",
    alignItems: "center",
  },
  text_navbar_lateral: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  teste3: {
    cursor: "pointer",
  },
  testenav: {
    display: "inline-block",
    verticalAlign: "middle",
  },
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
    <Layout
      style={{ height: "100vh", overflow: "auto", background: "#131d26" }}
    >
      <Router>
        <div style={styles.navbar_lateral} className="navbar-lateral">
          <div style={styles.text_navbar_lateral}>
            <ul className="navbar-lateral-ul">
              <a href="/NFTMarketPlace">
                <img src={Logo} style={styles.logo} />
              </a>
              <div style={{ marginTop: 60 }}>
                <li style={styles.teste3}>
                  <NavLink style={styles.teste2} to="/NFTMarketPlace">
                    <MdOutlineLocalGroceryStore style={{ fontSize: 22 }} />
                    Marketplace
                  </NavLink>
                </li>
                <li style={styles.teste3}>
                  <NavLink style={styles.teste2} to="/nftBalance">
                    <SiHackthebox /> My Collection
                  </NavLink>
                </li>
                <li style={styles.teste3}>
                  <NavLink style={styles.teste2} to="/Transactions">
                    <RiFileList2Line style={{ color: "white" }} /> Transactions
                  </NavLink>
                </li>
                <li>
                  <div class="dropdown">
                    <h4 class="dropbtn">
                      <FiUsers />  Social Media
                    </h4>
                    <div class="dropdown-content">
                      <a href="#"><SiDiscord />  Discord</a>
                      <a href="#"><FaTwitter />  Twitter</a>
                    </div>
                  </div>
                </li>
                <li style={styles.teste3}>
                  <h4 class="h4-navbar" style={styles.teste2} to="/Transactions">
                    <FiHelpCircle style={{ color: "white" }} /> Support
                  </h4>
                </li>
              </div>
              <div className="chains-style">
                <Chains />
              </div>
            </ul>
            <ul></ul>
          </div>
        </div>

        <div style={styles.content}>
          <Switch>
            <Route path="/nftBalance"></Route>
            <Route path="/NFTMarketPlace">
              <NFTTokenIds
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            </Route>
            <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route>
          </Switch>
          <Redirect to="/NFTMarketPlace" />
        </div>
      </Router>
      <Footer style={{ textAlign: "center", backgroundColor: "#131d26" }}>
        <Text style={{ display: "block", color: "white" }}>
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

        <Text style={{ display: "block", color: "white" }}>
          🙋 You have questions? Ask them on the {""}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29"
          >
            Moralis forum
          </a>
        </Text>

        <Text style={{ display: "block", color: "white" }}>
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
