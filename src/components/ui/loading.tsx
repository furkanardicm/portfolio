import { cn } from "@/lib/utils";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          "inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]",
          className
        )}
        role="status"
      >
        <span className="sr-only">Yükleniyor...</span>
      </div>
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <LoadingSpinner className="h-8 w-8 border-4" />
        <span className="text-muted-foreground animate-pulse">Yükleniyor...</span>
      </div>
    </div>
  );
}

export function LoadingCard() {
  return (
    <div className="flex h-32 w-full items-center justify-center rounded-lg border bg-card">
      <LoadingSpinner />
    </div>
  );
} 