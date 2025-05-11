import { RadioIcon } from "lucide-react"; // Assuming lucide-react is used for icons
import { Button } from "@/components/ui/button/button"; // Assuming this is your global Button component

export interface ProtestCTAProps {
    className?: string;
    // Add any other props this component might need, e.g., onClick for the button
    // onAddClick?: () => void;
}

export default function ProtestCTA({ className }: ProtestCTAProps) {
    return (
        // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element if needed.
        <div className={`bg-cardColor max-w-[400px] rounded-md border p-4 shadow-lg ${className || ''}`}>
            <div className="flex items-center gap-2">
                <div
                    className="flex size-9 shrink-0 items-center justify-center rounded-full border"
                    aria-hidden="true"
                >
                    <RadioIcon className="opacity-60" size={16} />
                </div>
                <div className="flex grow items-center gap-12"> {/* Consider adjusting gap if layout seems off */}
                    <div className="space-y-1">
                        <p className="text-sm font-medium">You got a protest?</p> {/* Consider using t() for i18n */}
                        <p className="text-muted-foreground text-xs font-medium">
                            Add it right now {/* Consider using t() for i18n */}
                        </p>
                    </div>
                </div>
                {/* If the button is to navigate, consider using a Link component from Next.js */}
                <Button size="sm" className="text-xs font-medium">
                    Add {/* Consider using t() for i18n */}
                </Button>
            </div>
        </div>
    );
}