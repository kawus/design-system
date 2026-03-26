"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import {
  Search,
  ShoppingBag,
  Heart,
  Star,
  Minus,
  Plus,
  Truck,
  RotateCcw,
  Shield,
  ChevronRight,
  X,
  User,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const products = [
  { id: 1, name: "Merino Wool Crew", price: 89, category: "Tops", color: "Charcoal", rating: 4.8, reviews: 124, tag: "Best Seller", image: "MW" },
  { id: 2, name: "Organic Cotton Tee", price: 45, category: "Tops", color: "Off White", rating: 4.6, reviews: 89, tag: null, image: "OC" },
  { id: 3, name: "Technical Pant", price: 128, category: "Bottoms", color: "Black", rating: 4.9, reviews: 203, tag: "New", image: "TP" },
  { id: 4, name: "Cashmere Beanie", price: 65, category: "Accessories", color: "Navy", rating: 4.7, reviews: 56, tag: null, image: "CB" },
  { id: 5, name: "Canvas Tote", price: 38, category: "Accessories", color: "Natural", rating: 4.5, reviews: 71, tag: null, image: "CT" },
  { id: 6, name: "Relaxed Hoodie", price: 112, category: "Tops", color: "Sage", rating: 4.8, reviews: 167, tag: "Best Seller", image: "RH" },
  { id: 7, name: "Slim Chino", price: 98, category: "Bottoms", color: "Khaki", rating: 4.6, reviews: 134, tag: null, image: "SC" },
  { id: 8, name: "Leather Belt", price: 55, category: "Accessories", color: "Brown", rating: 4.9, reviews: 92, tag: "New", image: "LB" },
]

const cartItems = [
  { id: 1, name: "Technical Pant", color: "Black", size: "32", price: 128, qty: 1, image: "TP" },
  { id: 2, name: "Merino Wool Crew", color: "Charcoal", size: "M", price: 89, qty: 2, image: "MW" },
]

const sizes = ["XS", "S", "M", "L", "XL"]

/* ------------------------------------------------------------------ */
/*  Subcomponents                                                       */
/* ------------------------------------------------------------------ */

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn(
            "size-3",
            i <= Math.floor(rating)
              ? "fill-foreground text-foreground"
              : "text-muted-foreground/30"
          )}
        />
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="group">
      {/* Image placeholder */}
      <div className="relative aspect-[3/4] rounded-xl bg-muted/50 mb-3 flex items-center justify-center overflow-hidden">
        <span className="text-3xl font-medium text-muted-foreground/30 tracking-tight">
          {product.image}
        </span>
        {product.tag && (
          <Badge
            variant={product.tag === "New" ? "default" : "secondary"}
            className="absolute top-3 left-3 text-[10px]"
          >
            {product.tag}
          </Badge>
        )}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 size-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className={cn("size-3.5", liked ? "fill-foreground text-foreground" : "text-muted-foreground")} />
        </button>
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" className="w-full text-xs">
            <ShoppingBag className="size-3.5 mr-1.5" />
            Add to Cart
          </Button>
        </div>
      </div>
      {/* Info */}
      <div className="space-y-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-[15px] font-medium text-foreground">{product.name}</p>
          <p className="text-[15px] font-medium text-foreground shrink-0">${product.price}</p>
        </div>
        <p className="text-[13px] text-muted-foreground">{product.color}</p>
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-[11px] text-muted-foreground/60">({product.reviews})</span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Sections                                                            */
/* ------------------------------------------------------------------ */

function Navbar() {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-8">
        <p className="text-sm font-semibold tracking-tight">
          <span className="text-foreground">the</span>
          <span className="text-muted-foreground">shop</span>
        </p>
        <nav className="hidden md:flex items-center gap-1">
          {["New Arrivals", "Tops", "Bottoms", "Accessories"].map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 text-[13px] text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            >
              {item}
            </span>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon-sm">
          <Search className="size-4" />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <User className="size-4" />
        </Button>
        <Button variant="ghost" size="icon-sm" className="relative">
          <ShoppingBag className="size-4" />
          <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-foreground text-background text-[9px] font-medium flex items-center justify-center">
            3
          </span>
        </Button>
      </div>
    </div>
  )
}

