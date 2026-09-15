import type { Tile } from "./data";

export function TileGrid({ tiles, columns = 5 }: { tiles: Tile[]; columns?: number }) {
  return (
    <div
      className={`grid grid-cols-2 gap-2 md:gap-3 ${
        columns === 3 ? "md:grid-cols-3" : columns === 4 ? "md:grid-cols-4" : "md:grid-cols-5"
      }`}
    >
      {tiles.map((tile) => (
        <a key={tile.label} href="#collections" className="group relative block overflow-hidden">
          <div className="aspect-[4/5] overflow-hidden bg-surface">
            <img
              src={tile.img}
              alt={tile.label}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <span className="text-sm font-bold tracking-[0.1em] text-background uppercase">{tile.label}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
