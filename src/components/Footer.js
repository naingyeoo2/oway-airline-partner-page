import React, { Component } from "react";
import { FacebookOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { WeiboOutlined } from "@ant-design/icons";

import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="app-container">
            <div className="footer-icon">
              <FacebookOutlined className="facebook-outlined"/>
              <InstagramOutlined className="intstagram-outlined"/>
              <WeiboOutlined className="weibo-outlined"/>
            </div>
            <p>Copyright &copy; 2020 oway.com.mm developed by Naing Ye Oo.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
