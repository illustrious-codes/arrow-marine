import styles from "./ManagementTeam.module.css";

const TEAM = [
  {
    name: "Thanos Theocharis",
    title: "Chief Executive Officer",
  },
  {
    name: "Rosaline Abolagba",
    title: "Deputy Assistant Managing Director",
    email: "ops@arrowmarinelimited.com",
    phones: ["+234-1-2900-947", "+234-81800-72866"],
  },
  {
    name: "Adigun Sikiru Olakunle",
    title: "Operations",
    phones: ["+234-8023242529"],
  },
  {
    name: "Okike Ruddy Patrick",
    title: "Manager",
    email: "mgmt@arrowmarinelimited.com",
    phones: ["+234-1-2900-947", "+234-8164555-881", "+234-9099696-8990"],
  },
  {
    name: "Olorunshola Taiwo",
    title: "Operations",
    phones: ["08023363415"],
  },
];

const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function ManagementTeam() {
  return (
    <section
      className={styles.section}
      aria-labelledby="management-team-heading"
    >
      <div className={styles.inner}>
        <h2 id="management-team-heading" className={styles.heading}>
          The management team
        </h2>

        <ul className={styles.grid}>
          {TEAM.map(({ name, title, email, phones }) => (
            <li key={name} className={styles.card}>
              <div className={styles.avatar} aria-hidden="true">
                {initials(name)}
              </div>
              <p className={styles.name}>{name}</p>
              <p className={styles.title}>{title}</p>

              {(email || phones) && (
                <ul className={styles.contact}>
                  {email && (
                    <li>
                      <a href={`mailto:${email}`}>{email}</a>
                    </li>
                  )}
                  {phones?.map((phone) => (
                    <li key={phone}>
                      <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
