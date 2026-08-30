import EventHero from '../components/event/EventHero'
import UpcomingEvents from '../components/event/UpcomingEvents'
import EventsHighlights from '../components/event/EventsHighlights'

const Event = () => {
    return (
        <main className="overflow-hidden bg-white">
            <EventHero />
            <EventsHighlights />
            <UpcomingEvents />
        </main>
    )
}

export default Event
