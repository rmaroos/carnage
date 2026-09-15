const cdn = "https://incarnage.com/cdn/shop/files";

export type Product = {
  title: string;
  color: string;
  price: string;
  img: string;
  hover: string;
  isNew?: boolean;
};

export const latestProducts: Product[] = [
  {
    title: "Aeroforme Tank",
    color: "Volt Orange",
    price: "LKR 5,850.00",
    img: `${cdn}/IMG_1221_41ca45e9-f41d-4591-afee-26951cbe5ecd.jpg?crop=center&height=1250&v=1786536951&width=1000`,
    hover: `${cdn}/IMG_1219_68e49e25-19c0-4483-8f01-5fe836c64d07.jpg?crop=center&height=1250&v=1786537084&width=1000`,
  },
  {
    title: "Racquet Archive Tee",
    color: "Serene Pink",
    price: "LKR 4,450.00",
    isNew: true,
    img: `${cdn}/IMG_8515.jpg?crop=center&height=1250&v=1787663041&width=1000`,
    hover: `${cdn}/IMG_8504_6feca968-8d83-4d50-b142-4ab1619798b1.jpg?crop=center&height=1250&v=1787664103&width=1000`,
  },
  {
    title: "Core Seamless Women's Tank",
    color: "Pastel Lilac",
    price: "LKR 4,550.00",
    isNew: true,
    img: `${cdn}/IMG_9231_2db1fddf-0a73-4ba5-a979-a620fd969dcc.jpg?crop=center&height=1250&v=1787925485&width=1000`,
    hover: `${cdn}/IMG_9232_3491c8cc-0945-4ba4-91b9-72d42f0cf706.jpg?crop=center&height=1250&v=1787925607&width=1000`,
  },
  {
    title: "Astro Tee V2 - Oversize - Unisex",
    color: "Butter Yellow",
    price: "LKR 4,850.00",
    img: `${cdn}/IMG_8595_d72891b6-cd1b-4a92-9338-3b20bd00e421.jpg?crop=center&height=1250&v=1787897748&width=1000`,
    hover: `${cdn}/IMG_8586_20153965-3800-441c-a396-8b3dbde3327c.jpg?crop=center&height=1250&v=1787897986&width=1000`,
  },
  {
    title: "Aero-X Active Tank",
    color: "Black/Ash",
    price: "LKR 3,350.00",
    isNew: true,
    img: `${cdn}/IMG_8859_51c52c35-7d1e-493e-944e-067b08c14eb6.jpg?crop=center&height=1250&v=1788166367&width=1000`,
    hover: `${cdn}/IMG_8861_0fb54187-4a0c-48ad-85ad-1318ec3a83aa.jpg?crop=center&height=1250&v=1788166475&width=1000`,
  },
  {
    title: "Aero-X Crew Neck",
    color: "Black/White",
    price: "LKR 3,350.00",
    isNew: true,
    img: `${cdn}/IMG_8775_3663ae93-aa8f-4d27-9516-ae65f38df5e9.jpg?crop=center&height=1250&v=1788165473&width=1000`,
    hover: `${cdn}/IMG_8777_c8792ad3-726b-4326-86d0-a015cf318098.jpg?crop=center&height=1250&v=1788165702&width=1000`,
  },
  {
    title: "LeagueRun Tank",
    color: "Grey/White",
    price: "LKR 4,450.00",
    isNew: true,
    img: `${cdn}/IMG_9012_731e69f2-d488-47cb-99cf-6977745487eb.jpg?crop=center&height=1250&v=1787735661&width=1000`,
    hover: `${cdn}/IMG_9009_d5c74255-9442-443c-898f-5794d488a018.jpg?crop=center&height=1250&v=1787735771&width=1000`,
  },
  {
    title: "Lumen Crew Neck",
    color: "Navy",
    price: "LKR 3,250.00",
    isNew: true,
    img: `${cdn}/IMG_8832_82f87fb4-3771-4107-83ab-9a3d01979092.jpg?crop=center&height=1250&v=1788155784&width=1000`,
    hover: `${cdn}/IMG_8830_f7839b0b-fd44-4b7b-9c70-643c6d1c3691.jpg?crop=center&height=1250&v=1788156199&width=1000`,
  },
];

