import {
  iphone12,
  iphone13,
  iphone14Pro,
  oppoFindX5Pro,
  oppoReno5G,
  realme8Pro,
  realme9Pro,
  samsunga745g,
  samsungS22,
  vivoX80Pro,
} from "./image-assets";

const phoneItems = {
  iphone: [
    {
      title: `Iphone 14 Pro`,
      image: iphone14Pro,
      description: `iPhone 13. The most advanced dual-camera system ever on iPhone. Lightning-fast A15 Bionic chip. A big leap in battery life. Durable design. Superfast 5G.1 And a brighter Super Retina XDR display.`,
      specs: [
        {
          specs: `Super Retina XDR display 6.1‑inch (diagonal) all‑screen OLED display`,
        },
        {
          specs: `A16 Bionic chip`,
        },
        { specs: `Up to 6gb Ram` },
        { specs: `Up to 1TB Storage` },
      ],
      link: `https://www.apple.com/ph/iphone-14-pro/`,
    },
    {
      title: `Iphone 13`,
      image: iphone13,
      description: `iPhone 13. The most advanced dual-camera system ever on iPhone. Lightning-fast A15 Bionic chip. A big leap in battery life. Durable design. Superfast 5G.1 And a brighter Super Retina XDR display.`,
      specs: [
        {
          specs: `LTPO Super Retina XDR OLED 6.1 inches`,
        },
        {
          specs: `Apple A15 Bionic (5 nm)`,
        },
        { specs: `Up to 4gb Ram` },
        { specs: `Up to 512gb Storage` },
      ],
      link: `https://www.apple.com/ph/shop/buy-iphone/iphone-13`,
    },
    {
      title: `Iphone 12`,
      image: iphone12,
      description: `iPhone 12. 5G to download movies on the fly and stream high-quality video. Beautifully bright 6.1-inch Super Retina XDR display. Ceramic Shield with four times better drop performance. Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip.`,
      specs: [
        {
          specs: `Super Retina XDR OLED, HDR10`,
        },
        {
          specs: `Apple A14 Bionic (5 nm)`,
        },
        { specs: `Up to 4gb Ram` },
        { specs: `Up to 256gb Storage` },
      ],
      link: `https://www.apple.com/ph/shop/buy-iphone/iphone-12`,
    },
  ],
  samsung: [
    {
      title: `Samsung S22`,
      image: samsungS22,
      description: `The slim bezels flow into a symmetrical polished frame for an expansive, balanced display. As a finishing touch, the monochromatic camera housing surrounds a linear camera system. Oh so beautiful.`,
      specs: [
        {
          specs: `Dynamic AMOLED 6.1 inches`,
        },
        {
          specs: `Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) `,
        },
        { specs: `Up to 8gb Ram` },
        { specs: `Up to 256gb Storage` },
      ],
      link: `https://www.samsung.com/ph/smartphones/galaxy-s22/`,
    },
    {
      title: `Samsung A73 5G`,
      image: samsunga745g,
      description: `It's time to enter into the next chapter. Hyperfast 5G connection takes your everyday mobile experiences and vastly enhances them with next-level speed. Feel truly connected with seamless streaming, instant sharing and the power to transfer your thoughts to action in a blink.`,
      specs: [
        {
          specs: `Super AMOLED Plus 6.7 inches,`,
        },
        {
          specs: `Qualcomm SM7325 Snapdragon 778G 5G (6 nm)`,
        },
        { specs: `Up to 8gb Ram` },
        { specs: `Up to 256gb Storage` },
      ],
      link: `https://www.samsung.com/ph/smartphones/galaxy-a/galaxy-a73-5g-awesomegray-256gb-sm-a736bzahphl/`,
    },
  ],
  oppo: [
    {
      title: `Oppo Reno 5`,
      image: oppoReno5G,
      description: `TThe action doesn't stop because the sun goes down. Whether in the bright lights of the big city or the star-lit serenity of the countryside, the Dual Sony Flagship Sensors help to capture everything you see even in the dark.
      `,
      specs: [
        {
          specs: `AMOLED, 90Hz 6.43 inches`,
        },
        {
          specs: `Qualcomm SM7250 Snapdragon 765G 5G (7 nm)`,
        },
        { specs: `Up to 12gb Ram` },
        { specs: `Up to 256gb Storage` },
      ],
      link: `https://www.oppo.com/ph/smartphones/series-reno/reno8-5g/`,
    },
    {
      title: `Oppo Find X Pro 5`,
      image: oppoFindX5Pro,
      description: `Complementing the complexity of OPPO Find X5 Pro’s ceramic body is its durability. With IP68 Water and Dust Resistance¹, you can forge your path without fear of the elements.`,
      specs: [
        {
          specs: `LTPO2 AMOLED, 1B colors, 120Hz, HDR10+ 6.7 inches`,
        },
        {
          specs: `Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) `,
        },
        { specs: `Up to 12gb Ram` },
        { specs: `Up to 512gb Storage` },
      ],
      link: `https://www.oppo.com/ph/smartphones/series-find-x/find-x5-pro/`,
    },
  ],
  vivo: [
    {
      title: `Vivo Pro 5G`,
      image: vivoX80Pro,
      description: ``,
      specs: [
        {
          specs: `LTPO3 AMOLED, 1B colors, 120Hz 6.78 inches`,
        },
        {
          specs: `Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)`,
        },
        { specs: `Up to 12gb Ram` },
        { specs: `Up to 512gb Storage` },
      ],
      link: `https://www.vivo.com/ph/products/x80pro`,
    },
  ],
  realme: [
    {
      title: `Realme 9 pro`,
      image: realme9Pro,
      description: `The realme 9 Pro is powered by Qualcomm® Snapdragon™ 695, a processor so fast, even the most resource-demanding apps run smoothly. And what’s more, it’s incredibly energy-efficient thanks to 6nm process technology`,
      specs: [
        {
          specs: `IPS LCD, 120Hz`,
        },
        {
          specs: `Qualcomm SM6375 Snapdragon 695 5G (6 nm)`,
        },
        { specs: `Up to 8gb Ram` },
        { specs: `Up to 128gb Storage` },
      ],
      link: `https://www.realme.com/ph/realme-9-pro`,
    },
    {
      title: `Realme 8 pro`,
      image: realme8Pro,
      description: `Inspired by the radiant and boundless universe, realme 8 Pro's design mimics the night sky filled with a multitude of tiny stars, dreamlike and futuristic. It's like holding infinity in your hand. But if you prefer a more mysterious and understated design, you can choose our specially created Punk Black.`,
      specs: [
        {
          specs: `Super AMOLED 6.4 inches`,
        },
        {
          specs: `Qualcomm SM7125 Snapdragon 720G (8 nm)`,
        },
        { specs: `Up to 8gb Ram` },
        { specs: `Up to 128gb Storage` },
      ],
      link: `https://www.realme.com/ph/realme-8-pro`,
    },
  ],
};

export default phoneItems;
