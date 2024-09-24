import { sayHello } from "@maps/lib"
import { Button } from "@maps/ui"

export default function Home() {
  return (
    <>
      <div className="text-red-500">{sayHello()}</div>
      <Button>hello</Button>
    </>
  )
}
