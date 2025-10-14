import { groq } from "next-sanity";
import client from "./client";

export async function getProduct() {
  return client.fetch(
    groq`*[_type == "product"]`
  );
}

