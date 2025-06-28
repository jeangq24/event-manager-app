import { useEffect, type FC } from "react";
import MainLayout from "../layouts/MainLayout"
import { getEvents } from "../services/eventService";
import TabFilter from "../components/TabFilter";
import EventList from "../components/EventList";
const Home: FC = () => {
    return (
        <MainLayout>
            <TabFilter />
            <EventList/>
        </MainLayout>
    )
}

export default Home;