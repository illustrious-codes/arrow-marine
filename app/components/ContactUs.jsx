"use client";

import { useState } from "react";
import styles from "./ContactUs.module.css";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactUs() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | sent | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data?.error || "Something went wrong. Please try again."
        );
      }

      setStatus("sent");
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <section className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <div className={styles.info}>
          <p className={styles.eyebrow}>Contact us</p>
          <h1 id="contact-heading" className={styles.heading}>
            Get in touch
          </h1>

          <dl className={styles.details}>
            <div className={styles.row}>
              <dt>Address</dt>
              <dd>
                1, Admiralty Road (Admiralty House) off Fatai Idowu Arobieke
                Street, Lekki Phase 1, Lagos.
              </dd>
            </div>

            <div className={styles.row}>
              <dt>Office</dt>
              <dd>
                Telephone: <a href="tel:+2341290047">(+234)-1-2900947</a>
                <br />
                Mobile: <a href="tel:+2348023242529">+234-8023242529</a>
              </dd>
            </div>

            <div className={styles.row}>
              <dt>Email</dt>
              <dd className={styles.emails}>
                <a href="mailto:ops@arrowmarinelimited.com">
                  ops@arrowmarinelimited.com
                </a>
                <a href="mailto:mgmt@arrowmarinelimited.com">
                  mgmt@arrowmarinelimited.com
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className={styles.submit}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Submit"}
          </button>

          {status === "sent" && (
            <p className={styles.confirmation} role="status">
              Thanks, your message has been sent. We&rsquo;ll be in touch
              shortly.
            </p>
          )}

          {status === "error" && (
            <p className={styles.errorText} role="alert">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