export const accessories: Product[] = [
  {
    title: "Phantom X",
    color: "Jet Black",
    price: "LKR 15,500.00",
    img: `${cdn}/Per-PhantomB_723107a1-db41-4dae-a1cf-d0c1d4edb138.jpg?crop=center&height=1250&v=1775811669&width=1000`,
    hover: `${cdn}/Left-PhantomB_d4c91e16-70bc-4ef9-b900-fca9d7d13558.jpg?crop=center&height=1250&v=1775811669&width=1000`,
  },
  {
    title: "Hydro Handle Tumbler",
    color: "Camo Black",
    price: "LKR 6,500.00",
    img: `${cdn}/IMG_8947_194206c5-f563-4bd7-81b1-95f3534b9e47.jpg?crop=center&height=1250&v=1774959475&width=1000`,
    hover: `${cdn}/IMG_8948.jpg?crop=center&height=1250&v=1774959475&width=1000`,
  },
  {
    title: "Surge Squeeze Bottle",
    color: "Sheer White",
    price: "LKR 3,950.00",
    img: `${cdn}/6_1e9e2cf4-aaa9-4943-9db8-a52decc8af15.jpg?crop=center&height=1250&v=1778153626&width=1000`,
    hover: `${cdn}/5_11cabae3-35e1-4996-bb4f-06ac180f29cb.jpg?crop=center&height=1250&v=1778153552&width=1000`,
  },
  {
    title: "Core Sneaker",
    color: "Sheer White",
    price: "LKR 13,500.00",
    img: `${cdn}/Per-Core_16ea1d2d-d51b-4aea-8d0c-8e3b8700bde4.jpg?crop=center&height=1250&v=1775810418&width=1000`,
    hover: `${cdn}/Left-Core_73ca10fc-eff9-4aff-9801-f77b17603a5e.jpg?crop=center&height=1250&v=1775810418&width=1000`,
  },
];

export type Tile = { label: string; img: string };

export const womensTiles: Tile[] = [
  { label: "Sports Bra", img: `${cdn}/DSC07155_1.jpg?crop=center&height=1000&v=1774029485&width=800` },
  { label: "Leggings", img: `${cdn}/DSC07531.jpg?crop=center&height=1000&v=1774029679&width=800` },
  { label: "Crop top", img: `${cdn}/DSC07818.jpg?crop=center&height=1000&v=1774029912&width=800` },
  { label: "Tshirts", img: `${cdn}/DSC07208.jpg?crop=center&height=1000&v=1774030133&width=800` },
  { label: "Pants", img: `${cdn}/IMG_9190.webp?crop=center&height=1000&v=1774030386&width=800` },
];

export const mensTiles: Tile[] = [
  { label: "Tshirts", img: `${cdn}/IMG_1202.jpg?crop=center&height=1000&v=1774032124&width=800` },
  { label: "Pants", img: `${cdn}/IMG_1653.webp?crop=center&height=1000&v=1774031768&width=800` },
  { label: "Tanks", img: `${cdn}/IMG_1720_0edb51a2-9672-4c3c-9525-981f0f4a636a.jpg?crop=center&height=1000&v=1774031955&width=800` },
  { label: "Shorts", img: `${cdn}/IMG_1853_fe67eab8-8b12-4749-a7dc-cf81eeb6a404.jpg?crop=center&height=1000&v=1774032049&width=800` },
  { label: "Polos", img: `${cdn}/IMG_6370_83fee384-6bd2-4ee9-9f4b-6d029d196e36.jpg?crop=center&height=1000&v=1774032198&width=800` },
];

export const mensActivity: Tile[] = [
  { label: "Lifting", img: `${cdn}/IMG_6530.jpg?crop=center&height=1000&v=1774032957&width=800` },
  { label: "Running", img: `${cdn}/A-57.jpg?crop=center&height=1000&v=1774033049&width=800` },
  { label: "Rest Day", img: `${cdn}/IMG_0117_02e41f14-e97c-4fae-96d6-a715db391d19.jpg?crop=center&height=1000&v=1774034115&width=800` },
  { label: "Casual", img: `${cdn}/DSC08000.jpg?crop=center&height=1000&v=1774034014&width=800` },
];

export const womensActivity: Tile[] = [
  { label: "Lifting", img: `${cdn}/DSC03529-Edit.jpg?crop=center&height=1000&v=1774033372&width=800` },
  { label: "Running", img: `${cdn}/DSC03491-Edit.jpg?crop=center&height=1000&v=1774033400&width=800` },
  { label: "Rest Day", img: `${cdn}/IMG_6051.jpg?crop=center&height=1000&v=1774033507&width=800` },
  { label: "Pilates/Yoga", img: `${cdn}/DSC00271.jpg?crop=center&height=1000&v=1774033694&width=800` },
];

export const shopTiles: Tile[] = [
  { label: "Shop womens", img: `${cdn}/IMG_2305_1.jpg?crop=center&height=1000&v=1774040240&width=800` },
  { label: "Shop mens", img: `${cdn}/IMG_3290.jpg?crop=center&height=1000&v=1774040256&width=800` },
  { label: "Shop accessories", img: `${cdn}/501A0090.jpg?crop=center&height=1000&v=1773463162&width=800` },
];

export const collectionTiles: Tile[] = [
  { label: "Crop top collection", img: `${cdn}/IMG_5936.jpg?crop=center&height=400&v=1773542576&width=600` },
  { label: "Phantom Collection", img: `${cdn}/IMG_4009.jpg?crop=center&height=400&v=1773191199&width=600` },
];

export const heroImage = `${cdn}/Middle_Banner_Desktop_bb9e61bd-37fa-4a29-9269-1d306c7a701c.jpg?v=1775464579&width=2400`;
export const denimBanner = `${cdn}/Middle_Banner_Desktop_bb9e61bd-37fa-4a29-9269-1d306c7a701c.jpg?v=1775464579&width=2400`;
export const shoesBanner = `${cdn}/IMG_2305_1.jpg?crop=center&height=1000&v=1774040240&width=1600`;
