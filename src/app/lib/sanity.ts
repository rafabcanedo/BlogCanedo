import { createClient } from "next-sanity"

const projectId = "wbn2l3m0";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
 projectId,
 dataset,
 apiVersion,
 useCdn: true,
})