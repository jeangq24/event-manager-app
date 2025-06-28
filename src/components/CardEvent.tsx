import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { CalendarIcon, MapPin } from "lucide-react"
import { Badge } from "./ui/badge"
import { type Event } from "../types/eventTypes"
import { Link } from "react-router-dom"

export default function CardEvent({ event }: { event: Event }) {
    return (
        <Link to={`/eventos/${event.id}`} className="w-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 cursor-pointer h-full">
        <Card className="w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto rounded-2xl shadow-lg p-0 flex flex-col bg-white hover:shadow-xl transition-shadow duration-200 justify-start">
            <CardHeader className="p-0 relative">
                <img
                    src={"https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    className="w-full h-40 xs:h-48 sm:h-56 md:h-60 lg:h-64 object-cover rounded-t-2xl"
                    alt={event?.nombre || "Evento"}
                />
                <div className="absolute top-2 right-2 flex flex-col gap-2 items-end">
                    <Badge className="bg-blue-600 text-white text-xs px-2 py-1 capitalize">{event.tipo}</Badge>
                    <Badge className="bg-gray-900/80 text-white text-xs px-2 py-1">{event.categoria}</Badge>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 justify-between">
                <CardTitle className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 line-clamp-2">
                    {event?.nombre}
                </CardTitle>
                <div className="flex items-center gap-2 text-xs xs:text-sm sm:text-base text-gray-600">
                    <CalendarIcon className="w-4 h-4" />
                    <span className="truncate">{event?.fecha}</span>
                </div>
                {event?.ubicacion && (
                    <div className="flex items-center gap-2 text-xs xs:text-sm sm:text-base text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="truncate">{event?.ubicacion}</span>
                    </div>
                )}
                <div className="text-xs sm:text-sm text-gray-700 mt-1 line-clamp-2 flex-1">
                    {event?.descripcionCorta}
                </div>
            </CardContent>
        </Card>
        </Link>
    )
}