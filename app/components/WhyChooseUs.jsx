import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

const REASONS = [
  {
    title: "Excellent team of professionals",
    body: "Our competent, experienced and reliable teams of shipping professionals are ready to serve you round the clock with a dedicated focus on customer needs.",
  },
  {
    title: "Fully certified and registered",
    body: "Our company is duly registered with all government agencies whose activities impact on shipping operations.",
  },
  {
    title: "Focused on perfect service delivery",
    body: "Our main focus is to increase efficiency and enable smoother operations in the Nigerian ports.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section} aria-labelledby="why-choose-us-heading">
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/why-choose-us.jpg"
              alt="Offshore rig serviced by ArrowMarine"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.contentCol}>
          <h2 id="why-choose-us-heading" className={styles.eyebrow}>
            Why choose us
          </h2>

          <dl className={styles.reasons}>
            {REASONS.map(({ title, body }) => (
              <div key={title} className={styles.reason}>
                <dt className={styles.reasonTitle}>{title}</dt>
                <dd className={styles.reasonBody}>{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
