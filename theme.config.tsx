import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <img
      src="https://www.itglobers.com/hubfs/ITG-2.svg"
      alt="ITG logo"
      style={{ width: "12rem", height: "100%" }}
    />
  ),
  project: {
    link: "https://github.com/itglobers",
  },
  docsRepositoryBase: "https://github.com/ITGlobers/ITG-Docs",
  search: {
    placeholder: "Buscar...",
  },
  footer: {
    text: (
      <div>
        <span>Copyright © 2024, ITGlobers</span>
      </div>
    ),
  },
  useNextSeoProps() {
    return {
      noindex: true,
      nofollow: true,
    };
  },
};

export default config;
