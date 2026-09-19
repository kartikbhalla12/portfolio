"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSwipeable } from "react-swipeable";
import classNames from "classnames";

import ThemeSlider from "@components/common/ThemeSlider";

import useNavScroll from "@hooks/useNavScroll";
import useBlur from "@hooks/useBlur";
import useHideOverflow from "@hooks/useHideOverflow";
import { isActiveNavLink, resolveNavHref } from "@utils/navHref";

import { MobileNavbarProps } from "./mobileNavbar.interface";

import Logo from "@icons/logo.svg";
import styles from "./mobileNavbar.module.scss";

const MobileNavbar: FC<MobileNavbarProps> = ({
  navLinks,
  ...rest
}) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { hideNavbar, isTop, activeSection } = useNavScroll(45, navLinks);
  const homeHref = pathname === "/" ? "#home" : "/";

  const NavHandler = useSwipeable({
    onSwipedRight: () => setIsMenuOpen(false),
  });
  useBlur(isMenuOpen);
  useHideOverflow(isMenuOpen);

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.topNavbarContainer, {
          [styles.transparent]: isMenuOpen,
          [styles.hide]: hideNavbar,
          [styles.top]: isTop,
        })}
      >
        <a href={homeHref} className={styles.logo} aria-label="Go to homepage">
          <Logo alt="kb-logo" className={styles.icon} aria-hidden="true" />
        </a>

        <button
          type="button"
          className={classNames(styles.menuButton, {
            [styles.isMenuOpen]: isMenuOpen,
          })}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className={styles.menuButtonBurger} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={classNames(styles.sideNavbarContainer, {
          [styles.isMenuOpen]: isMenuOpen,
        })}
        onClick={() => setIsMenuOpen(false)}
        {...NavHandler}
        role={isMenuOpen ? "dialog" : undefined}
        aria-modal={isMenuOpen ? true : undefined}
        aria-hidden={!isMenuOpen}
        aria-label={isMenuOpen ? "Navigation menu" : undefined}
      >
        <div className={styles.sideNavbar} onClick={(e) => e.stopPropagation()}>
          <nav className={styles.linksContainer} aria-label="Main navigation">
            {navLinks.map((link) => {
              const href = resolveNavHref(link, pathname);
              const className = classNames({
                [styles.active]: isActiveNavLink(link, pathname, activeSection),
                [styles.accentButton]: link.title === "Resume",
              });
              const ariaLabel =
                link.target === "_blank"
                  ? `${link.title} (opens in new tab)`
                  : link.title;

              if (href.startsWith("#")) {
                return (
                  <a
                    key={link.title}
                    href={href}
                    className={className}
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={ariaLabel}
                  >
                    {link.title}
                  </a>
                );
              }

              return (
                <Link
                  key={link.title}
                  href={href}
                  target={link.target}
                  rel={link.rel}
                  className={className}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={ariaLabel}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          <div className={styles.themeSliderContainer}>
            <ThemeSlider {...rest} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
