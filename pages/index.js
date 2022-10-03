import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../assets/logo.png'
import process1 from '../assets/1.png'
import process2 from '../assets/2.png'
import process3 from '../assets/3.png'

import { useState } from 'react'
import React, { Component, useEffect } from "react";

export default function Home() {
    const primaryRoles = ["Front-end Developer", "Back-end Developer", "UI/UX Designer", "UX Researcher", "Visual Identity Designer", "Illustrator", "Project Leader"]
    const secondaryRoles = ["Data Analyst", "Game Developer", "3D Artist", "Interaction Designer", "AR/VR Designer", "& more"]

    const [email, setEmail] = useState("");


    function sendEmail() {
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:t-XUHdAp/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        email:email,
      }),

    }).then((response) => {
        console.log(response);
        window.location.replace("https://classroom.google.com/c/NTUxNDg2MTAwMDQx?cjc=w7v7cjv");
    });
    }
    
  return (
    <div className={styles.container}>
      <Head>
        <title>Dorman Hack Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥇</text></svg>"></link>
      </Head>

      <main className={styles.main}>
      <a href="https://hackclub.com/"><img style={{position: "absolute", top: 0, left: "128px", border: 0, width: "192px", zIndex: 999}} src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club"/></a>        <section style={{background: "linear-gradient(180deg, #d97d2c, #E54A19)", marginTop: "-64px", paddingTop: "64px", marginBottom: "32px", paddingBottom: "64px", marginLeft: "-128px", paddingLeft: "128px", marginRight: "-128px", paddingRight: "128px"}}>
        <header className={styles.header}>
      
        <div className={styles.headerImage}>
          <Image 
          className={styles.headerImage}
          src={logo} 
          >

          </Image>
        </div>
        </header>
        <h1 style={{color: "#fff", marginBottom: "16px", fontWeight: "600"}} className={styles.title}>
          A Place for Makers
        </h1>

        <p style={{textAlign: "center", color: "#fff"}} className={styles.description}>
          We’re a DHS student organization utilizing technology <br/>
          to improve the human condition
        </p>
        </section>

        <section style={{marginBottom: "64px", marginTop: "32px"}}>
          <h2 style={{marginBottom: "24px"}} className={styles.secondaryTitle}>We innovate by</h2>
          <div className={styles.processContainer}>
          <div>
            <div style={{marginBottom: "0px"}}className={styles.processImage}>
            <Image 
          className={styles.processImage}
          src={process1} 
          >

          </Image>
            </div>
            {/* Don't forget alt text */}
            <h3 style={{fontWeight: "500", opacity: 0.87, marginBottom: "4x", marginTop: "4px"}} className={styles.description}>
              Empathizing
            </h3>
            <p className={styles.description}>
              We recognize problems in the lives of others.
            </p>
          </div>
          <div>
            <div className={styles.processImage}>
            <Image 
          className={styles.processImage}
          src={process2} 
          >

          </Image>
            </div>
            {/* Don't forget alt text */}
            <h3 style={{fontWeight: "500", opacity: 0.87, marginBottom: "4x", marginTop: "4px"}} className={styles.description}>
              Building
            </h3>
            <p className={styles.description}>
              We research, design, and develop digital solutions.
            </p>
          </div>
          <div>
            <div className={styles.processImage}>
            <Image 
          className={styles.processImage}
          src={process3} 
          >

          </Image>
            </div>
            {/* Don't forget alt text */}
            <h3 style={{fontWeight: "500", opacity: 0.87, marginBottom: "4x", marginTop: "4px"}} className={styles.description}>
              Launching
            </h3>
            <p className={styles.description}>
             Finally, we offer our solution to users and continue to iterate.
            </p>
          </div>
          </div>
        </section>

        <section style={{paddingTop: "64px", paddingBottom: "63px", marginBottom: "48px"}} className={styles.packSection}>
          <h2 style={{marginBottom: "12px"}} className={styles.secondaryTitle}>
            Collaborate as a <strong>Pack</strong>
          </h2>
          <p style={{textAlign: "center", marginBottom: "24px"}} className={styles.description}>
            Each member of each pack has unique talents and <br/>
            interests and it is this diversity in skillset that allows us to innovate. 
          </p>
          <div className={styles.potentialRoleContainer}>
          {primaryRoles.map((role, i) => (
            <div className={styles.potentialRole} key={i}>
              <p>{role}</p>
            </div>
          ))}
          </div>
          <div style={{marginTop: "12px"}} className={styles.potentialRoleContainer}>
          {secondaryRoles.map((role, i) => (
            <div className={styles.potentialRole} key={i}>
              <p>{role}</p>
            </div>
          ))}
          </div>
        </section>
        <section style={{marginBottom: "48px"}}>
          <div className={styles.containEnd}>

            <div style={{paddingRight: "64px"}} className={styles.endingText}>
            <h2 style={{textAlign: "left", marginBottom: "16px"}} className={styles.secondaryTitle}>
            Become a member of 
            the <strong>Dorman Hack Club</strong>
            </h2>
            <p style={{marginBottom: "12px"}} className={styles.description}>
            We’re the space where you will learn how to harness your inner creative super powers.
            </p>

            <p style={{marginBottom: "12px"}} className={styles.description}>
            You’re welcome to come to Dorman Hack Club every Monday afterschool in room C104. 
            </p>

            <p style={{marginBottom: "0px", marginTop: "12px", opacity: 0.87, fontSize: 24, lineHeight: 1.25}} className={styles.description}>
            Email
            </p>
            <input className={styles.input}type="email" placeholder="Corgi@d6edu.edu" onChange={e => setEmail(e.target.value)} />
              {
                  email.includes("d6edu.org") || email == "" ? 
                  (<p></p>) : 
                  (<p style={{marginTop: "0px", marginBottom: "12px", fontSize: "18px", color: "#E54A19"}}>Please enter your Dorman Email Address</p>)
              }
              {
                  email.includes("d6edu.org") ? 
                  (<button className={styles.button} onClick={sendEmail} disabled={false}>
                    <p className={styles.buttonText}>Join Club</p>
                  </button>) : 
                  (<button className={styles.button} style={{opacity: 0.38}} disabled={true}>
                    <p className={styles.buttonText}>Join Club</p>
                  </button>)
              }
            </div>
            <div className={styles.endingScreen}>

            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Dorman High School Hack Club</p>
      </footer>
    </div>
  )
}
