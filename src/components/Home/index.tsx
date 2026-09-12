import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

import AboutContainer from "@components/Home/AboutContainer";
import { HomeProps } from "@components/Home/home.interface";
import styles from "@components/Home/home.module.scss";

const Home: FC<HomeProps> = ({ isMobile }) => {
  return (
    <div id="home" className={styles.container}>
      <div className={classNames(styles.home, { [styles.mobile]: isMobile })}>
        <div className={styles.content}>
          <div className={styles.information}>
            <h1>
              <span className={styles.greeting}>Hey, my name is</span>
              Kartik Bhalla.
              <span className={styles.subtitle}>
                A Frontend Software Engineer.
              </span>
            </h1>

            <AboutContainer className={styles.about} />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/kartik-2.webp"
              fill
              sizes="(max-width: 768px) 210px, (max-width: 1024px) 225px, (max-width: 1280px) 263px, (max-width: 1366px) 300px, 338px"
              alt="Kartik Bhalla - Frontend Software Engineer"
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAALCAYAAABCm8wlAAABUUlEQVR4AQzNSUsCYQCA4Xe+ymXKDu0bQhGZERFR0Aad+ivd+i3do04eiupQRHu0YQVBq5JhC1oZpg5m6pijzpd/4HnEzuq8PDg6lUu7t9Kz65eevYD0HATl8qFfLu3fSNHS3IQw3gk9LBL2bVKZT2A30/i8C5xvzSEqKuAx4OXqYpvI5RHv1/MEfRucnaxze3OHOD7xEgpr/CQliXiST/8raysLRKMZigUF4epx4aiuw6a2omV0YlkF469ITs9jtVgRe8dXPL1l0Ix6MrkCk0MjdAzP0N7Vh6JIxOPTM59l3tYyiOiaYPk+RUmpAUc/UlERoY8v4gmNROQFe0MnyAKGniT9m+VbyyEsNY7ybycWDqDraUxHO8ngKWbqg+mJYcTUQDezYw00tzmR0qTKqqLUuxh1qow3lRBWSxUW1Y6ttg6zZGCaJRqdbtzuXrJF+AcAAP///yalJQAAAAZJREFUAwAncZ7Mo6TXgQAAAABJRU5ErkJggg=="
              draggable={false}
            />
          </div>
          <AboutContainer className={styles.aboutMobile} />
        </div>
      </div>
    </div>
  );
};

export default Home;
