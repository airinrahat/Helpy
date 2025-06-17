import CheckoutForm from "@/components/Forms/CheckoutForm";
import React from "react";

const CheckoutPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/services/${p.id}`);
  const data = await res.json();
  return (
    <div className="my-10">
      <CheckoutForm data={data} />
    </div>
  );
};

export default CheckoutPage;
