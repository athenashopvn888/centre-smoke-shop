import "server-only";
import data from "@/data/menu-snapshot.json";

export const snapshot = data;
export const sourceDate = new Intl.DateTimeFormat("en-CA", {
  dateStyle: "long", timeZone: "America/Toronto"
}).format(new Date(snapshot.stockDate));
