import { sayHello } from "lib"
import { Button } from "ui"

export default function Home() {
  return (
    <>
      <div className="text-red-500">{sayHello()}</div>
      <Button>hello</Button>
    </>
  )
}
