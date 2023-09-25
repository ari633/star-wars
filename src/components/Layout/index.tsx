import { ReactNode } from "react";
import { ShoppingCart } from "components/ShoppingCart";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({children}: LayoutProps) {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="grid grid-flow-row-dense gap-4 md:grid-cols-8 sm:grid-cols-1 md:grid-rows-1 sm:grid-rows-2">
        <div className="md:col-span-5 sm:col-span-8 pt-14">
          {children}
        </div>
        <div className="md:col-span-3 sm:col-span-8">
          <ShoppingCart />
        </div>
      </div>
    </div>
  )
}