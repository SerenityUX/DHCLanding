import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
    var postmark = require("postmark");
    var client = new postmark.ServerClient("8b54d412-1866-4dbb-8882-04e4e60526f4");
    const roles = ["Front-end Developper", "Back-end Developer", "UI/UX Designer", "UX Researcher", "Visual Identity Designer", "Illustrator", "Project Leader"]
    const [email, setEmail] = useState("");

    function sendEmail() {
      console.log("Email should have been sent")
      client.sendEmail({
        "From": "tstubblefield487@d6edu.org",
        "To": email,
        "Subject": "Hello from Postmark",
        "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
        "TextBody": "Hello from Postmark!",
        "MessageStream": "inbound"
      }).then((response) => {
        console.log(response)
      })
    }
  return (
    <div className={styles.container}>
      <Head>
        <title>Dorman Hack Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥇</text></svg>"></link>
      </Head>

      <main className={styles.main}>
        <header>
          <div>

          </div>
          <p>Dorman Hack Club</p>
        </header>
        <h1 className={styles.title}>
          A Place for Dorman Makers
        </h1>

        <p className={styles.description}>
          We’re a multidisciplinary student organization utilizing technology
          to improve the human condition
        </p>

        <section>
          <h2>We innovate by</h2>
          <div>
          <div>
            <div className={styles.processImage}>
            </div>
            {/* Don't forget alt text */}
            <h3>
              Empathizing
            </h3>
            <p>
              We recognize problems in the lives of others.
            </p>
          </div>
          <div>
            <div className={styles.processImage}>
            </div>
            {/* Don't forget alt text */}
            <h3>
              Building
            </h3>
            <p>
              We research, design, and develop digital solutions.
            </p>
          </div>
          <div>
            <div className={styles.processImage}>
            </div>
            {/* Don't forget alt text */}
            <h3>
              Launching
            </h3>
            <p>
             We offer our solution to users 
            </p>
          </div>
          </div>
        </section>

        <section>
          <h2>
            Collaborate as a Pack
          </h2>
          <p>
            Each member of each team has unique strengths and
            skills and it is this diversity in skillset that allows us to innovate. 
          </p>
          <div>
          {roles.map((role, i) => (
            <div key={i}>
              <p>{role}</p>
            </div>
          ))}
          </div>
        </section>
        <section>
          <div>
          <h2>
          Become a member of 
          the Dorman Hack Club
          </h2>
          <p>
          Coding is a super power, and through utilizing code we can make the impossible, possible. We’re the space where you will learn how to harness the power of code.
          <br/>
          <br/>
          You’re welcome to come to Dorman Hack Club every Monday afterschool in room C104. 
          <br/>
          <br/>
          Enter your email below to offically sign up
          </p>
          <input type="email" placeholder="Corgi@d6edu.edu" onChange={e => setEmail(e.target.value)} />
            {
                email.includes("d6edu.org") || email == "" ? 
                <p></p> : 
                <p>Please enter your Dorman Email Address</p>
            }
            {
                email.includes("d6edu.org") ? 
                <button onClick={sendEmail} disabled={false}>
                  <p>Submit</p>
                </button> : 
                <button disabled={true}>
                  <p>Submit</p>
                </button>
            }
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Dorman High School's Hack Club</p>
      </footer>
    </div>
  )
}
