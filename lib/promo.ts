export const PROMO_CODE = "SOCIAL50";
export const PROMO_PERCENT = 50;

/** "$19" -> "$9.50", "$5" -> "$2.50" */
export function promoPrice(price: string): string {
  const discounted = (Number(price.replace("$", "")) * (100 - PROMO_PERCENT)) / 100;
  return `$${Number.isInteger(discounted) ? discounted : discounted.toFixed(2)}`;
}
