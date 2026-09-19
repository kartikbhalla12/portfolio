import AboutContainer from "@components/Home/AboutContainer";
import { CmsImage } from "src/sanity/CmsImage";
import type { HomeContent } from "src/sanity/types";
import styles from "@components/Home/home.module.scss";

const Home = ({ content }: { content: HomeContent }) => {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.home}>
        <div className={styles.content}>
          <div className={styles.information}>
            <div className={styles.heading}>
              <p className={styles.greeting}>{content.greeting}</p>
              <h1>{content.name.replace(/\.$/, '')}</h1>
              <p className={styles.subtitle}>{content.subtitle}</p>
            </div>

            <AboutContainer
              className={styles.about}
              about={content.about}
              companyName={content.companyName}
              companyUrl={content.companyUrl}
              email={content.email}
              ctaLabel={content.ctaLabel}
              ctaHref={content.ctaHref}
            />
          </div>
          {content.photo && (
            <div className={styles.imageContainer}>
              <CmsImage
                image={content.photo}
                fill
                sizes="(max-width: 768px) 210px, (max-width: 1024px) 225px, (max-width: 1280px) 263px, (max-width: 1366px) 300px, 338px"
                alt={content.photoAlt || "Kartik Bhalla"}
                priority
                loading="eager"
                fetchPriority="high"
                quality={75}
                draggable={false}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