function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category.toLowerCase() === activeCategory)

  return (
    <section>
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-2">
            Collection
          </p>
          <h2 className="text-2xl font-medium tracking-tight">
            Spring Essentials
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList>
              <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
              <TabsTrigger value="tops" className="text-xs">Tops</TabsTrigger>
              <TabsTrigger value="bottoms" className="text-xs">Bottoms</TabsTrigger>
              <TabsTrigger value="accessories" className="text-xs">Accessories</TabsTrigger>
            </TabsList>
          </Tabs>
          <Select defaultValue="featured">
            <SelectTrigger className="w-[140px] h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState("M")
  const [qty, setQty] = useState(1)

  return (
    <section>
      <Separator className="my-16" />

      <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-8">
        Product Detail
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="space-y-3">
          <div className="aspect-square rounded-xl bg-muted/50 flex items-center justify-center">
            <span className="text-6xl font-medium text-muted-foreground/20 tracking-tight">TP</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={cn(
                  "aspect-square rounded-lg bg-muted/50 flex items-center justify-center cursor-pointer transition-all",
                  i === 1 ? "ring-2 ring-foreground" : "hover:ring-1 hover:ring-border"
                )}
              >
                <span className="text-sm text-muted-foreground/30">0{i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="default" className="text-[10px]">New</Badge>
              <StarRating rating={4.9} />
              <span className="text-[11px] text-muted-foreground/60">(203 reviews)</span>
            </div>
            <h2 className="text-2xl font-medium tracking-tight">Technical Pant</h2>
            <p className="text-xl font-medium text-foreground mt-1">$128</p>
          </div>

          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Engineered for movement. Four-way stretch fabric with a clean, tailored silhouette
            that works from the office to the trail. Water-resistant finish, hidden zip pocket.
          </p>

          {/* Color */}
          <div>
            <p className="text-[13px] font-medium mb-3">Color — <span className="text-muted-foreground font-normal">Black</span></p>
            <div className="flex items-center gap-2">
              {["bg-foreground", "bg-muted", "bg-[#6B7C5E]"].map((color, i) => (
                <button
                  key={color}
                  className={cn(
                    "size-8 rounded-full transition-all",
                    color,
                    i === 0 ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : "hover:ring-1 hover:ring-border hover:ring-offset-1 hover:ring-offset-background"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[13px] font-medium">Size</p>
              <button className="text-[13px] text-muted-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">
                Size guide
              </button>
            </div>
            <div className="flex items-center gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "h-9 min-w-9 px-3 rounded-lg text-[13px] font-medium transition-all",
                    selectedSize === size
                      ? "bg-foreground text-background"
                      : "border border-border hover:border-foreground/30"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-border rounded-lg">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="size-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Minus className="size-3.5" />
              </button>
              <span className="w-8 text-center text-[13px] font-medium">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="size-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Plus className="size-3.5" />
              </button>
            </div>
            <Button className="flex-1">
              <ShoppingBag className="size-4 mr-2" />
              Add to Cart — ${128 * qty}
            </Button>
          </div>

          <Separator />

          {/* Perks */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Truck, label: "Free shipping", sub: "Over $75" },
              { icon: RotateCcw, label: "Free returns", sub: "30 days" },
              { icon: Shield, label: "2-year warranty", sub: "Full coverage" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="text-center">
                <Icon className="size-4 text-muted-foreground mx-auto mb-1.5" />
                <p className="text-[13px] font-medium">{label}</p>
                <p className="text-[11px] text-muted-foreground">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CartDrawer() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <section>
      <Separator className="my-16" />

      <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-8">
        Shopping Cart
      </p>

      <div className="max-w-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[15px] font-medium">Your Cart ({cartItems.reduce((s, i) => s + i.qty, 0)})</h3>
        </div>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="size-20 shrink-0 rounded-lg bg-muted/50 flex items-center justify-center">
                <span className="text-lg text-muted-foreground/30 font-medium">{item.image}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[15px] font-medium">{item.name}</p>
                    <p className="text-[13px] text-muted-foreground">{item.color} / {item.size}</p>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground transition-colors p-1">
                    <X className="size-3.5" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center border border-border rounded-md">
                    <button className="size-7 flex items-center justify-center text-muted-foreground hover:text-foreground">
                      <Minus className="size-3" />
                    </button>
                    <span className="w-6 text-center text-[13px]">{item.qty}</span>
                    <button className="size-7 flex items-center justify-center text-muted-foreground hover:text-foreground">
                      <Plus className="size-3" />
                    </button>
                  </div>
                  <p className="text-[15px] font-medium">${item.price * item.qty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        {/* Promo code */}
        <div className="flex items-center gap-2 mb-6">
          <Input placeholder="Promo code" className="h-9 text-[13px] flex-1" />
          <Button variant="outline" size="sm">Apply</Button>
        </div>

        {/* Totals */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between text-[13px]">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">${subtotal}</span>
          </div>
          <div className="flex items-center justify-between text-[13px]">
            <span className="text-muted-foreground">Shipping</span>
            <span className="text-muted-foreground">Free</span>
          </div>
          <Separator className="my-2" />
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-medium">Total</span>
            <span className="text-[15px] font-medium">${subtotal}</span>
          </div>
        </div>

        <Button className="w-full">
          Checkout
          <ChevronRight className="size-4 ml-1" />
        </Button>

        <p className="text-[11px] text-muted-foreground text-center mt-3">
          Taxes calculated at checkout
        </p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Export                                                              */
/* ------------------------------------------------------------------ */

export function EcommerceShowcase() {
  return (
    <div>
      <Navbar />
      <Separator />
      <div className="py-8">
        <ProductGrid />
        <ProductDetail />
        <CartDrawer />
      </div>
    </div>
  )
}
