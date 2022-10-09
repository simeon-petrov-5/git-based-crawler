export const WEBSITE = {
  TECHNOPOLIS: 'TECHNOPOLIS',
  TECHNOMIX: 'TECHNOMIX',
  TECHMART: 'TECHMART',
  EMAG: "EMAG"
}

export const HTMLSelectors = {
  [WEBSITE.TECHNOPOLIS]: '.product-block .product-price .price .price-value',
  [WEBSITE.TECHNOMIX]: '.product-info-price .price-final_price span[data-price-type="finalPrice"] .price',
  [WEBSITE.TECHMART]: '.product-detail-price-holder',
  [WEBSITE.EMAG]: '.product-main-area .product-page-pricing .product-new-price'
};

export default [
  {
    model: "BOSCH-WTR87TW0BY",
    websites: [
      {
        url: "https://www.technopolis.bg/bg/Sushilni/Sushilnya-BOSCH-WTR87TW0BY/p/683961",
        key: WEBSITE.TECHNOPOLIS
      },
      {
        url: "https://www.tehnomix.bg/sushilnya-bosch-wtr87tw0by",
        key: WEBSITE.TECHNOMIX
      },
      // {
      //   url: "https://techmart.bg/product/product/details/21815/category/712/lang/1",
      //   key: WEBSITE.TECHMART
      // },
    ],
  },
  {
    model: "AEG-T7DBE48S",
    websites: [
      {
        url: "https://www.technopolis.bg/bg/Sushilni/Sushilnya-AEG-T7DBE48S/p/687572",
        key: WEBSITE.TECHNOPOLIS
      },
      {
        url: "https://www.tehnomix.bg/sushilnya-aeg-t7dbe48s",
        key: WEBSITE.TECHNOMIX
      },
      // {
      //   url: "https://techmart.bg/%D0%A1%D1%83%D1%88%D0%B8%D0%BB%D0%BD%D1%8F%20AEG%20T7DBE48S",
      //   
      //   key: WEBSITE.TECHMART
      // },
    ],
  },
  {
    model: "AEG-T8DBE48S",
    websites: [
      {
        url: "https://www.technopolis.bg/bg/Sushilni/Sushilnya-AEG-T8DBE48S/p/687471",
        key: WEBSITE.TECHNOPOLIS
      },
      {
        url: "https://www.tehnomix.bg/sushilnya-aeg-t8-dbe48s",
        key: WEBSITE.TECHNOMIX
      },
      // {
      //   url: "https://techmart.bg/%D0%A1%D1%83%D1%88%D0%B8%D0%BB%D0%BD%D1%8F%20AEG%20T8DBE48S",
      //         //   key: WEBSITE.TECHMART
      // },
    ],
  },
  {
    model: "MIELE-TWC560WP",
    websites: [
      {
        url: "https://www.tehnomix.bg/sushilnya-miele-twc560wp-ecospeedand8kg",
        key: WEBSITE.TECHNOMIX
      }
    ],
  },
  {
    model: "DeLonghi-Dedica-EC-685",
    websites: [
      {
        url: "https://www.emag.bg/espreso-mashina-delonghi-dedica-style-ec-685-15-bar-1300-w-inoks-ec-685-m/pd/DK5DVDBBM",
        key: WEBSITE.EMAG
      },
      {
        url: "https://www.tehnomix.bg/kafemashina-delonghi-ec-685-m",
        key: WEBSITE.TECHNOMIX
      },
      {
        url: "https://www.technopolis.bg/bg/bg/Espreso/Kafemashina-DELONGHI-DEDICA-STYLE-EC685-R/p/824282",
        key: WEBSITE.TECHNOPOLIS
      }
    ],
  },
  {
    model: "Tefal-OptiGrill-GC706D34",
    websites: [
      {
        url: "https://www.emag.bg/elektricheska-skara-tefal-optigrill-2000-w-6-avtomatichni-programi-funkcija-razmrazjavane-inoks-cherna-gc706d34/pd/DQFN3ZBBM/",
        key: WEBSITE.EMAG
      },
      {
        url: "https://www.tehnomix.bg/gril-tefal-optigrill-gc706d34",
        key: WEBSITE.TECHNOMIX
      }
    ],
  },
  {
    model: "Tefal-OptiGrill-XL-GC722834",
    websites: [
      {
        url: "https://www.emag.bg/elektricheska-skara-tefal-optigrill-xl-2000w-9-programi-indikator-za-gotovnost-avtomatichen-senzor-podvizhni-plochi-cherna-gc722834/pd/DM2VS9BBM",
        key: WEBSITE.EMAG
      },
      {
        url: "https://www.tehnomix.bg/gril-tefal-gc722834-optigrill-xl",
        key: WEBSITE.TECHNOMIX
      }
    ],
  },
];

