import {Clock, MapPin} from 'iconoir-react';
import Image from 'next/image';
import React from 'react';

export interface ProtestCardProps {
    title: string;
    organizer: string;
    time: string;
    location: string;
    imageUrl: string;
}

export const ProtestCard: React.FC<ProtestCardProps> = ({
                                                            title,
                                                            organizer,
                                                            time,
                                                            location,
                                                            imageUrl,
                                                        }) => {
    return (
        <div
            className="flex justify-between gap-3 items-center mobile-card-gap w-full rounded-default bg-cardColor p-4 border-default">
            {/* Text section */}
            <div className="flex flex-col gap-1.5 min-w-0">
                <h3 className="text-base font-semibold tsext-white">{title}</h3>
                <p className="text-sm text-txt-secondary line-clamp-1">By {organizer}</p>
                <div className="flex flex-col gap-1.5 text-sm text-txt-secondary">
                    <div className="flex items-center gap-1 whitespace-nowrap">
                        <Clock className="w-4 h-4 flex-shrink-0"/>
                        <span>{time}</span>
                    </div>
                    <div className="flex items-center gap-1  min-w-0">
                        <MapPin className="w-4 h-4 flex-shrink-0"/>
                        <span className="truncate">{location}</span>
                    </div>
                </div>
            </div>

            {/* Image section */}
            <div className=" flex-shrink-0 rounded-md overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={110}
                    height={110}
                    className="object-cover aspect-square"

                />
            </div>
        </div>
    );
};

export default ProtestCard;