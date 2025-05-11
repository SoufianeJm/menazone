import Image from 'next/image';
import {Megaphone} from 'lucide-react';
import {LocationIcon} from '@/components/icons/LocationIcon';
import {
    Timeline,
    TimelineContent,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from '@/features/protests/components/timeline-primitives';
import {groupProtestsByDay, MOCK_PROTEST_ITEMS} from '@/features/protests/utils/constants';


export default function ProtestTimeline() {
    // If items prop is used, replace MOCK_PROTEST_ITEMS with items
    const groupedProtests = groupProtestsByDay(MOCK_PROTEST_ITEMS);

    return (
        <Timeline>
            {groupedProtests.map((group, groupIndex) => (
                <TimelineItem
                    key={group.date.toISOString()}
                    step={groupIndex + 1}
                    className="not-last:pb-8"
                >
                    <TimelineHeader>
                        <TimelineSeparator className="ml-3 h-[calc(100%-1.5rem-0.25rem)] translate-y-[1.625rem]" />
                        
                        <TimelineTitle className="pl-1 mt-0.5">
                            {group.formattedDate}{" "}
                            <span className="text-muted-foreground text-sm font-normal">
                                {group.dayOfWeek}
                            </span>
                        </TimelineTitle>
                        <TimelineIndicator
                            className="ml-3 size-6 border-none bg-primary/10 group-data-[completed]/timeline-item:bg-primary group-data-[completed]/timeline-item:text-primary-foreground flex items-center justify-center"
                        >
                            <Megaphone size={14} />
                        </TimelineIndicator>
                    </TimelineHeader>
                    
                    {/* Render all protests for this day */}
                    {group.protests.map((protest, protestIndex) => (
                        <TimelineContent
                            key={protest.id}
                            className={`bg-cardColor text-foreground flex justify-between gap-4 w-full rounded-default border px-3 py-3 overflow-ellipsis ${
                                protestIndex === 0 ? 'mt-2' : 'mt-3'
                            }`}
                        >
                            <div className="flex flex-col gap-1 min-w-0">
                                <div className="whitespace-nowrap text-sm text-txt-secondary font-medium">
                                    <span>{protest.time}</span>
                                </div>
                                <h3 className="text-base font-semibold text-white">{protest.title}</h3>
                                <p className="text-sm text-txt-secondary line-clamp-1 font-medium">By {protest.organizer}</p>
                                <div className="flex items-center gap-1 min-w-0 text-sm text-txt-secondary font-medium">
                                    <LocationIcon className="w-3 h-3 flex-shrink-0"/>
                                    <span className="truncate">{protest.location}</span>
                                </div>
                            </div>

                            {protest.imageUrl && (
                                <div className="flex-shrink-0 rounded-md overflow-hidden pointer-events-none">
                                    <Image
                                        src={protest.imageUrl}
                                        alt={protest.title || 'Protest image'}
                                        width={110}
                                        height={110}
                                        className="object-cover aspect-square"
                                    />
                                </div>
                            )}
                        </TimelineContent>
                    ))}
                </TimelineItem>
            ))}
        </Timeline>
    );
}