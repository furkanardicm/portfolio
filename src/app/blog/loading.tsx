import { LoadingCard } from "@/components/ui/loading";

export default function BlogLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>
    </div>
  );
} 