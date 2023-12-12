import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Ana Sayfa",
    path: "/",
    newTab: false,
  },
  // {
  //   id: 2,
  //   title: "Akıllı Yaşam",
  //   path: "/smart-life",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 21,
  //       title: "Akıllı Ev Sistemleri",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 22,
  //       title: "Akıllı Altyapı",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 23,
  //       title: "Akıllı Gelecek",
  //       path: "/about",
  //       newTab: false,
  //     },
  //   ]
  // },
  // {
  //   id: 33,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 4,
    title: "Hakkımızda",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Vizyon ve Misyonumuz",
        path: "/about-vision-and-mission",
        newTab: false,
      },
      {
        id: 42,
        title: "Değerlerimiz",
        path: "/about-values",
        newTab: false,
      },
      {
        id: 43,
        title: "Biz Kimiz?",
        path: "/about-who-are-we",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Bize Ulaşın",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "SSS",
    path: "/faq",
    newTab: false,
  },
];
export default menuData;
