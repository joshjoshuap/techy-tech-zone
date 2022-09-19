import { playstattion5, sampleGadget, xboxSeriesX } from "./image-assets";

const gadgetItems = {
  consoleGaming: [
    {
      title: "Playstation 5",
      image: playstattion5,
      description:
        "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback1, adaptive triggers1 and 3D Audio*, and an all-new generation of incredible PlayStation games.",
      specs: [
        {
          specs: "x86-64-AMD Ryzen Zen 2",
        },
        {
          specs: "AMD Radeon RDNA 2-based graphics engine",
        },
        {
          specs: "16GB GDDR6/256-bit",
        },
        { specs: "Custom 825GB SSD" },
      ],
      link: "https://www.playstation.com/en-ph/ps5/",
    },
    {
      title: "XBOX Sereies X",
      image: xboxSeriesX,
      description:
        "The 12 teraflops of processing power housed in the system on a chip (SOC) work with AMD’s Zen 2 and RDNA 2 architectures to result in worlds that demand a closer look",
      specs: [
        {
          specs: "8X Cores @ 3.8 GHz (3.66 GHz w/SMT) Custom Zen 2 CPU",
        },
        {
          specs: "12 TFLOPS, 52 CUs @1.825 GHz Custom RDNA 2 GPU",
        },
        {
          specs: "16GB GDDR6",
        },
        { specs: "1TB Custom NVME SSD" },
      ],
      link: "https://www.xbox.com/en-US/consoles/xbox-series-x",
    },
  ],
};

export default gadgetItems;
