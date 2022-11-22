export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - goat",
        totalResults: "12650000000",
        searchTerms: "goat",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "84c3c22721a9a407f",
        searchType: "image",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - goat",
        totalResults: "12650000000",
        searchTerms: "goat",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "84c3c22721a9a407f",
        searchType: "image",
      },
    ],
  },
  context: {
    title: "search-engine",
  },
  searchInformation: {
    searchTime: 0.522686,
    formattedSearchTime: "0.52",
    totalResults: "12650000000",
    formattedTotalResults: "12,650,000,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Goat - Wikipedia",
      htmlTitle: "<b>Goat</b> - Wikipedia",
      link: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
      displayLink: "en.wikipedia.org",
      snippet: "Goat - Wikipedia",
      htmlSnippet: "<b>Goat</b> - Wikipedia",
      mime: "image/jpeg",
      fileFormat: "image/jpeg",
      image: {
        contextLink: "https://en.wikipedia.org/wiki/Goat",
        height: 3600,
        width: 3600,
        byteSize: 1868901,
        thumbnailLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6UKkwdbXUL2YKVQG1YD4N6z9b-XIuxl-zyGKJbyGboy2MlDWpTGbs1O8X&s",
        thumbnailHeight: 150,
        thumbnailWidth: 150,
      },
    },
    {
      kind: "customsearch#result",
      title: "Goat | Smithsonian's National Zoo",
      htmlTitle: "<b>Goat</b> | Smithsonian&#39;s National Zoo",
      link: "https://nationalzoo.si.edu/sites/default/files/styles/480x240_scale_and_crop/public/paragraphs/single_image/20180628-634sb.jpg?itok=OYks5j3y&timestamp=1646256051",
      displayLink: "nationalzoo.si.edu",
      snippet: "Goat | Smithsonian's National Zoo",
      htmlSnippet: "<b>Goat</b> | Smithsonian&#39;s National Zoo",
      mime: "image/jpeg",
      fileFormat: "image/jpeg",
      image: {
        contextLink: "https://nationalzoo.si.edu/animals/goat",
        height: 240,
        width: 480,
        byteSize: 48162,
        thumbnailLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpGaLtaGBnLhpRTO08AYxVQB5cFrxPQkEFRhQIk-6Upy3AezRL4sIxrA&s",
        thumbnailHeight: 65,
        thumbnailWidth: 129,
      },
    },
    {
      kind: "customsearch#result",
      title: "Goat - Wikipedia",
      htmlTitle: "<b>Goat</b> - Wikipedia",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg",
      displayLink: "en.wikipedia.org",
      snippet: "Goat - Wikipedia",
      htmlSnippet: "<b>Goat</b> - Wikipedia",
      mime: "image/jpeg",
      fileFormat: "image/jpeg",
      image: {
        contextLink: "https://en.wikipedia.org/wiki/Goat",
        height: 1200,
        width: 1200,
        byteSize: 230289,
        thumbnailLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRisG5nu9j7ug6E4MJdRfUgNV0KAzImWTblomzPRrxk6e4jITZLLdfObRF&s",
        thumbnailHeight: 150,
        thumbnailWidth: 150,
      },
    },
    {
      kind: "customsearch#result",
      title: "Never Underestimate a Goat; It's Not As Stupid As It Looks ...",
      htmlTitle:
        "Never Underestimate a <b>Goat</b>; It&#39;s Not As Stupid As It Looks ...",
      link: "https://th-thumbnailer.cdn-si-edu.com/S1QUXEGEJ_0Tr1aiVUSYlKxNP7s=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b9/d2/b9d271f3-7f66-4132-b5af-7d33844505b7/goat.jpg",
      displayLink: "www.smithsonianmag.com",
      snippet: "Never Underestimate a Goat; It's Not As Stupid As It Looks ...",
      htmlSnippet:
        "Never Underestimate a <b>Goat</b>; It&#39;s Not As Stupid As It Looks ...",
      mime: "image/jpeg",
      fileFormat: "image/jpeg",
      image: {
        contextLink:
          "https://www.smithsonianmag.com/science-nature/never-underestimate-goat-not-stupid-looks-180950265/",
        height: 594,
        width: 797,
        byteSize: 83222,
        thumbnailLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNTEqkDfFopRS5EUUJvQ3ocf3SlL0cpPiJKebEPNQ9-cVT351AszAz40&s",
        thumbnailHeight: 107,
        thumbnailWidth: 143,
      },
    },
    {
      kind: "customsearch#result",
      title: "Goat - Wikipedia",
      htmlTitle: "<b>Goat</b> - Wikipedia",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/640px-Hausziege_04.jpg",
      displayLink: "en.wikipedia.org",
      snippet: "Goat - Wikipedia",
      htmlSnippet: "<b>Goat</b> - Wikipedia",
      mime: "image/jpeg",
      fileFormat: "image/jpeg",
      image: {
        contextLink: "https://en.wikipedia.org/wiki/Goat",
        height: 640,
        width: 640,
        byteSize: 79618,
        thumbnailLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcD3p1qOJ4suqj4ENFH914UIwLSuj3SzCht0Kn2CZEi_B2IH_KH8ywYnG&s",
        thumbnailHeight: 137,
        thumbnailWidth: 137,
      },
    },
    {
      kind: "customsearch#result",
      title: "13 Reasons Never to Drink Goat's Milk | PETA",
      htmlTitle: "13 Reasons Never to Drink <b>Goat&#39;s</b> Milk | PETA",
      link: "https://www.peta.org/wp-content/uploads/2016/02/Goats-maximili-602x403.jpg",
      displayLink: "www.peta.org",
      snippet: "13 Reasons Never to Drink Goat's Milk | PETA",
      htmlSnippet: "13 Reasons Never to Drink <b>Goat&#39;s</b> Milk | PETA",
      mime: "image/jpeg",
      fileFormat: "image/jpeg",
      image: {
        contextLink:
          "https://www.peta.org/features/reasons-never-to-drink-goats-milk/",
        height: 403,
        width: 602,
        byteSize: 19809,
        thumbnailLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoj7TIQrSA28RXU9Dpp4fTRLhFZBb8wKoPElfkQxIrAY9SNADRjmB6g&s",
        thumbnailHeight: 90,
        thumbnailWidth: 135,
      },
    },
    {
      kind: "customsearch#result",
      title:
        "Mutilation of Goats - FOUR PAWS International - Animal Welfare ...",
      htmlTitle:
        "Mutilation of <b>Goats</b> - FOUR PAWS International - Animal Welfare ...",
      link: "https://media.4-paws.org/0/6/3/0/0630d8405b1935a373c1204b50c2729c7f429202/VIER%20PFOTEN_2019-10-08_065-1930x1335-1920x1328.jpg",
      displayLink: "www.four-paws.org",
      snippet:
        "Mutilation of Goats - FOUR PAWS International - Animal Welfare ...",
      htmlSnippet:
        "Mutilation of <b>Goats</b> - FOUR PAWS International - Animal Welfare ...",
      mime: "image/jpeg",
      fileFormat: "image/jpeg",
      image: {
        contextLink:
          "https://www.four-paws.org/campaigns-topics/topics/farm-animals/mutilation-of-goats",
        height: 1328,
        width: 1920,
        byteSize: 179064,
        thumbnailLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Os7G8bYEjjgYA6LpMhfrgkD8SgWgz9XBvYcaVH0GVil2gHxm2Oc3hA&s",
        thumbnailHeight: 104,
        thumbnailWidth: 150,
      },
    },
    {
      kind: "customsearch#result",
      title:
        "Old Irish Goats deployed to protect Dublin hills from wildfires ...",
      htmlTitle:
        "Old Irish <b>Goats</b> deployed to protect Dublin hills from wildfires ...",
      link: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/RQUW7KJN7ZMKJLZ4ASRBL4TGO4.jpg",
      displayLink: "www.reuters.com",
      snippet:
        "Old Irish Goats deployed to protect Dublin hills from wildfires ...",
      htmlSnippet:
        "Old Irish <b>Goats</b> deployed to protect Dublin hills from wildfires ...",
      mime: "image/jpeg",
      fileFormat: "image/jpeg",
      image: {
        contextLink:
          "https://www.reuters.com/world/europe/old-irish-goats-deployed-protect-dublin-hills-wildfires-2021-09-30/",
        height: 3280,
        width: 4928,
        byteSize: 4540690,
        thumbnailLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYupjF1y0ULEM-Guw_qROgEXa6WaBKizSZoyWv-c4NsUXI5D8XDAZOg&s",
        thumbnailHeight: 100,
        thumbnailWidth: 150,
      },
    },
    {
      kind: "customsearch#result",
      title: "The Secret Ingredient in Eau De Goat",
      htmlTitle: "The Secret Ingredient in Eau De <b>Goat</b>",
      link: "https://i.natgeofe.com/n/e9023026-7589-45ac-9e71-e510730329f3/Goat-portrait_4x3.jpg",
      displayLink: "www.nationalgeographic.com",
      snippet: "The Secret Ingredient in Eau De Goat",
      htmlSnippet: "The Secret Ingredient in Eau De <b>Goat</b>",
      mime: "image/jpeg",
      fileFormat: "image/jpeg",
      image: {
        contextLink:
          "https://www.nationalgeographic.com/science/article/the-secret-ingredient-in-eau-de-goat",
        height: 2303,
        width: 3072,
        byteSize: 623182,
        thumbnailLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RMV9-7utQaJwf-hGTPDqAbw6C13QmRYKlIcTL2YQCk_c4KJU_XjrbcU&s",
        thumbnailHeight: 112,
        thumbnailWidth: 150,
      },
    },
    {
      kind: "customsearch#result",
      title:
        "How Can You Tell If Your Goat Is Happy? Now We Know! : Goats and ...",
      htmlTitle:
        "How Can You Tell If Your <b>Goat</b> Is Happy? Now We Know! : <b>Goats</b> and ...",
      link: "https://media.npr.org/assets/img/2014/12/14/ap798386886673_custom-247a20518bf04f86ef4457d12939f46521c8751b.jpg",
      displayLink: "www.npr.org",
      snippet:
        "How Can You Tell If Your Goat Is Happy? Now We Know! : Goats and ...",
      htmlSnippet:
        "How Can You Tell If Your <b>Goat</b> Is Happy? Now We Know! : <b>Goats</b> and ...",
      mime: "image/jpeg",
      fileFormat: "image/jpeg",
      image: {
        contextLink:
          "https://www.npr.org/sections/goatsandsoda/2014/12/05/368772449/how-can-you-tell-if-your-goat-is-happy-now-we-know",
        height: 2635,
        width: 3956,
        byteSize: 2034882,
        thumbnailLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3KYtKmoTj0imrYijf42Xy9KppKiUp3Mb4hqT1JV3geoTfpe4knYU4F4&s",
        thumbnailHeight: 100,
        thumbnailWidth: 150,
      },
    },
  ],
};
