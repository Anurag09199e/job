"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart()
  const [appliedCoupon, setAppliedCoupon] = useState("")
  const [discountedTotal, setDiscountedTotal] = useState(total)

  const handleApplyCoupon = () => {
    // Demo coupon code
    if (appliedCoupon.toUpperCase() === "ARTLOVER10") {
      setDiscountedTotal(total * 0.9)
    }
  }

  const shipping = total > 100 ? 0 : 15
  const finalTotal = discountedTotal + shipping

  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-muted/30 border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/shop" className="text-accent hover:text-accent/80 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold text-foreground">Shopping Cart</h1>
          </div>
          <p className="text-muted-foreground">{items.length} item(s) in your cart</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {items.length === 0 ? (
          // Empty Cart
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Start exploring our collection and add your favorite artworks.</p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-6 bg-card p-6 rounded-lg border border-border">
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0 bg-muted rounded-lg overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.artist}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-foreground hover:bg-muted transition-colors"
                          >
                            −
                          </button>
                          <span className="px-4 py-1 border-l border-r border-border">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-foreground hover:bg-muted transition-colors"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Price</p>
                          <p className="font-serif font-semibold text-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-destructive hover:bg-destructive/10 rounded transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-muted/30 rounded-lg p-8 border border-border sticky top-20 space-y-6">
                <h2 className="font-serif font-semibold text-foreground text-xl">Order Summary</h2>

                {/* Breakdown */}
                <div className="space-y-3 border-b border-border pb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground font-medium">${total.toFixed(2)}</span>
                  </div>

                  {appliedCoupon.toUpperCase() === "ARTLOVER10" && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Discount (10%)</span>
                      <span className="text-accent font-medium">-${(total * 0.1).toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground font-medium">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping === 0 && <p className="text-xs text-accent">Free shipping on orders over $100</p>}
                </div>

                {/* Coupon Code */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Coupon Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      value={appliedCoupon}
                      onChange={(e) => setAppliedCoupon(e.target.value)}
                      className="flex-1 px-3 py-2 border border-border rounded bg-background text-foreground text-sm"
                    />
                    <Button size="sm" variant="outline" onClick={handleApplyCoupon}>
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Try: ARTLOVER10</p>
                </div>

                {/* Total */}
                <div className="border-t border-border pt-4 space-y-4">
                  <div className="flex justify-between">
                    <span className="font-serif font-semibold text-foreground text-lg">Total</span>
                    <span className="font-serif font-bold text-foreground text-lg">${finalTotal.toFixed(2)}</span>
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-semibold">
                    Proceed to Checkout
                  </Button>

                  <Button variant="outline" className="w-full bg-transparent" onClick={clearCart}>
                    Clear Cart
                  </Button>

                  <Link href="/shop" className="block">
                    <Button variant="outline" className="w-full bg-transparent">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
