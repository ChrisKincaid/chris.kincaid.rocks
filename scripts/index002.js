(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [818],
  {
    8312: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(7211);
        },
      ]);
    },
    7604: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = a(5893),
        r = a(1365);
      function l(e) {
        let {
            title: t,
            url: a,
            label: l = "",
            className: i = "",
            fill: n,
            small: o,
          } = e,
          c = t.trim().split(" "),
          d = c.pop(),
          m = c.join(" ");
        return (0, s.jsxs)("a", {
          className:
            "inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 "
              .concat(i, " group/link ")
              .concat(o ? "text-sm" : "text-base"),
          href: a,
          target: "_blank",
          rel: "noreferrer",
          "aria-label": l || t,
          children: [
            n &&
              (0, s.jsx)("span", {
                className:
                  "absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block",
              }),
            (0, s.jsxs)("span", {
              children: [
                m,
                " ",
                (0, s.jsxs)("span", {
                  className: "inline-block",
                  children: [
                    d,
                    (0, s.jsx)(r.Z, {
                      use: "arrow-external",
                      className:
                        "inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ".concat(
                          o ? "ml-0.5" : "ml-1 translate-y-px"
                        ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    1365: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = a(5893);
      function r(e) {
        let { use: t, className: a = "h-4 w-4" } = e;
        switch (t) {
          case "github":
            return (0, s.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              fill: "currentColor",
              className: a,
              "aria-hidden": "true",
              children: (0, s.jsx)("path", {
                d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
              }),
            });
          case "instagram":
            return (0, s.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1000 1000",
              fill: "currentColor",
              className: a,
              "aria-hidden": "true",
              children: (0, s.jsx)("path", {
                d: "M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34",
              }),
            });
          case "twitter":
            return (0, s.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 248 204",
              fill: "currentColor",
              className: a,
              "aria-hidden": "true",
              children: (0, s.jsx)("path", {
                id: "white_background",
                d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z",
              }),
            });
          case "linkedin":
            return (0, s.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: a,
              "aria-hidden": "true",
              children: (0, s.jsx)("path", {
                d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",
              }),
            });
          case "arrow-external":
            return (0, s.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              className: a,
              "aria-hidden": "true",
              children: (0, s.jsx)("path", {
                fillRule: "evenodd",
                d: "M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z",
                clipRule: "evenodd",
              }),
            });
          case "arrow-internal":
            return (0, s.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              className: a,
              "aria-hidden": "true",
              children: (0, s.jsx)("path", {
                fillRule: "evenodd",
                d: "M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z",
                clipRule: "evenodd",
              }),
            });
          case "star":
            return (0, s.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              className: a,
              "aria-hidden": "true",
              children: (0, s.jsx)("path", {
                fillRule: "evenodd",
                d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z",
                clipRule: "evenodd",
              }),
            });
          case "download":
            return (0, s.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              className: a,
              "aria-hidden": "true",
              children: [
                (0, s.jsx)("path", {
                  d: "M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z",
                }),
                (0, s.jsx)("path", {
                  d: "M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z",
                }),
              ],
            });
          case "close":
            return (0, s.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: a,
              "aria-hidden": "true",
              children: (0, s.jsx)("path", {
                fillRule: "evenodd",
                d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                clipRule: "evenodd",
              }),
            });
          case "link":
            return (0, s.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              className: a,
              "aria-hidden": "true",
              children: [
                (0, s.jsx)("path", {
                  d: "M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z",
                }),
                (0, s.jsx)("path", {
                  d: "M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z",
                }),
              ],
            });
          default:
            return (0, s.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              className: a,
              fill: "none",
              stroke: "currentColor",
              "aria-hidden": "true",
              children: (0, s.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M4 6h16M4 12h16M4 18h7",
              }),
            });
        }
      }
    },
    4533: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = a(5893);
      function r(e) {
        let { text: t, className: a = "" } = e;
        return (0, s.jsx)("div", {
          className:
            "flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ".concat(
              a
            ),
          children: t,
        });
      }
    },
    8425: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      var s = a(5893),
        r = a(7294),
        l = a(9008),
        i = a.n(l);
      function n(e) {
        let { title: t, pathname: a } = e,
          l = "Chris Kincaid",
          n =
            "Chris Kincaid, Information Security Specialist.",
          o = "https://chris.kincaid.rocks",
          c = "".concat(o, "/og.png"),
          d = "@ckincaid_",
          m = l;
        return (
          t !== l && (m = "".concat(t, " | ").concat(l)),
          (0, s.jsxs)(i(), {
            children: [
              (0, s.jsx)("title", { children: m }),
              (0, s.jsx)(
                "meta",
                { name: "description", content: n },
                "description"
              ),
              (0, s.jsx)("meta", { name: "image", content: c }),
              (0, s.jsx)(
                "meta",
                { property: "og:locale", content: "en_US" },
                "og:locale"
              ),
              (0, s.jsx)(
                "meta",
                { property: "og:site_name", content: l },
                "og:site_name"
              ),
              (0, s.jsx)(
                "meta",
                { property: "og:type", content: "website" },
                "og:type"
              ),
              (0, s.jsx)(
                "meta",
                { property: "twitter:card", content: "summary_large_image" },
                "twitter:card"
              ),
              (0, s.jsx)(
                "meta",
                { property: "twitter:creator", content: d },
                "twitter:creator"
              ),
              (0, s.jsx)(
                "meta",
                { property: "twitter:site", content: d },
                "twitter:site"
              ),
              ["og", "twitter"].map((e) =>
                (0, s.jsxs)(
                  r.Fragment,
                  {
                    children: [
                      (0, s.jsx)(
                        "meta",
                        { property: "".concat(e, ":title"), content: m },
                        "".concat(e, ":title")
                      ),
                      (0, s.jsx)(
                        "meta",
                        { property: "".concat(e, ":description"), content: n },
                        "".concat(e, ":description")
                      ),
                      (0, s.jsx)(
                        "meta",
                        { property: "".concat(e, ":url"), content: o + a },
                        "".concat(e, ":url")
                      ),
                      (0, s.jsx)(
                        "meta",
                        { property: "".concat(e, ":image"), content: c },
                        "".concat(e, ":image")
                      ),
                    ],
                  },
                  e
                )
              ),
              (0, s.jsx)("link", {
                rel: "icon",
                type: "image/png",
                sizes: "512x192",
                href: "/favicon/android-chrome-512x512.png",
              }),
              (0, s.jsx)("link", {
                rel: "icon",
                type: "image/png",
                sizes: "192x192",
                href: "/favicon/android-chrome-192x192.png",
              }),
              (0, s.jsx)("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-touch-icon.png",
              }),
              (0, s.jsx)("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png",
              }),
              (0, s.jsx)("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png",
              }),
              (0, s.jsx)("link", {
                rel: "manifest",
                href: "/favicon/site.webmanifest",
              }),
              (0, s.jsx)("meta", {
                name: "msapplication-TileColor",
                content: "#0f172a",
              }),
              (0, s.jsx)("meta", { name: "theme-color", content: "#0f172a" }),
              (0, s.jsx)("meta", {
                name: "google-site-verification",
                content: "DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk",
              }),
            ],
          })
        );
      }
    },
    7211: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return k;
          },
        });
      var s = a(5893),
        r = a(7294);
      function l() {
        return (0, s.jsxs)("div", {
          children: [
          ],
        });
      }
      var i = a(7604);
      function n() {
        return (0, s.jsx)("div", {
          className:
            "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg",
        });
      }
      var o = a(1365),
        c = a(1664),
        d = a.n(c);
      function m(e) {
        let { title: t, url: a, className: r, border: l = !0 } = e,
          i = t.trim().split(" "),
          n = i.pop(),
          c = i.join(" "),
          m = l
            ? "border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"
            : "";
        return (0, s.jsx)(d(), {
          className:
            "inline-flex items-center font-medium leading-tight text-slate-200 ".concat(
              r,
              " group"
            ),
          href: a,
          "aria-label": t,
          children: (0, s.jsxs)("span", {
            children: [
              (0, s.jsxs)("span", { className: m, children: [c, " "] }),
              (0, s.jsxs)("span", {
                className: "whitespace-nowrap",
                children: [
                  (0, s.jsx)("span", { className: m, children: n }),
                  (0, s.jsx)(o.Z, {
                    use: "arrow-internal",
                    className:
                      "ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var h = a(4533);
      function p() {
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("ol", {
              className: "group/list",
              children: [
                {
                  date: "07/2023 - Present",
                  company: {
                    name: "Ozark Technical Communty College",
                    link: "https://programs.otc.edu/associate-of-applied-science-in-cybersecurity/",
                  },
                  positions: ["Adjunct Instructor - Cybersecurity",
                  " ",
                  "• Create engaging learning materials, including presentations, " +
                  "case studies, and hands-on exercises, to facilitate effective learning experiences for students.",
                  "• Provide guidance to students interested in pursuing careers in cybersecurity, " +
                  "offering insights into potential career paths and skill development.",
                  "• Continuously research and stay updated on the latest cybersecurity threats, vulnerabilities, " +
                  "and industry best practices. "],
                  // desc: "",
                  tech: [
                    "Mentoring",
                    "Classroom Management",
                    "Active Learning",
                    "Industry Trends",
                  ],
                  // links: [
                  //   {
                  //     title: "Nuix: Adaptive Security",
                  //     url: "https://www.nuix.com/technology/nuix-adaptive-security",
                  //   },
                  // ],
                },
                {
                  date: "07/2021 - 08/2023",
                  company: {
                    name: "Nuix North America Inc",
                    link: "https://nuix.com",
                  },
                  positions: ["Software Development Engineer in Test",
                  " ",
                  "• Ensured the development of Security Information and Event Management (SIEM) software " +
                  "was of the highest quality through meticulous manual testing methodologies and efficient " +
                  "automated testing techniques.",
                  "• Identified and reported software defects, collaborating closely with developers to " +
                  "facilitate prompt resolutions and overall product performance and the release of new features.",
                  "• Emulated customer environments by leveraging virtual machines, ensuring accurate testing " +
                  "scenarios and delivering software solutions that aligned with real-world user experiences. "],
                  // desc: "",
                  tech: [
                    "AWS",
                    "Confluence",
                    "Jira",
                    "Playwright",
                    "PyTest",
                    "Python",
                    "Terraform",
                    "TestRails",
                  ],
                  links: [
                    {
                      title: "Nuix: Adaptive Security",
                      url: "https://www.nuix.com/technology/nuix-adaptive-security",
                    },
                  ],
                },
                {
                  date: "01/2021 - 08/2021",
                  company: {
                    name: "Full Potential Solutions",
                    link: "https://www.fpsinc.com/",
                  },
                  positions: ["Technical Support Representative",
                  "• Delivered comprehensive end-user technical support to customers for Internet " +
                  "routing, VoIP, and media server products, quickly diagnosing root causes, " +
                  "troubleshooting issues, and providing solutions.",
                  "• Interacted professionally and personally with customers, " +
                  "defusing volatile situations, and working collaboratively to " +
                  "resolve their issues while exceeding productivity standards. ",
                  "• Leveraged acquired technical expertise to clearly communicate resolution " +
                  "strategies based on rapid analysis of current challenges, toggling between " +
                  "applications to assess issues and configure settings. "],
                  // desc:"",
                  tech: [
                    "Android/iOS",
                    "Direct Customer Engagement",
                    "SOHO Networking",
                    "VoIP",
                  ],
                },
                {
                  date: "03/2019 - 04/2020",
                  company: {
                    name: "Nuix North America Inc",
                    link: "https://nuix.com",
                  },
                  positions: ["Information Security Analyst",
                  "• Led policy and procedure creation and development, aligning strategic IT objectives " +
                  "with governmental compliance requirements to optimize network security and protect data integrity. ",
                  "• Managed physical access system, configuring security protocols, proactively problem solving, " +
                  "and reinforcing policies to contribute to system-wide security initiatives. ",
                  "• Designed and deployed an endpoint monitoring system, tailoring specifications to unique " +
                  "needs and managing utilization and operation of the system to maintain functionality and compliance. ",
                  "• Developed subject matter expertise, working within strict operating environments, " +
                  "maintaining infrastructure security, and utilizing frameworks such as NIST, ISO 27001, and FedRAMP. "],
                  // desc: "",
                  tech: [
                    "Physical Intrusion Detection System", 
                    "ISO 27001", 
                    "Sumo Logic", 
                    "Identity Management"],
                },
                {
                  date: "06/2011 - 01/2013",
                  company: { name:
                    "TTEC/Hewlett-Packard", 
                    link: "https://www.ttec.com/" },
                  positions: ["Technical Support Agent",
                  "• Provided extensive technical support and services to customers, " +
                  "facilitating proper utilization of HP products and equipment to maintain customer satisfaction. ",
                  "• Diagnosed remotely and troubleshoot complications, working with customers through solutions. ",
                  "• Contributed to ongoing customer and client retention, utilizing wealth of technical expertise, " +
                  "updating account information, recording customer engagements, notating accounts, and closing tickets. ",
                  "• Collaborated with associates and other departments to escalate issues to drive resolution, " +
                  "forging working relationships that facilitate future success and minimize downtime. "],
                  // desc: "",
                  tech: [
                    "Windows Troublshooting", 
                    "Direct Customer Engagement"],
                },
              ].map((e, t) =>
                (0, s.jsx)(
                  "li",
                  {
                    className: "mb-12",
                    children: (0, s.jsxs)("div", {
                      className:
                        "group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
                      children: [
                        (0, s.jsx)(n, {}),
                        (0, s.jsx)("header", {
                          className:
                            "z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2",
                          "aria-label": e.date
                            .replace("—", "to")
                            .replace("Dec", "December"),
                          children: e.date || "",
                        }),
                        (0, s.jsxs)("div", {
                          className: "z-10 sm:col-span-6",
                          children: [
                            (0, s.jsx)("h3", {
                              className:
                                "font-medium leading-snug text-slate-200",
                              children: e.positions.map((t, a) =>
                                (0, s.jsx)(
                                  "div",
                                  {
                                    children:
                                      0 === a
                                        ? (0, s.jsx)(i.Z, {
                                            title: ""
                                              .concat(t, " \xb7 ")
                                              .concat(e.company.name),
                                            label: ""
                                              .concat(t, " at ")
                                              .concat(e.company.name),
                                            url: e.company.link,
                                            fill: !0,
                                          })
                                        : (0, s.jsx)("div", {
                                            className: "text-slate-500",
                                            "aria-hidden": "true",
                                            children: t,
                                          }),
                                  },
                                  a
                                )
                              ),
                            }),
                            (0, s.jsx)("p", {
                              className: "mt-2 text-sm leading-normal",
                              children: e.desc,
                            }),
                            e.links &&
                              (0, s.jsx)("ul", {
                                className: "mt-2 flex flex-wrap",
                                "aria-label": "Related links",
                                children: e.links.map((e, t) =>
                                  (0, s.jsx)(
                                    "li",
                                    {
                                      className: "mr-4",
                                      children: (0, s.jsxs)("a", {
                                        className:
                                          "relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300",
                                        href: e.url,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [
                                          (0, s.jsx)(o.Z, {
                                            use: "link",
                                            className: "mr-1 h-3 w-3",
                                          }),
                                          (0, s.jsx)("span", {
                                            children: e.title,
                                          }),
                                        ],
                                      }),
                                    },
                                    t
                                  )
                                ),
                              }),
                            e.tech &&
                              (0, s.jsx)("ul", {
                                className: "mt-2 flex flex-wrap",
                                "aria-label": "Technologies used",
                                children: e.tech.map((e, t) =>
                                  (0, s.jsx)(
                                    "li",
                                    {
                                      className: "mr-1.5 mt-2",
                                      children: (0, s.jsx)(h.Z, { text: e }),
                                    },
                                    t
                                  )
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                  },
                  t
                )
              ),
            }),
            // (0, s.jsx)("div", {
            //   className: "mt-12",
            //   children: (0, s.jsx)(m, {
            //     title: "View Full R\xe9sum\xe9",
            //     url: "/CK_MP.html",
            //     className: "font-semibold text-slate-200",
            //   }),
            // }),
          ],
        });
      }
      function u() {
        return (0, s.jsx)("footer", {
          className: "max-w-md pb-16 text-sm text-slate-500 sm:pb-0",
          children: (0, s.jsxs)("p", {
            children: [
              "Thank you for checking out my portfolio!",
              " ",
              // (0, s.jsx)("a", {
              //   href: "",
              //   className:
              //     "font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300",
              //   target: "_blank",
              //   rel: "noreferrer",
              //   children: "",
              // }),
              // " ",
              // "",
              // " ",
              // (0, s.jsx)("a", {
              //   href: "",
              //   className:
              //     "font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300",
              //   target: "_blank",
              //   rel: "noreferrer",
              //   children: "",
              // }),
              // " ",
              // "",
              // " ",
              // (0, s.jsx)("a", {
              //   href: "",
              //   className:
              //     "font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300",
              //   target: "_blank",
              //   rel: "noreferrer",
              //   children: "",
              // }),
              // " ",
              // "",
              // " ",
              // (0, s.jsx)("a", {
              //   href: "",
              //   className:
              //     "font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300",
              //   target: "_blank",
              //   rel: "noreferrer",
              //   children: "",
              // }),
              // "",
              // " ",
              // (0, s.jsx)("a", {
              //   href: "",
              //   className:
              //     "font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300",
              //   target: "_blank",
              //   rel: "noreferrer",
              //   children: "",
              // }),
              // "",
              // " ",
              // (0, s.jsx)("a", {
              //   href: "",
              //   className:
              //     "font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300",
              //   target: "_blank",
              //   rel: "noreferrer",
              //   children: "",
              // }),
              // " ",
              // "",
            ],
          }),
        });
      }
      function x(e) {
        let { sections: t } = e;
        return (0, s.jsxs)("header", {
          className:
          "lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24",
          children: [
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("h1", {
                  className:
                  "text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl",
                  children: (0, s.jsx)(d(), {
                    href: "/",
                    children: "Chris Kincaid",
                  }),
                }),
                (0, s.jsx)("h2", {
                  className:
                    "mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl",
                  children: "Information Security Specialist",
                }),
                (0, s.jsx)("nav", {
                  className: "nav hidden lg:block",
                  "aria-label": "In-page jump links",
                  children: (0, s.jsx)("ul", {
                    className: "mt-16 w-max",
                    children: t.map((e, t) =>
                      e.hideFromNav
                        ? null
                        : (0, s.jsx)(
                            "li",
                            {
                              children: (0, s.jsxs)("a", {
                                className:
                                  "group flex items-center py-3 ".concat(
                                    0 === t ? "active" : ""
                                  ),
                                href: "#".concat(e.heading.toLowerCase()),
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                                  }),
                                  (0, s.jsx)("span", {
                                    className:
                                      "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                                    children: e.heading,
                                  }),
                                ],
                              }),
                            },
                            t
                          )
                    ),
                  }),
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "mt-12",
              children: (0, s.jsx)(m, {
                target: "_blank",
                title: "View R\xe9sum\xe9",
                url: "/CK_Resume.html",
                className: "font-semibold text-slate-200",
              }),
            }),
            (0, s.jsx)("ul", {
              className: "ml-1 mt-8 flex items-center",
              "aria-label": "Social media",
              children: [
                {
                  title: "GitHub",
                  url: "https://github.com/ChrisKincaid",
                  icon: "github",
                },
                // {
                //   title: "Instagram",
                //   url: "https://www.instagram.com/boombapboombox",
                //   icon: "instagram",
                // },
                // {
                //   title: "Twitter",
                //   url: "https://twitter.com/ChrisGKincaid",
                //   icon: "twitter",
                // },
                {
                  title: "LinkedIn",
                  url: "https://www.linkedin.com/in/christophergkincaid/",
                  icon: "linkedin",
                },
              ].map((e, t) =>
                (0, s.jsx)(
                  "li",
                  {
                    className: "mr-5 text-xs",
                    children: (0, s.jsxs)("a", {
                      className: "block hover:text-slate-200",
                      href: e.url,
                      target: "_blank",
                      rel: "noreferrer",
                      children: [
                        (0, s.jsx)("span", {
                          className: "sr-only",
                          children: e.title,
                        }),
                        (0, s.jsx)(o.Z, { use: e.icon, className: "h-6 w-6" }),
                      ],
                    }),
                  },
                  t
                )
              ),
            }),
          ],
        });
      }
      var g = a(5675),
        f = a.n(g);
      function v() {
        let e = (e) => {
          let { repoUrl: t } = e,
            [a, l] = (0, r.useState)(null);
          return ((0, r.useEffect)(() => {
            let e = t.split("/")[4];
            fetch("".concat(e))
              .then((e) => e.json())
              .then((e) => {
                let { stargazers_count: t } = e;
                l(t);
              })
              .catch((e) => console.error(e));
          }, [t]),
          a)
            ? (0, s.jsxs)("a", {
                className:
                  "relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300",
                href: t,
                target: "_blank",
                rel: "noreferrer",
                "aria-label": "".concat(a, ""),
                children: [
                  (0, s.jsx)(o.Z, { use: "star", className: "mr-1 h-3 w-3" }),
                  (0, s.jsx)("span", {
                    children: Number(a).toLocaleString("en", {
                      useGrouping: !0,
                    }),
                  }),
                ],
              })
            : null;
        };
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("ul", {
              className: "group/list",
              children: [
                {
                  title: "Hackwoods Academy",
                  link: "https://hackwoods-academy-v001.web.app/",
                  image: "",
                  desc: "Hackwoods Academy is an Information Security group I started in 2023. " +
                  "The group focuses on spreading Information Security awareness and training. " +
                  "We have regularly scheduled meetings and are open welcoming to anyone. However, we " +
                  "are focused primaraly on the Ozarks area of Missouri and Arkansas. " +
                  "I developed the entire website and currently maintain it, as well as creating content for both " +
                  "online and in person events.",
                  tech: [
                    "Leadership Skills",
                    "Public Speaking",
                    "Soft Skills",
                    "Time Management", 
                    ],
                },
                {
                  title: "This Website",
                  link: "",
                  desc: "You are looking at this project right now. " +
                  "This website is my first attempt at creating a personal website." +
                  "Through the use of web development tools and scanning the code from other peoples websites, " +
                  "as well as a lot of trial and error, and a bunch of ChatGPT, I was able to create this website.",
                  tech: [
                    "HTML",
                    "CSS", 
                    "JavaScript", 
                    "Chrome Dev Tools",
                    "ChatGPT",
                    "GitHub Copilot",
                    "Visual Studio Code",
                    "AWS: S3, CloudFront, Route 53, Cert Manager"],
                },
                {
                  title: "Basic Web Browser",
                  link: "https://github.com/ChrisKincaid/BasicWebBrowser/",
                  image: "",
                  desc: "This is a basic web browser I created using C#, .Net. and Visual Studio. " +
                  "It is a simple web browser that allows you to navigate to any website you want. " +
                  "But unfortunately, it does not support JavaScript or any other scripting languages." +
                  "It is a very basic web browser, really only good for something like accessing a simple FTP server.",
                  download:
                    "https://s3.amazonaws.com/chris.kincaid.rocks/DownloadShare/Browser07262023.exe",
                    tech: [
                      "C#",
                      ".Net", 
                      "Visual Studio",
                      "GitHub Copilot"],
                },
              ].map((t, a) =>
                (0, s.jsx)(
                  "li",
                  {
                    className: "mb-12",
                    children: (0, s.jsxs)("div", {
                      className:
                        "group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
                      children: [
                        (0, s.jsx)(n, {}),
                        (0, s.jsxs)("div", {
                          className: "z-10 sm:order-2 sm:col-span-6",
                          children: [
                            (0, s.jsx)("h3", {
                              children: (0, s.jsx)(i.Z, {
                                title: t.title,
                                url: t.link,
                                fill: !0,
                              }),
                            }),
                            (0, s.jsx)("p", {
                              className: "mt-2 text-sm leading-normal",
                              children: t.desc,
                            }),
                            t.github && (0, s.jsx)(e, { repoUrl: t.github }),
                            t.download &&
                              (0, s.jsxs)("a", {
                                className:
                                  "relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300",
                                href: t.download,
                                target: "_blank",
                                rel: "noreferrer",
                                "aria-label":
                                  "Download the most basic web browser ever!",
                                children: [
                                  (0, s.jsx)(o.Z, {
                                    use: "download",
                                    className: "mr-1 h-4 w-4",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "Downlaod the most basic web browser ever!",
                                  }),
                                ],
                              }),
                            t.tech &&
                              (0, s.jsx)("ul", {
                                className: "mt-2 flex flex-wrap",
                                "aria-label": "Technologies used:",
                                children: t.tech.map((e, t) =>
                                  (0, s.jsx)(
                                    "li",
                                    {
                                      className: "mr-1.5 mt-2",
                                      children: (0, s.jsx)(h.Z, { text: e }),
                                    },
                                    t
                                  )
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                  },
                  a
                )
              ),
            }),
          ],
        });
      }
      var b = a(8425),
        j = a(4910);
      function w() {
        let [e, t] = (0, r.useState)(null);
        return (0, s.jsx)("div", {
          ref: t,
          children: (0, s.jsxs)(j.fC, {
            children: [
              (0, s.jsx)(j.xz, {
                asChild: !0,
              }),
              (0, s.jsxs)(j.h_, {
                container: e,
                children: [
                  (0, s.jsx)(j.aV, {
                    className:
                      "DialogOverlay portal fixed left-0 top-0 z-40 h-screen w-screen bg-slate-900/10 backdrop-blur transition",
                    children: (0, s.jsxs)("div", {
                      className: "portal-inner",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }

      function y() {
        let e = (e) => {
          let { repoUrl: t } = e,
            [a, l] = (0, r.useState)(null);
          return ((0, r.useEffect)(() => {
            let e = t.split("/")[4];
            fetch("https://github.com/ChrisKincaid?tab=repositories".concat(e))
              .then((e) => e.json())
              .then((e) => {
                let { stargazers_count: t } = e;
                l(t);
              })
              .catch((e) => console.error(e));
          }, [t]),
          a)
            ? (0, s.jsxs)("a", {
                className:
                  "relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300",
                href: t,
                target: "_blank",
                rel: "noreferrer",
                "aria-label": "".concat(a, ""),
                children: [
                  (0, s.jsx)(o.Z, { use: "star", className: "mr-1 h-3 w-3" }),
                  (0, s.jsx)("span", {
                    children: Number(a).toLocaleString("en", {
                      useGrouping: !0,
                    }),
                  }),
                ],
              })
            : null;
        };
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("ul", {
              className: "group/list",
              children: [
                {
                  title: "Western Governors University",
                  link: "https://www.wgu.edu/",
                  image: "",
                  desc: "Currently attending WGU to obtain a " +
                  "Master's degree in Cybersecurity and Information Assurance. " + 
                  "Expected graduation date is December 2025.",
                  tech: [
                    "Master of Science, Cybersecurity and Information Assurance"],
                },
                {
                  title: "Missouri Southern State University",
                  link: "https://www.mssu.edu/",
                  image: "",
                  desc: "Took classes in Computer Science, Digital Forensics, and Criminal Law. All degrees awarded with honors.",
                  tech: [
                    "Bs. Computer Information Systems",
                    "Bs. Criminal Justice", 
                    "As. Information Systems", 
                    "As. Law Enforcement"],
                },
                {
                  title: "Ozark Technical Community College",
                  link: "https://www.otc.edu/",
                  image: "",
                  desc: "Took classes in general education and business.",
                  tech: [
                    "As. Business Administration", "Phi Theta Kappa Honors Society"],
                },
                {
                  title: "CompTIA  - Security+ CE",
                  link: "https://www.credly.com/badges/42cadbe2-668a-42dc-8194-195fadf6b375/public_url",
                  image: "",
                  desc: "This certification validates expertise in foundational knowledge of " +
                  "cybersecurity practices and principles. ",
                  tech: [
                    "Access Control",
                    "Cyber Forensics", 
                    "Data Security", 
                    "Malware Identification",
                    "Network Security",
                    "Threat Analysis",
                    "Threat Detection"],
                },
                {
                  title: "ISC2 - CC – Certified in Cybersecurity",
                  link: "https://www.isc2.org/certifications/cc",
                  image: "",
                  desc: [
                  ""],
                  tech: [
                    "Security Principles",
                    "Incident Response Concepts",
                    "Access Controls Concepts", 
                    "Network Security"]
                  },
                {
                  title: "EC-Council - Multiple Micro-Certifications",
                  link: "https://www.eccouncil.org/",
                  image: "",
                  desc: [
                  ""],
                  tech: [
                    "Password Attacks and Security",
                    "Malware Analysis Fundamentals",
                    "Network Pentesting", 
                    "Kali Linux Pentetsing"]
                },
              ]
              .map((t, a) =>
                (0, s.jsx)(
                  "li",
                  {
                    className: "mb-12",
                    children: (0, s.jsxs)("div", {
                      className:
                        "group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
                      children: [
                        (0, s.jsx)(n, {}),
                        (0, s.jsxs)("div", {
                          className: "z-10 sm:order-2 sm:col-span-6",
                          children: [
                            (0, s.jsx)("h3", {
                              children: (0, s.jsx)(i.Z, {
                                title: t.title,
                                url: t.link,
                                fill: !0,
                              }),
                            }),
                            (0, s.jsx)("p", {
                              className: "mt-2 text-sm leading-normal",
                              children: t.desc,
                            }),
                            t.github && (0, s.jsx)(e, { repoUrl: t.github }),
                            t.download &&
                              (0, s.jsxs)("a", {
                                className:
                                  "relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300",
                                href: t.download,
                                target: "_blank",
                                rel: "noreferrer",
                                "aria-label":
                                  "Download the most basic web browser ever!",
                                children: [
                                  (0, s.jsx)(o.Z, {
                                    use: "download",
                                    className: "mr-1 h-4 w-4",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "Downlaod the most basic web browser ever!",
                                  }),
                                ],
                              }),
                            t.tech &&
                              (0, s.jsx)("ul", {
                                className: "mt-2 flex flex-wrap",
                                "aria-label": "Technologies used:",
                                children: t.tech.map((e, t) =>
                                  (0, s.jsx)(
                                    "li",
                                    {
                                      className: "mr-1.5 mt-2",
                                      children: (0, s.jsx)(h.Z, { text: e }),
                                    },
                                    t
                                  )
                                ),
                              }),
                          ],
                        }),
                        // (0, s.jsx)(f(), {
                        //   className:
                        //     "rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1",
                        //   src: t.image,
                        //   alt: "",
                        //   width: 200,
                        //   height: 48,
                        // }),
                      ],
                    }),
                  },
                  a
                )
              ),
            }),
            // (0, s.jsx)("div", {
            //   className: "mt-12",
            //   children: (0, s.jsx)(m, {
            //     title: "View Full Project Archive",
            //     url: "/archive",
            //     className: "font-semibold text-slate-200",
            //   }),
            // }),
          ],
        });
      }
      function k() {
        let e = (0, r.useRef)([]);
        (0, r.useEffect)(() => {
          let t = document.querySelector(".nav");
          if (!t || window.innerWidth < 1024) return;
          let a = "active",
            s = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  if (e.isIntersecting) {
                    let s = t.querySelector("a[href].".concat(a));
                    null == s || s.classList.remove(a);
                    let r = t.querySelector(
                      'a[href="#'.concat(e.target.id, '"]')
                    );
                    null == r || r.classList.add(a);
                  }
                });
              },
              { rootMargin: "0% 0% -".concat(70, "% 0%"), threshold: 0 }
            );
          e.current.forEach((e) => {
            e && s.observe(e);
          });
        }, []);
        let t = [
          // { 
          //   heading: "About",
          //   label: "About me", 
          //   component: (0, s.jsx)(l, {}) },
          {
            heading: "Experience",
            label: "Work experience",
            component: (0, s.jsx)(p, {}),
          },
          {
            heading: "Projects",
            label: "Selected projects",
            component: (0, s.jsx)(v, {}),
          },
          {
            heading: "Education and Certs",
            label: "Education and Certifications",
            component: (0, s.jsx)(y, {}),
            // hideFromNav: !0,
          },
        ];
        return (0, s.jsxs)("div", {
          className: "lg:flex lg:justify-between lg:gap-4",
          children: [
            (0, s.jsx)(b.Z, { pathname: "/", title: "Chris Kincaid" }),
            (0, s.jsx)(x, { sections: t }),
            (0, s.jsxs)("main", {
              id: "content",
              className: "pt-24 lg:w-1/2 lg:py-24",
              children: [
                t.map((t, a) =>
                  (0, s.jsxs)(
                    "section",
                    {
                      id: t.heading.toLowerCase(),
                      className:
                        "mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24",
                      "aria-label": t.label,
                      ref: (t) => (e.current[a] = t),
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0",
                          children: (0, s.jsx)("h2", {
                            className:
                              "text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only",
                            children: t.heading,
                          }),
                        }),
                        t.component,
                      ],
                    },
                    a
                  )
                ),
                (0, s.jsx)(u, {}),
              ],
            }),
            (0, s.jsx)(w, {}),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [664, 506, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
