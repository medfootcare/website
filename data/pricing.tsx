import type { PricingItem } from "@/components/PricingTable";

export const sharedPricingItems: PricingItem[] = [
  {
    name: "ご施設ケア",
    description: (
      <>
        爪ケア・角質ケア・保湿を含む、
        <br className="md:hidden" />
        基本のフットケア
      </>
    ),
    price: "¥5,000",
  },
  {
    name: "ご施設しっかりケア",
    description: (
      <>
        巻き爪ケアを含む、
        <br className="md:hidden" />
        より丁寧な個別ケア
      </>
    ),
    price: "¥10,000",
  },
  {
    name: "個人宅訪問ケア",
    description: (
      <>
        爪や足の状態に合わせて、
        <br className="md:hidden" />
        ご自宅で丁寧に行うフットケア
      </>
    ),
    price: "¥12,000",
  },
];

export const servicePricingItems: PricingItem[] = [
  {
    ...sharedPricingItems[0],
    subnote: "目安：約30分",
  },
  {
    ...sharedPricingItems[1],
    subnote: "目安：約60分",
  },
  {
    ...sharedPricingItems[2],
    subnote: "目安：約60分",
  },
];
