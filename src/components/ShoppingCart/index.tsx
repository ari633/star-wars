import { useCarts, useCartDispatch } from "modules/cart/context/CartContext";

export function ShoppingCart() {
  const carts = useCarts();
  const cartDispatch = useCartDispatch();

  const summary = carts?.reduce(
    ({ items, total }, { price, qty }) => ({
      items: items + qty,
      total: total + qty * price,
    }),
    { items: 0, total: 0 }
  );

  const handleRemove = (id: number) => {
    cartDispatch({
      type: "remove",
      id,
    });
  };

  return (
    <div className="bg-slate-200 border-slate-100 p-4 mt-16 rounded">
      <h1 className="font-bold mb-5">Cart</h1>
      <div className="table w-full">
        <div className="table-row-group">
          {carts?.map((item, i) => (
            <div className="table-row h-10" key={`carts_${i}`}>
              <div className="table-cell">{item.title}</div>
              <div className="table-cell text-right">{item.qty}</div>
              <div className="table-cell text-right">
                ${item.qty * item.price}
              </div>
              <div className="table-cell pl-4">
                <button
                  className="px-4 py-1 text-sm text-red-600 rounded-full border border-red-200 hover:text-white hover:bg-red-600"
                  onClick={() => handleRemove(item.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      Total QTY: {summary?.items}
      <br />
      Total Price: ${summary?.total}
    </div>
  );
}
