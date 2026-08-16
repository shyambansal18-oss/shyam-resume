import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function IconServer(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="3" width="18" height="7" rx="1" />
      <rect x="3" y="14" width="18" height="7" rx="1" />
      <circle cx="7" cy="6.5" r="0.7" fill="currentColor" />
      <circle cx="7" cy="17.5" r="0.7" fill="currentColor" />
      <path d="M11 6.5h6M11 17.5h6" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 3.5 5 6.5v5.2c0 4.3 2.9 7.4 7 8.8 4.1-1.4 7-4.5 7-8.8V6.5L12 3.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconLinux(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 3c2.2 2.1 3.4 4.6 3.4 7.2 0 1.6-.4 3-1.2 4.2" />
      <path d="M12 3C9.8 5.1 8.6 7.6 8.6 10.2c0 1.6.4 3 1.2 4.2" />
      <path d="M8.4 15.8c-1.6.6-2.9 1.8-3.4 3.4.9.8 2.3 1.3 4 .3" />
      <path d="M15.6 15.8c1.6.6 2.9 1.8 3.4 3.4-.9.8-2.3 1.3-4 .3" />
      <circle cx="10.2" cy="10" r="0.5" fill="currentColor" />
      <circle cx="13.8" cy="10" r="0.5" fill="currentColor" />
      <path d="M10.4 12.4c.9.7 2.3.7 3.2 0" />
    </svg>
  );
}

export function IconLock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="5" y="11" width="14" height="10" rx="1" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconRefresh(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 5v5h-5" />
    </svg>
  );
}

export function IconPolicy(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M8 4h7l4 4v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
      <path d="M15 4v4h4M9 13h6M9 16.5h4" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="1" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M7.5 3.8h3.2l1.1 3.2-2 1.3a12.6 12.6 0 0 0 5.9 5.9l1.3-2 3.2 1.1v3.2c0 .9-.7 1.7-1.6 1.7C9.8 18.2 5.8 14.2 5.8 5.4c0-.9.8-1.6 1.7-1.6Z" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 21s7-6.1 7-11.2A7 7 0 0 0 5 9.8C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.8" r="2" />
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconDownload(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 4v11M7.5 11.5 12 16l4.5-4.5M5 20h14" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconGrad(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12.2v4.3c0 .4 2.2 2 5 2s5-1.6 5-2v-4.3" />
      <path d="M21 10.2v5.3" />
    </svg>
  );
}

export function IconBolt(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M13 3 5 14h7l-1 7 8-11h-7l1-7Z" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.8 18.5c.7-2.6 2.7-4 5.2-4s4.5 1.4 5.2 4" />
      <circle cx="17" cy="8.5" r="2.2" />
      <path d="M15.4 14.6c1.9.3 3.4 1.5 4 3.4" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.4l3 1.8" />
    </svg>
  );
}

export function IconChat(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M5 17.5 3.8 21 8 18.8A8.5 8.5 0 1 0 5 17.5Z" />
    </svg>
  );
}

export function IconPressure(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 4v3M6.2 6.2l2.1 2.1M4 12h3M6.2 17.8l2.1-2.1M17.8 6.2l-2.1 2.1M20 12h-3" />
      <circle cx="12" cy="13.5" r="4" />
      <path d="m12 13.5 2-2" />
    </svg>
  );
}

export function IconShuttle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M7 17 17 7" />
      <path d="m14.5 4.5 5 5" />
      <path d="M16 4.2 19.8 8" />
      <circle cx="6.5" cy="17.5" r="2" />
    </svg>
  );
}

export function IconFilm(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="1" />
      <path d="M8 5v14M16 5v14M3.5 9.5H8M3.5 14.5H8M16 9.5h4.5M16 14.5h4.5" />
    </svg>
  );
}

export function IconLang(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M3.8 12h16.4M12 3.8c2.2 2.4 3.3 5.2 3.3 8.2S14.2 17.8 12 20.2C9.8 17.8 8.7 15 8.7 12S9.8 6.2 12 3.8Z" />
    </svg>
  );
}

export function IconTerminal(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="1" />
      <path d="m7 10 3 3-3 3M13 16h4" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function IconCircle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}
