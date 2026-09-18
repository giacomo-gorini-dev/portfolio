import styles from "./SkillsPage.module.css";

import useSkills from "../hooks/useSkills";

import SkillPreview from "../components/SkillPreview";
import SpiralBackground from "../components/SpiralBackground";

function SkillsPage() {
  const { skills, error, isLoading, refetch } = useSkills();
  return (
    <section className={styles.skills}>
      <SpiralBackground></SpiralBackground>
      <div className={styles.header}>
        <h1>Skills</h1>
        <h2>My personal skills</h2>
      </div>
      <div className={styles["skills-section"]}>
        {!error &&
          !isLoading &&
          (skills?.length > 0 ? (
            skills.map((s) => <SkillPreview key={s.id} skill={s} />)
          ) : (
            <h2 style={{ color: "var(--text-secondary)", fontSize: "1.5rem" }}>
              Nothing to see here yet
            </h2>
          ))}
        {error && (
          <div className={styles.error}>
            <span>Something gone wrong</span>

            <button onClick={() => refetch()}>Try Again</button>
          </div>
        )}
        {isLoading && (
          <div className={styles.loaderContainer}>
            <span>Loading Projects</span>
            <div className={styles.loadingDots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
export default SkillsPage;
