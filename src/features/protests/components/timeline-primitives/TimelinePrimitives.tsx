"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils" // Assuming cn is in @/lib/utils

// Types
type TimelineContextValue = {
    activeStep: number
    setActiveStep: (step: number) => void
    orientation: "horizontal" | "vertical"
}

// Context
const TimelineContext = React.createContext<TimelineContextValue | undefined>(
    undefined
)

export const useTimeline = () => {
    const context = React.useContext(TimelineContext)
    if (!context) {
        throw new Error("useTimeline must be used within a Timeline")
    }
    return context
}

// Main Timeline Component
interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultValue?: number
    value?: number
    onValueChange?: (value: number) => void
    orientation?: "horizontal" | "vertical"
}

export function Timeline({
                             defaultValue = 1,
                             value,
                             onValueChange,
                             orientation = "vertical",
                             className,
                             children, // Added children prop
                             ...props
                         }: TimelineProps) {
    const [activeStep, setInternalStep] = React.useState(defaultValue)

    const setActiveStep = React.useCallback(
        (step: number) => {
            if (value === undefined) {
                setInternalStep(step)
            }
            onValueChange?.(step)
        },
        [value, onValueChange]
    )

    const currentStep = value ?? activeStep

    return (
        <TimelineContext.Provider
            value={{ activeStep: currentStep, setActiveStep, orientation }}
        >
            <div
                data-slot="timeline"
                className={cn(
                    "group/timeline flex",
                    orientation === "horizontal"
                        ? "w-full flex-row"
                        : "flex-col",
                    className
                )}
                data-orientation={orientation}
                {...props}
            >
                {children}
            </div>
        </TimelineContext.Provider>
    )
}

// TimelineItem
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
    step: number
}

export function TimelineItem({ step, className, children, ...props }: TimelineItemProps) {
    const { activeStep, orientation } = useTimeline()
    const isCompleted = step <= activeStep;

    return (
        <div
            data-slot="timeline-item"
            className={cn(
                "group/timeline-item relative flex flex-1 flex-col gap-0.5",
                orientation === "horizontal"
                    ? "mt-8 not-last:pe-8"
                    : "ms-8 not-last:pb-12", // Original: ms-8 not-last:pb-12. The pb-8 was in the ProtestTimeline's TimelineItem override
                className
            )}
            data-completed={isCompleted || undefined}
            {...props}
        >
            {children}
        </div>
    )
}


// TimelineHeader
export function TimelineHeader({
                                   className,
                                   children,
                                   ...props
                               }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div data-slot="timeline-header" className={cn(className)} {...props}>
            {children}
        </div>
    )
}

// TimelineTitle
export function TimelineTitle({
                                  className,
                                  children,
                                  ...props
                              }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            data-slot="timeline-title"
            className={cn("text-sm font-medium", className)}
            {...props}
        >
            {children}
        </h3>
    )
}

// TimelineContent
export function TimelineContent({
                                    className,
                                    children,
                                    ...props
                                }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            data-slot="timeline-content"
            className={cn("text-muted-foreground text-sm", className)} // Original: text-muted-foreground text-sm. Custom styling applied in ProtestTimeline
            {...props}
        >
            {children}
        </div>
    )
}

// TimelineDate
interface TimelineDateProps extends React.HTMLAttributes<HTMLTimeElement> {
    asChild?: boolean
}

export function TimelineDate({
                                 asChild = false,
                                 className,
                                 children,
                                 ...props
                             }: TimelineDateProps) {
    const Comp = asChild ? Slot : "time"
    const { orientation } = useTimeline();

    return (
        <Comp
            data-slot="timeline-date"
            className={cn(
                "text-muted-foreground mb-1 block text-xs font-medium",
                orientation === "vertical" && "group-data-[orientation=vertical]/timeline:max-sm:h-4", // Kept original responsive class logic
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}


// TimelineIndicator
interface TimelineIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean
}

export function TimelineIndicator({
                                      className,
                                      children,
                                      ...props
                                  }: TimelineIndicatorProps) {
    const { orientation } = useTimeline()
    // const Comp = asChild ? Slot : "div"; // Slot not used here in original

    return (
        <div // Changed Comp to div as Slot was not practically used
            data-slot="timeline-indicator"
            className={cn(
                "border-primary/20 group-data-completed/timeline-item:border-primary absolute size-4 rounded-full border-2",
                orientation === "horizontal"
                    ? "-top-6 left-0 -translate-y-1/2" // Original: -top-6 group-data-[orientation=horizontal]/timeline:left-0 group-data-[orientation=horizontal]/timeline:-translate-y-1/2
                    : "top-0 -left-6 -translate-x-1/2", // Original: top-0 group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=vertical]/timeline:-translate-x-1/2
                className
            )}
            aria-hidden="true"
            {...props}
        >
            {children}
        </div>
    )
}

// TimelineSeparator
export function TimelineSeparator({
                                      className,
                                      ...props
                                  }: React.HTMLAttributes<HTMLDivElement>) {
    const { orientation } = useTimeline();
    return (
        <div
            data-slot="timeline-separator"
            className={cn(
                "border-l-2 border-dashed absolute self-start group-last/timeline-item:hidden", // Common classes
                orientation === "horizontal"
                    ? "-top-6 h-0.5 w-[calc(100%-1rem-0.25rem)] translate-x-4.5 -translate-y-1/2" // Original: -top-6 group-data-[orientation=horizontal]/timeline:h-0.5 group-data-[orientation=horizontal]/timeline:w-[calc(100%-1rem-0.25rem)] group-data-[orientation=horizontal]/timeline:translate-x-4.5 group-data-[orientation=horizontal]/timeline:-translate-y-1/2
                    : "-left-6 h-[calc(100%-1rem-0.25rem)] w-0.5 -translate-x-1/2 translate-y-4.5", // Original: -left-6 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem-0.25rem)] group-data-[orientation=vertical]/timeline:w-0.5 group-data-[orientation=vertical]/timeline:-translate-x-1/2 group-data-[orientation=vertical]/timeline:translate-y-4.5
                className
            )}
            aria-hidden="true"
            {...props}
        />
    )
}