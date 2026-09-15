"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/towage-pulling", label: "Towage & Pulling Operation" },
      { href: "/services/speedboat-workboat", label: "Speed Boat & Work Boat" },
    ],
  },
  { href: "/contact", label: "Contact Us" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile panel
  const [scrolled, setScrolled] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false); // desktop Services dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile Services accordion
  const dropdownRef = useRef(null);

  useEffect(() => {
    setOpen(false);
    setDesktopDropdown(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setDesktopDropdown(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!desktopDropdown) return;
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdown(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [desktopDropdown]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isParentActive = (link) =>
    isActive(link.href) ||
    (link.children && link.children.some((c) => isActive(c.href)));

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="ArrowMarine home">
          <Image
            src="/images/arrow_marine_logo.png"
            alt="ArrowMarine"
            width={220}
            height={40}
            priority
            className={styles.logo}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Main">
          <ul className={styles.navList}>
            {LINKS.map((link) => {
              const { href, label, children } = link;

              if (!children) {
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`${styles.navLink} ${
                        isActive(href) ? styles.navLinkActive : ""
                      }`}
                      aria-current={isActive(href) ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={href}
                  className={styles.navItemWithChildren}
                  ref={dropdownRef}
                  onMouseEnter={() => setDesktopDropdown(true)}
                  onMouseLeave={() => setDesktopDropdown(false)}
                >
                  <Link
                    href={href}
                    className={`${styles.navLink} ${styles.navLinkTrigger} ${
                      isParentActive(link) ? styles.navLinkActive : ""
                    }`}
                    aria-current={isActive(href) ? "page" : undefined}
                  >
                    {label}
                    <span
                      className={`${styles.caret} ${
                        desktopDropdown ? styles.caretOpen : ""
                      }`}
                      aria-hidden="true"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setDesktopDropdown((v) => !v);
                      }}
                    />
                  </Link>

                  <ul
                    className={`${styles.dropdown} ${
                      desktopDropdown ? styles.dropdownOpen : ""
                    }`}
                  >
                    {children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`${styles.dropdownLink} ${
                            isActive(child.href)
                              ? styles.dropdownLinkActive
                              : ""
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={styles.toggleLabel}>
            {open ? "Close menu" : "Open menu"}
          </span>
          <span
            className={`${styles.bars} ${open ? styles.barsOpen : ""}`}
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobilePanel} ${
          open ? styles.mobilePanelOpen : ""
        }`}
        hidden={!open}
      >
        <nav aria-label="Main (mobile)">
          <ul className={styles.mobileList}>
            {LINKS.map((link) => {
              const { href, label, children } = link;

              if (!children) {
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`${styles.mobileLink} ${
                        isActive(href) ? styles.mobileLinkActive : ""
                      }`}
                      aria-current={isActive(href) ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={href}>
                  <div className={styles.mobileParentRow}>
                    <Link
                      href={href}
                      className={`${styles.mobileLink} ${
                        styles.mobileParentLink
                      } ${isParentActive(link) ? styles.mobileLinkActive : ""}`}
                    >
                      {label}
                    </Link>
                    <button
                      type="button"
                      className={`${styles.mobileCaretBtn} ${
                        mobileServicesOpen ? styles.mobileCaretBtnOpen : ""
                      }`}
                      aria-expanded={mobileServicesOpen}
                      aria-label={`Toggle ${label} submenu`}
                      onClick={() => setMobileServicesOpen((v) => !v)}
                    >
                      <span aria-hidden="true" />
                    </button>
                  </div>

                  <ul
                    className={`${styles.mobileSubList} ${
                      mobileServicesOpen ? styles.mobileSubListOpen : ""
                    }`}
                  >
                    {children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`${styles.mobileSubLink} ${
                            isActive(child.href)
                              ? styles.mobileSubLinkActive
                              : ""
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
