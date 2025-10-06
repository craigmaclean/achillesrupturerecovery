export default function Ad({ slot }: { slot: "top" | "middle" | "bottom" }) {
  return (
    <div
      id={`ad-slot-${slot}`}
      data-slot={slot}
      className="my-6 w-full rounded-md border bg-muted/40 p-4 text-center text-sm text-muted-foreground"
    >
      Ad placeholder: {slot}
    </div>
  );
}