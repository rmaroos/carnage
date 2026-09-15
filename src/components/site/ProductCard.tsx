import type { Product } from "./data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <a href="#collections" className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <img
          src={product.img}
          alt={product.title}
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src={product.hover}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-ink px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.1em] text-background uppercase">
            New
          </span>
        )}
      </div>
      <div className="pt-3">
        <h3 className="text-sm font-semibold">{product.title}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{product.color}</p>
        <p className="mt-1.5 text-sm font-medium">{product.price}</p>
      </div>
    </a>
  );
}
