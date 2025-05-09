import { RadioIcon } from "lucide-react"

import { Button } from "@/components/ui/button/button"

export default function Component() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="bg-cardColor z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
      <div className="flex items-center gap-2">
        <div
          className="flex size-9 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <RadioIcon className="opacity-60" size={16} />
        </div>
        <div className="flex grow items-center gap-12">
          <div className="space-y-1">
            <p className="text-sm font-medium">You got a protest ?</p>
            <p className="text-muted-foreground text-xs font-medium">
              Add it right now
            </p>
          </div>
        </div>
        <Button size="sm" className="text-xs font-medium">Add</Button>
      </div>
    </div>
  )
}
