import { iphone12, iphone13, iphone14Pro, } from "./image-assets";

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
};

export default phoneItems;
