import {
  lenovoLegion5,
  lenovoX1Carbon,
  lenovoYoga6,
  lenovoIdepad3,
  acerNitro5,
  acerSwift5,
  acerAspire7,
  acerPredatorHelio,
  asusZenbook14,
  asusVivobookPro14,
  dellXPS13,
  dellInsipiron15,
  hpSpectreX360,
  hpEnvyX360,
} from "./image-assets";

const laptopItems = {
  lenovo: [
    {
      title: `Lenovo Legion 5`,
      image: lenovoLegion5,
      description: `Compete with the Legion 5 (15" AMD). It’s armed with everything you need to dominate any lobby, including up to AMD Ryzen™ 7 5800H mobile processors and NVIDIA® GeForce RTX™ 30 series graphics. Enjoy crisp visuals on a 15" FHD display, featuring amazing color accuracy and Dolby Vision™, while Nahimic 3D audio and the Legion Truestrike keyboard help you strike with pinpoint precision.
        `,
      specs: [
        { specs: `Up to AMD Ryzen™ 7 5800H mobile processor` },
        {
          specs: `NVIDIA® GeForce RTX™ 3070 Laptop GPU`,
        },
        { specs: `Up to 128GB Ram` },
        { specs: `Up to 2TB M.2 NVMe PCIe SSD` },
      ],
      link: `https://www.lenovo.com/ph/en/laptops/legion/legion-5-series/Legion-5-15ACH6H/p/88GMY501582`,
    },
    {
      title: `Lenovo Carbon X1`,
      image: lenovoX1Carbon,
      description: `The 10th generation of our premium ThinkPad X1 Carbon laptop is built on the Intel® Evo platform and powered by up to 12th Gen Intel® Core™ vPro® processors. It still has the legendary ThinkPad keyboard, only now we’ve redesigned the keys to create better airflow, in addition to rear exhaust ventilation.`,
      specs: [
        {
          specs: `Up to 12th Gen Intel® Core™ i7 vPro®`,
        },
        {
          specs: `Intel® Iris® Xe`,
        },
        {
          specs: `Up to 32GB LPDDR5 5200Mhz soldered down`,
        },
        {
          specs: `Up to 2TB PCIe SSD Gen 4 Performance`,
        },
      ],
      link: "https://www.lenovo.com/ph/en/laptops/thinkpad/thinkpad-x1/ThinkPad-X1-Carbon-Gen-10-14-inch-Intel/p/LEN101T0009",
    },
    {
      title: `Lenovo Yoga 6`,
      image: lenovoYoga6,
      description: `The 13.3″ Yoga 6 Gen 7 2-in-1 laptop boasts AMD Ryzen™ 5000 Series Mobile Processors, epic battery life, and robust audio-visual to bring your entertainment to life. Combined with the lightweight design and recycled materials that comprise the stylish chassis, this convertible device is ideal for anyone who requires high performance on the go without compromising the planet.`,
      specs: [
        {
          specs: `Up to AMD Ryzen™ 5000 Series 7 5700U Mobile Processor`,
        },
        {
          specs: `Integrated AMD Radeon™`,
        },
        {
          specs: `Up to 16GB LPDDR4x`,
        },
        {
          specs: `Up to 1TB SSD Gen 3 Performance`,
        },
      ],
      link: "https://www.lenovo.com/ph/en/laptops/yoga/yoga-c-series/Yoga-6-Gen-7-13-inch-AMD/p/82UDCTO1WWENPH0",
    },
    {
      title: `Lenovo Idepad 3`,
      image: lenovoIdepad3,
      description: `The IdeaPad 3 Gen 7 (14″ AMD) laptop is an easy-to-carry laptop. You can’t take your desk with you, but the AMD Ryzen™ 7 processor, multiple USB ports (including a full-function USB-C), and HD display may just feel like you can carry an entire workspace. Plus, the Lenovo AI Engine software will help you unpack powerful features with little interruption.`,
      specs: [
        {
          specs: `AMD Ryzen™ 5 5625U Processor (2.30 GHz up to 4.30 GHz)`,
        },
        {
          specs: `Integrated AMD Radeon™ Graphics™`,
        },
        {
          specs: `8 GB DDR4-3200MHz`,
        },
        {
          specs: `512 GB SSD M.2 2280 PCIe Gen3 QLC`,
        },
      ],
      link: "https://www.lenovo.com/ph/en/laptops/ideapad/s-series/IdeaPad-3-Gen-7-14-inch-AMD/p/LEN101I0047",
    },
  ],
  acer: [
    {
      title: `Acer Predator Helios 300`,
      image: acerPredatorHelio,
      description: `Suit up, strap in – and let Helios pave the way. Equipped with superior cooling technology, a blisteringly fast display, and a trove of performance-enhancing features – this gaming laptop will be your guide to gaming bliss.`,
      specs: [
        {
          specs: `Intel® Core™ i7-10750H processor Hexa-core 2.60 GHz`,
        },
        {
          specs: `NVIDIA® GeForce RTX™ 2060 with 6 GB dedicated memory`,
        },
        {
          specs: `16 GB, DDR4 SDRAM`,
        },
        {
          specs: `512 GB SSD`,
        },
      ],
      link: "https://www.acer.com/ac/en/PH/content/predator-series/predatorhelios300",
    },
    {
      title: `Acer Nitro 5`,
      image: acerNitro5,
      description: `Reign over the game world with the combined power of a 12th Gen Intel® Core™ i7 processor1 and NVIDIA® GeForce RTX™ 30 Series GPUs (fully optimized for maximum MGP). Configure your laptop for top speed and massive storage with two slots for GEN 4 M.2 PCIe and up to 32GB of DDR4 3200 RAM.`,
      specs: [
        {
          specs: `Intel® Core™ i5-10300H`,
        },
        {
          specs: `NVIDIA® GeForce RTX™ 3050`,
        },
        {
          specs: `8 GB, DDR4 SDRAM`,
        },
        {
          specs: `256 GB SSD`,
        },
      ],
      link: "https://www.acer.com/ac/en/PH/content/series/nitro5",
    },
    {
      title: `Acer Swift 5`,
      image: acerSwift5,
      description: `The Swift 5 carries immense power and outstanding thermal design within a premium, aerospace-grade aluminum chassis. Powered with 12th Gen Intel® Core™ processors delivering incomparable performance for your biggest breakthroughs.`,
      specs: [
        {
          specs: `Intel® Core™ i5-1135G7`,
        },
        {
          specs: `Iris Xe Graphics`,
        },
        {
          specs: `8 GB LPDDR4X`,
        },
        {
          specs: `256 GB SSD`,
        },
      ],
      link: "https://www.acer.com/ac/en/PH/content/series/swift5",
    },
    {
      title: `Acer Aspire 7`,
      image: acerAspire7,
      description: `Work hard. Play hard. The high-performance Acer Aspire 7 laptop is powered by the latest 12th Gen Intel® Core™ processors with GeForce RTX™ 30 Series graphics for performance in application or entertainment. Maximize efficiency with performance-grade thermal solutions and comprehensive connectivity options.`,
      specs: [
        {
          specs: `Intel® Core™ i7-9750H`,
        },
        {
          specs: `NVIDIA® GeForce® GTX 1650 4 GB GDDR5`,
        },
        {
          specs: `8 GB LPDDR4X`,
        },
        {
          specs: `256 GB SSD`,
        },
      ],
      link: "https://www.acer.com/ac/en/PH/content/series/aspire7",
    },
  ],
  asus: [
    {
      title: `ASUS Zenbook 14X OLED`,
      image: asusZenbook14,
      description: `Let your productivity shine with Zenbook 14X OLED! This compact, slim and light laptop features a beautiful 16:10 4K OLED HDR NanoEdge touchscreen that delivers the deepest blacks and the most vivid colors. Powered by the latest AMD® Ryzen™ 5000 H-Series processors, Zenbook 14X OLED also includes ASUS IceCool Plus dual-fan cooling technology for stunning sustained performance.`,
      specs: [
        {
          specs: `AMD Ryzen™ 5 5600H Mobile Processor`,
        },
        {
          specs: `AMD Radeon™ Graphics`,
        },
        {
          specs: `8GB LPDDR4X on board`,
        },
        {
          specs: `512GB M.2 NVMe™ PCIe® 3.0 SSD`,
        },
      ],
      link: "https://www.asus.com/ph/Laptops/For-Home/Zenbook/Zenbook-14X-OLED-UM5401-AMD-Ryzen-5000-Series/",
    },
    {
      title: `ASUS Vivobook Pro 14`,
      image: asusVivobookPro14,
      description: `It’s vivid. It’s vibrant. It’s Vivobook Pro 14 OLED, and it shows the true colors of your world. With its stunning 14-inch NanoEdge 2.8K OLED1 display and awe-inspiring Harman Kardon-certified audio, Vivobook Pro 14 OLED immerses you in whatever you’re doing, whether it’s work or play. Powered by the latest AMD Ryzen™ 9 5900HX Mobile Processor with NVIDIA® GeForce® RTX™ 3050 graphics and a dual-fan cooling system, and featuring ultrafast WiFi 6, the ultra-stylish Vivobook Pro 14 OLED lets you achieve your true potential.`,
      specs: [
        {
          specs: `AMD Ryzen™ 9 5900HX Mobile Processor`,
        },
        {
          specs: `AMD Radeon™ Graphics, NVIDIA® GeForce® RTX™ 3050 Laptop GPU`,
        },
        {
          specs: `16GB DDR4 on board`,
        },
        {
          specs: `512GB M.2 NVMe™ PCIe® 3.0 SSD`,
        },
      ],
      link: "https://www.asus.com/ph/Laptops/For-Home/Vivobook/Vivobook-Pro-14-OLED-M3401-AMD-Ryzen-5000-Series/",
    },
  ],
  dell: [
    {
      title: `Dell XPS 13`,
      image: dellXPS13,
      description: `The ultimate on-the-go laptop is built to be incredibly thin and light. Features panels that get up to 4K+ resolution, louder sound and deeper bass.`,
      specs: [
        {
          specs: `12th Generation Intel® Core™ i5-1230U`,
        },
        {
          specs: `Intel® Iris Xe Graphics`,
        },
        {
          specs: `8GB, LPDDR5, 5200 MHz, integrated, dual channel`,
        },
        {
          specs: `256GB PCIe NVMe x2 Solid State Drive Onboard`,
        },
      ],
      link: "https://www.dell.com/en-ph/shop/laptop-computers/xps-13-laptop/spd/xps-13-9315-laptop",
    },
    {
      title: `Dell Inspiron 15`,
      image: dellInsipiron15,
      description: `15.6-inch laptop with latest 11th generation Intel® Core™ processor options, a stylish aesthetic and thoughtful sustainable design, with essential features for daily use.`,
      specs: [
        {
          specs: `11th Generation Intel® Core™ i7-1165G7 Processor`,
        },
        {
          specs: `Intel® Iris® Xe Graphics with shared graphics memory`,
        },
        {
          specs: `8GB, 1x8GB, DDR4, 2666MHz,`,
        },
        {
          specs: `256GB M.2 PCIe NVMe Solid State Drive`,
        },
      ],
      link: "https://www.dell.com/en-ph/shop/laptop-computers/inspiron-15-3000-laptop/spd/inspiron-15-3511-laptop",
    },
  ],
  hp: [
    {
      title: `HP Spectre x360 2-in-1 Laptop`,
      image: hpSpectreX360,
      description: `Stunning design meets powerful performance with the HP Spectre x360 13.5". The flexible 360° design gets you in the perfect position, while the dynamic camera features let you look your best when live. Unite devices with HP Palette’s suite of software. This powerful machine comes with the Intel® Evo™ certified Platform and is designed sustainably.`,
      specs: [
        {
          specs: `12th Generation Intel® Core™ i5 processor`,
        },
        {
          specs: `Intel® Iris® Xᵉ Graphics`,
        },
        {
          specs: `8 GB memory`,
        },
        {
          specs: `512 GB SSD storage`,
        },
      ],
      link: "https://www.hp.com/us-en/shop/pdp/hp-spectre-x360-2-in-1-laptop-14-ef0747nr?jumpid=ma_2017-spectre-family_product-tile_hp-spectre-x-360_1_6y041ua_hp-spectre-x360-2-in",
    },
    {
      title: `HP ENVY x360 2-in-1 Laptop`,
      image: hpEnvyX360,
      description: `The HP Envy x360 15.6" has the tools to create every which way. Combine the creative power of your devices with HP Palette. With the 15.6" display, you get beautiful, brilliant colors plus power from the Intel® Processor and powerful graphics. Look and sound your best on video calls with a 5MP camera[2] with Auto Frame and AI Noise Reduction.`,
      specs: [
        {
          specs: `Intel® Core™ i7-1260P`,
        },
        {
          specs: `Intel® Iris® Xᵉ Graphics`,
        },
        {
          specs: `16 GB DDR4-3200 SDRAM`,
        },
        {
          specs: `256 GB PCIe® NVMe™ M.2 SSD`,
        },
      ],
      link: "https://www.hp.com/us-en/shop/pdp/hp-envy-x360-2-in-1-laptop-15t-ew000-6n177av-1",
    },
  ],
};

export default laptopItems;
