const linkedInIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFFFFF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
    <path d="M8 11l0 5"></path>
    <path d="M8 8l0 .01"></path>
    <path d="M12 16l0 -5"></path>
    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
  </svg>
);

const githubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFFFFF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tabler-icon tabler-icon-brand-github"
  >
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="flex h-20 w-full justify-center bg-[#112c45]">
      <div className="flex w-full max-w-[800px] items-center justify-between px-5 xl:max-w-[1200px]">
        <p className="font-poppins text-sm font-semibold text-white">
          Copyright © 2024. All rights are reserved
        </p>
        <div className="flex gap-4 xl:gap-8">
          {linkedInIcon}
          {githubIcon}
        </div>
      </div>
    </footer>
  );
}