import styles from "./ContactPage.module.css";
import imgIg from "../assets/instagram.png";
import imgEmail from "../assets/email.png";
import imgGithub from "../assets/github.png";
import imgAirplane from "../assets/airplane.png";
import SpiralBackground from "../components/SpiralBackground";
import { useState } from "react";
function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f8fa6388-1a1d-42b9-b06f-32db9d646d4e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success" : "Error");

    if (data.success) event.target.reset();
  };
  return (
    <section className={styles.contact}>
      <SpiralBackground />
      <form className={styles["form-contact"]} onSubmit={onSubmit}>
        <h2>Contact Me</h2>
        <div className={styles["form-fields"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="object">Your Object</label>
            <input type="text" id="object" name="object" required />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="body">Write your Body</label>
            <textarea
              cols="10"
              rows="10"
              name="body"
              id="body"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit">Send Email</button>
        { result && <p className={result === "Error" ? styles.fail : styles.success}>
          {result}
        </p>}
      </form>
      <div className={styles["contact-data"]}>
        <h2>Where to Find Me</h2>
        <img src={imgAirplane} alt="." className={styles.airplane} />
        <ul className={styles["contact-list"]}>
          <p>My profiles:</p>
          <li>
            <img src={imgEmail} alt="Email: " />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=giacomo.gorini.dev@gmail.com&su=Contatto%20dal%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              giacomo.gorini.dev@gmail.com
            </a>
          </li>
          <li>
            <img src={imgIg} alt="Instagram: " />
            <a
              href="https://www.instagram.com/giacomo.gorini.dev/"
              target="_blank"
            >
              giacomo.gorini.dev
            </a>
          </li>
          <li>
            <img src={imgGithub} alt="Git Hub: " />
            <a href="https://github.com/giacomo-gorini-dev" target="_blank">
              giacomo-gorini-dev
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default ContactPage;
