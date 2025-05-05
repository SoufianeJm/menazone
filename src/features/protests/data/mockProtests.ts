import { ProtestCardProps } from '../components/ProtestCard';
import { ProtestDayGroupProps } from '../components/ProtestDayGroup';

// Sample protest data
export const mockProtests: ProtestCardProps[] = [
  {
    title: "March for Gaza",
    organizer: "Worker's Union",
    time: "2:00 PM",
    location: "Central Park, New York",
    imageUrl: "/images/protest-1.webp"
  },
  {
    title: "Climate Justice Rally",
    organizer: "Environmental Coalition",
    time: "12:30 PM",
    location: "City Hall Plaza",
    imageUrl: "/images/protest-2.webp"
  },
  {
    title: "Student Rights Demonstration",
    organizer: "University Student Association",
    time: "4:00 PM",
    location: "Campus Square",
    imageUrl: "/images/protest-3.jpg"
  },
  {
    title: "Healthcare Reform Rally",
    organizer: "Medical Workers Collective",
    time: "11:00 AM",
    location: "Memorial Hospital",
    imageUrl: "/images/protest-4.jpg"
  }
];

// Grouped by day for ProtestDayGroup
export const mockProtestDays: ProtestDayGroupProps[] = [
  {
    date: "Today",
    protests: [
      mockProtests[0],
      mockProtests[1]
    ]
  },
  {
    date: "Tomorrow",
    protests: [
      mockProtests[2]
    ]
  },
  {
    date: "May 12",
    protests: [
      mockProtests[3]
    ]
  }
];

export default mockProtestDays;
