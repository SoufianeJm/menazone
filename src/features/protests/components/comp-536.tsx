import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/features/protests/components/timeline"
import {GitFork, Megaphone} from "lucide-react";
import {ClockIcon} from "@/components/icons/ClockIcon";
import {LocationIcon} from "@/components/icons/LocationIcon";
import Image from "next/image";
import React from "react";

const items = [
  {
    id: 1,
    date: "May 12",
    day:"Tuesday",
    title: "Student solidarity for gaza",
    action: "opened a new issue",
    description:
      "I'm having trouble with the new component library. It's not rendering properly.",
    icon: Megaphone,
    organizer:"students",
    time:"10:00 AM",
    location:"casablanca",
    imageUrl:"/images/protest-3.jpg"
  },
  {
    id: 2,
    date: "May 11",
    day:"Monday",
    title: "Workers for palestine",
    action: "commented on",
    description:
      "Hey Hannah, I'm having trouble with the new component library. It's not rendering properly.",
    icon: Megaphone,
    organizer:"students",
    time:"10:00 AM",
    location:"casablanca",
    imageUrl:"/images/protest-4.jpg"
  },
  {
    id: 3,
    date: "May 10",
    day:"Sunday",
    title: "March to gaza",
    action: "assigned you to",
    description: "The new component library is not rendering properly. Can you take a look?",
    icon: Megaphone,
    organizer:"students",
    time:"10:00 AM",
    location:"casablanca",
    imageUrl:"/images/protest-1.webp"
  },
  {
    id: 4,
    date: "Tomorrow",
    day:"Saturday",
    title: "From the river to the sea",
    action: "closed the issue",
    description: "The issue has been fixed. Please review the changes.",
    icon: Megaphone,
    organizer:"students",
    time:"10:00 AM",
    location:"casablanca",
    imageUrl:"/images/protest-2.webp"
  },
]

export default function Component() {
  return (
    <Timeline>
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:ms-8 group-data-[orientation=vertical]/timeline:not-last:pb-8"
        >
          <TimelineHeader>
            <TimelineSeparator className="ml-3 group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
            <TimelineTitle className="pl-1 mt-0.5">
              {item.date}{" "}
              <span className="text-muted-foreground text-sm font-normal">
                {item.day}
              </span>
            </TimelineTitle>
            <TimelineIndicator className="ml-3 bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
              <item.icon size={14} />
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineContent className=" bg-cardColor text-foreground mt-2 flex justify-between gap-4 mobile-card-gap w-full rounded-default border px-3 py-3 overflow-ellipsis">

            <div className="flex flex-col gap-1 min-w-0">
              <div className="whitespace-nowrap text-sm text-txt-secondary font-medium">
                <span>{item.time}</span>
              </div>
              <h3 className="text-base font-semibold tsext-white inline">{item.title}</h3>
              <p className="text-sm text-txt-secondary line-clamp-1 font-medium">By {item.organizer}</p>


                <div className="flex items-center gap-1 min-w-0 text-sm text-txt-secondary font-medium">
                  <LocationIcon className="w-3 h-3 flex-shrink-0"/>
                  <span className="truncate">{item.location}</span>
                </div>

            </div>

            {/* Image section */}
            <div className="flex-shrink-0 rounded-md overflow-hidden pointer-events-none">
              <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={110}
                  height={110}
                  className="object-cover aspect-square"

              />
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
