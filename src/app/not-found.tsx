// app/not-found.tsx
import { redirect } from "next/navigation";

export default function GlobalNotFound() {
  // Redirect to the English locale 404 page
  redirect("/en/404");
}
