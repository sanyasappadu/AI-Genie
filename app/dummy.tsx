import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      {/* <p className="text-6xl text-green-500">hello world</p> */}
      <Button variant="outline">Button</Button>
      <Button variant="destructive">Destructive</Button>
      <Button >click me</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}