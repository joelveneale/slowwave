import * as React from "react";
import logo from "../images/sw_logotype.svg";
import joel from "../images/joel.png";

import styles from "./index.module.scss";

const IndexPage = () => {
  return (


    <div className={styles.page}>

    <head><title>Slow Wave Audio</title><link rel="icon" href="../images/sw_icon-white.png"></link></head>
      <img src={logo} className={styles.logo} />
      <div className={styles.text}>
        With more than 10 years experience working in the television and media
        industries, we provide meticulous attention to detail on every job, from
        the prep right through to delivery. With experience in single,
        multi-camera and fixed rig location shoots, we strive to deliver top
        quality, and in sync audio whatever the circumstances and pride
        ourselves in end-to-end audio solutions for every situation.
      </div>
      <div className={styles.soundsGood}>
        Sounds good?
        <div>
          <strong><a href = "mailto: joel@slowwaveaudio.tv">Get in touch</a></strong> to start talking about your next project
          today.
        </div>
        <img src={joel} className={styles.joelImage} />
      </div>
    </div>
  );
};

export default IndexPage;
