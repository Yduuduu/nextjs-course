import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();

  console.log(router.query.newsId);

  return <div>The News Detail Page</div>;
}
