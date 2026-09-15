import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { TileGrid } from "@/components/site/TileGrid";
import {
  accessories,
  collectionTiles,
  denimBanner,
  latestProducts,
  mensActivity,
  mensTiles,
  shoesBanner,
  shopTiles,
  womensActivity,
  womensTiles,
} from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carnage | Performance Gym Wear & Activewear" },
      {
        name: "description",
        content:
          "Shop Carnage performance activewear: tanks, tees, leggings, sports bras, shoes and accessories built to help you be better everyday.",
      },
      { property: "og:title", content: "Carnage | Performance Gym Wear & Activewear" },
      {
        property: "og:description",
        content:
          "Shop Carnage performance activewear: tanks, tees, leggings, sports bras, shoes and accessories built to help you be better everyday.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHead({ title, cta }: { title: string; cta?: string }) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <h2 className="heading-italic text-2xl md:text-3xl">{title}</h2>
      {cta && (
        <a href="#collections" className="text-xs font-bold tracking-[0.12em] uppercase underline-offset-4 hover:underline">
          {cta}
        </a>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
          <img
            src={shoesBanner}
            alt="Athlete training in Carnage performance wear"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
          <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-16 md:px-8 md:pb-24">
            <h1 className="heading-italic text-5xl leading-none text-background md:text-7xl lg:text-8xl">
              Be Better Everyday
            </h1>
            <p className="mt-4 text-sm text-background/85 md:text-base">Explore our Collection</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#mens" className="btn-solid">
                Shop Mens
              </a>
              <a href="#womens" className="btn-solid">
                Shop Womens
              </a>
            </div>
          </div>
        </section>

        {/* Latest styles */}
        <section id="collections" className="mx-auto max-w-[1600px] px-5 py-16 md:px-8">
          <SectionHead title="Shop the latest styles" cta="Shop all" />
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4">
            {latestProducts.map((p) => (
              <ProductCard key={p.title} product={p} />
            ))}
          </div>
        </section>

        {/* Collections strip */}
        <section className="mx-auto max-w-[1600px] px-5 pb-16 md:px-8">
          <div className="grid gap-3 md:grid-cols-2">
            {collectionTiles.map((tile) => (
              <a key={tile.label} href="#collections" className="group relative block overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden bg-surface">
                  <img
                    src={tile.img}
                    alt={tile.label}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6">
                  <span className="heading-italic text-xl text-background md:text-2xl">{tile.label}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Denim banner */}
        <section className="relative">
          <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
            <img src={denimBanner} alt="Women's denim collection" loading="lazy" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative mx-auto flex h-full max-w-[1600px] flex-col items-start justify-center px-5 md:px-8">
              <h2 className="heading-italic text-4xl text-background md:text-6xl">Shop Women's Denim</h2>
              <p className="mt-3 max-w-md text-sm text-background/85">Built for comfort, styled for every day.</p>
              <a href="#womens" className="btn-outline-light mt-6">
                Shop now
              </a>
            </div>
          </div>
        </section>

        {/* Womens categories */}
        <section id="womens" className="mx-auto max-w-[1600px] px-5 py-16 md:px-8">
          <SectionHead title="Shop Women's" cta="View all" />
          <TileGrid tiles={womensTiles} columns={5} />
        </section>

        {/* Mens categories */}
        <section id="mens" className="mx-auto max-w-[1600px] px-5 pb-16 md:px-8">
          <SectionHead title="Shop Men's" cta="View all" />
          <TileGrid tiles={mensTiles} columns={5} />
        </section>

        {/* Activity */}
        <section className="mx-auto max-w-[1600px] px-5 pb-16 md:px-8">
          <SectionHead title="Shop Men's by Activity" />
          <TileGrid tiles={mensActivity} columns={4} />
        </section>

        <section className="mx-auto max-w-[1600px] px-5 pb-16 md:px-8">
          <SectionHead title="Shop Women's by Activity" />
          <TileGrid tiles={womensActivity} columns={4} />
        </section>

        {/* Shoes banner */}
        <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
          <img src={shoesBanner} alt="Carnage shoe collection" loading="lazy" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative mx-auto flex h-full max-w-[1600px] flex-col items-center justify-center px-5 text-center md:px-8">
            <h2 className="heading-italic text-4xl text-background md:text-6xl">Shop Shoes</h2>
            <p className="mt-3 text-sm text-background/85">Explore the shoe collection</p>
            <a href="#collections" className="btn-outline-light mt-6">
              Shop now
            </a>
          </div>
        </section>

        {/* Shop by audience */}
        <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-8">
          <TileGrid tiles={shopTiles} columns={3} />
        </section>

        {/* Accessories */}
        <section className="mx-auto max-w-[1600px] px-5 pb-20 md:px-8">
          <SectionHead title="Gear & Accessories" cta="Shop all" />
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4">
            {accessories.map((p) => (
              <ProductCard key={p.title} product={p} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
