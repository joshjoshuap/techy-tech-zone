import {
  ipadAir2022,
  ipadMini,
  samsungTabA8,
  samsungTabS8,
} from "./image-assets";

const tabletItems = {
  ipad: [
    {
      title: "Apple Ipad Air",
      image: ipadAir2022,
      description:
        "iPad Air lets you immerse yourself in whatever you’re reading, watching, or creating. The 10.9-inch Liquid Retina display features advanced technologies like True Tone, P3 wide color, and an antireflective coating.",
      specs: [
        {
          specs: "Liquid Retina IPS LCD, 500 nits 10.9 inche",
        },
        {
          specs: "Apple M1, iPadOS 15.4",
        },
        {
          specs: "256GB 8GB RAM",
        },
        {
          specs: "12 MP, f/2.4, 122˚ (ultrawide)",
        },
      ],
      link: "https://www.apple.com/ph/ipad-air/",
    },
    {
      title: "Apple Ipad Mini",
      image: ipadMini,
      description:
        "iPad mini is meticulously designed to be absolutely beautiful. An all-new enclosure features a new, larger edge-to-edge screen, along with narrow borders and elegant rounded corners.",
      specs: [
        {
          specs: "LLiquid Retina IPS LCD, 500 nits 8.3 inches,",
        },
        {
          specs: "Apple A15 Bionic (5 nm), iPadOS 15",
        },
        {
          specs: "256GB 4GB RAM",
        },
        {
          specs: "12 MP, f/1.8, (wide), AF / 12 MP, f/2.4, 122˚ (ultrawide)",
        },
      ],
      link: "https://www.apple.com/ph/ipad-mini/",
    },
  ],
  samsung: [
    {
      title: "Samsung Tab S8",
      image: samsungTabS8,
      description:
        "More than just space. The largest Samsung Galaxy Tab S is designed so you can create like a pro. Shoot with our first ultra wide front camera in a tablet and edit on the largest screen in the Samsung Galaxy Tab S. Get it all in a graphite finish that goes with everything.",
      specs: [
        {
          specs: "TFT LCD, 120Hz, 11.0 inches",
        },
        {
          specs: "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
        },
        {
          specs: "Adreno 730",
        },
        {
          specs: "256GB 8GB RAM, 256GB 12GB RAM",
        },
      ],
      link: "https://www.samsung.com/ph/tablets/galaxy-tab-s/galaxy-tab-s8-5g-silver-256gb-sm-x706bzsbxtc/",
    },
    {
      title: "Samsung Tab A8",
      image: samsungTabA8,
      description:
        "The 10.5” wide display, complete with symmetric bezel measuring only 10.2mm, allows you to stay fully immersed in what’s on the screen. Explore, without compromise. From epic films to how-to contents for a hobby you love, Galaxy Tab A8 invites you to a broader world through a bigger, better view",
      specs: [
        {
          specs: "TFT LCD, 10.5 inches,",
        },
        {
          specs: "Unisoc Tiger T618 (12 nm)",
        },
        {
          specs: "Mali G52 MP2",
        },
        {
          specs: "128GB 3GB RAM, 128GB 4GB RAM",
        },
      ],
      link: "https://www.samsung.com/ph/tablets/galaxy-tab-a/galaxy-tab-a8-wifi-dark-gray-64gb-sm-x200nzaextc/",
    },
  ],
  huawei: [
    {
      title: "Huawei MatePad Pro",
      image: samsungTabA8,
      description:
        "As light as 449 g12, the 5.9 mm12 ultra-slim Huawei's sleekest-ever 11-inch tablet comes encased in a durable rear cover, which is highlighted by the frosting process, producing a fine-grained metallic coating. Gracefully rounded corners provide the finishing touch, giving off a highly satisfying look and feel.",
      specs: [
        {
          specs: "OLED, 12.6 inches",
        },
        {
          specs: "Kirin 9000 5G (5 nm)",
        },
        {
          specs: "Mali-G78 MP24",
        },
        {
          specs: "256GB 8GB RAM, 512GB 12GB RAM",
        },
      ],
      link: "https://consumer.huawei.com/en/tablets/matepad-pro-11",
    },
  ]
};

export default tabletItems;
