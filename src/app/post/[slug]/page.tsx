import { client } from "@/app/lib/sanity";
import { Post } from "@/types";

async function getData(slug: string) {
 const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

 const data = await client.fetch(query)

 return data;
}

export default async function SlugPage({
 params,
}: {
 params: { slug: string };
}) {
 const data = (await getData(params.slug)) as Post;

 return (
  <div className="divide-y divide-gray-200">
   <header className="pt-6 xl:pb-6">
    <div className="space-y-1 text-center">
     <div className="space-y-10">
      <div>
       <p className="text-base font-mono leading-6 text-emerald-500">
       {new Date(data._createdAt).toISOString().split("T")[0]}
       </p>
      </div>
     </div>

     <div>
      <h1 className="text-3xl font-mono leading-9 tracking-tight text-gray-300 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
       {data.title}
      </h1>
     </div>
    </div>
   </header>
  </div>
 )
}