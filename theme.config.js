import { useRouter } from "next/router";

const Logo = ({ height }) => (
  <svg height={height} viewBox="0 0 291 69" fill="none">
    <path
      d="M0 36.53c.07 17.6 14.4 32.01 32.01 32.01a32.05 32.05 0 0032.01-32V32a13.2 13.2 0 0123.4-8.31h20.7A32.07 32.07 0 0077.2 0a32.05 32.05 0 00-32 32.01v4.52A13.2 13.2 0 0132 49.71a13.2 13.2 0 01-13.18-13.18 3.77 3.77 0 00-3.77-3.77H3.76A3.77 3.77 0 000 36.53zM122.49 68.54a32.14 32.14 0 01-30.89-23.7h20.67a13.16 13.16 0 0023.4-8.3V32A32.05 32.05 0 01167.68 0c17.43 0 31.64 14 32 31.33l.1 5.2a13.2 13.2 0 0023.4 8.31h20.7a32.07 32.07 0 01-30.91 23.7c-17.61 0-31.94-14.42-32.01-32l-.1-4.7v-.2a13.2 13.2 0 00-13.18-12.81 13.2 13.2 0 00-13.18 13.18v4.52a32.05 32.05 0 01-32.01 32.01zM247.94 23.7a13.16 13.16 0 0123.4 8.31 3.77 3.77 0 003.77 3.77h11.3a3.77 3.77 0 003.76-3.77A32.05 32.05 0 00258.16 0a32.07 32.07 0 00-30.92 23.7h20.7z"
      fill="currentColor"
    />
  </svg>
);

const TITLE_WITH_TRANSLATIONS = {
  "en-US": "React Hooks for Data Fetching",
  "zh-CN": "用于数据请求的 React Hooks 库",
  "es-ES": "Biblioteca React Hooks para la obtención de datos",
  "pt-BR": " React Hooks para Data Fetching",
  ja: "データ取得のための React Hooks ライブラリ",
  ko: "데이터 가져오기를 위한 React Hooks",
  ru: "React хуки для выборки данных",
};

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
  "zh-CN": "有疑问？给我们反馈 →",
  "pt-BR": "Dúvidas? Nos dê feedback →",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  projectLink: "https://github.com/greenbrad/awful-docs",
  docsRepositoryBase: 'https://github.com/greenbrad/awful-docs/tree/main/pages/docs',
  nextLinks: true,
  prevLinks: true,
  titleSuffix: " – Awful",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  /*
  feedbackLink: () => {
    const { locale } = useRouter();
    return (
      FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
      FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
    );
  },
  */
  feedbackLabels: "feedback",
  logo: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { locale } = useRouter();
    return (
      <>
        <Logo height={12} />
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title={"Awful: " + (TITLE_WITH_TRANSLATIONS[locale] || "")}
        >
          Awful
        </span>
      </>
    );
  },
  head: ({ title, meta }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { route } = useRouter();

    const ogImage =
      meta.image ||
      `https://swr-card.vercel.app${
        /\/index\.+/.test(route) ? "" : "?title=" + encodeURIComponent(title)
      }`;

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "Awful is a lightweight framework with extreme performance for creating Addons for World of Warcraft."
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "Awful is a lightweight framework with extreme performance for creating Addons for World of Warcraft."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title ? title + " – Awful" : "Docs – Awful"
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="Awful" />
      </>
    );
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "zh-CN":
        return "在 GitHub 上编辑本页 →";
      case "es-ES":
        return "Edite esta página en GitHub →";
      case "pt-BR":
        return "Edite essa página no GitHub →";
      case "ja":
        return "Github で編集する →";
      case "ko":
        return "Github에서 이 페이지 편집하기 →";
      case "ru":
        return "Редактировать на GitHub →";
      default:
        return "Edit this page on GitHub →";
    }
  },
  footerText: ({ locale }) => {
    switch (locale) {
      case "zh-CN":
        return (
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2">由</span>
            <span className="mr-2">
              
            </span>
            驱动
          </a>
        );
      case "es-ES":
        return (
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2"></span>
            <span className="mr-2">
              
            </span>
          </a>
        );
      case "pt-BR":
        return (
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2">Desenvolvido por</span>
            <span className="mr-2">
              
            </span>
          </a>
        );
      case "ja":
        return (
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2"></span>
            <span className="mr-2">
              
            </span>
          </a>
        );
      case "ko":
        return (
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2"></span>
            <span className="mr-2">
              
            </span>
          </a>
        );
      case "ru":
        return (
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2"></span>
            <span className="mr-2">
              
            </span>
          </a>
        );
      default:
        return (
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-1"></span>
            <span>
              
            </span>
          </a>
        );
    }
  },
  i18n: [
    { locale: "en-US", text: "English" },
    //{ locale: "es-ES", text: "Español" },
    //{ locale: "zh-CN", text: "简体中文" },
    //{ locale: "pt-BR", text: "Português Brasileiro" },
    //{ locale: "ja", text: "日本語" },
    //{ locale: "ko", text: "한국어" },
    //{ locale: "ru", text: "Русский" },
  ],
};
