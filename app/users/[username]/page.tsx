import { headers } from "next/headers";

export default function Users() {
  const headerList = headers();

  const hostname = headerList.get("host");

  return <h1>hello from subdomain {hostname}</h1>;
}
