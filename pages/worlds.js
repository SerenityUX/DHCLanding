import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/worlds.module.css'
import logo from '../assets/logo.png'
import process1 from '../assets/1.png'
import process2 from '../assets/2.png'
import process3 from '../assets/3.png'

import { useState } from 'react'
import React, { Component, useEffect } from "react";

export async function getServerSideProps(context) {

    const worlds = await fetch(
        "https://x8ki-letl-twmt.n7.xano.io/api:SkGqL9Pk/GetWorlds"
    ).then((res) => res.json())
    return { 
        props: {
            worlds
        } 
    }

}
export default function Home(props) {
    const primaryRoles = ["Front-end Developer", "Back-end Developer", "UI/UX Designer", "UX Researcher", "Visual Identity Designer", "Illustrator", "Project Leader"]
    const secondaryRoles = ["Data Analyst", "Game Developer", "3D Artist", "Interaction Designer", "AR/VR Designer", "& more"]

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [link, setLink] = useState("");

    function sendWorld() {
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:SkGqL9Pk/CreateWorld", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        name: name,
        author: author,
        link: link
      }),

    }).then((response) => {
        console.log(response);
    });
    }
    
  return (
    <div>
      <Head>
        <title>Dorman Hack Club Worlds</title>
        <meta name="description" content="Worlds Page" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥇</text></svg>"></link>
      </Head>

      <main className={styles.background}>
            <div className={styles.itemBackground}>
                <div className={styles.topBar}>
                    <h1 className={styles.title}>Dorman Hack Club Worlds</h1>
                    <p className={styles.add} onClick={() => {
                        console.log(props.worlds)
                    }}>Add Your Own</p>
                </div>
                {props.worlds.map((world, i) => (
                <div key={i} className={styles.game}>
                    <a href={world.link}>
                        <p>{world.name}</p>
                        <p>{world.author}</p>
                    </a>
                </div>
                ))}
            </div>
      </main>
    </div>
  )
}
