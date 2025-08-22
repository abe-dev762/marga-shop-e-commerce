import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "nct02v90",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-08-15",
  useCdn: true,
});

const query = `*[
  _type == "product" &&
  ($selectedCategory == "" || $selectedCategory in categories[]->slug.current) &&
  ($selectedBrand == "" || brand->slug.current == $selectedBrand) &&
  price >= $minPrice &&
  price <= $maxPrice
] | order(name asc){
  ...,
  "categories": categories[]->{_id, title, "slug": slug.current},
  "brand": brand->{_id, title, "slug": slug.current}
}`;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const selectedCategory = url.searchParams.get("selectedCategory") ?? "";
  const selectedBrand = url.searchParams.get("selectedBrand") ?? "";
  const minPrice = Number(url.searchParams.get("minPrice") ?? 0);
  const maxPrice = Number(url.searchParams.get("maxPrice") ?? 10000);

  const data = await client.fetch(query, {
    selectedCategory,
    selectedBrand,
    minPrice,
    maxPrice,
  });

  return NextResponse.json({ data });
};
