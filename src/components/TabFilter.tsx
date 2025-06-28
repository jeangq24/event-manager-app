import { format } from "date-fns"
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger, } from "../components/ui/popover"
import { Button } from "../components/ui/button"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { useEvents } from "../context/EventContext";

export default function TabFilter() {
    const { selectedCategories, setSelectedCategories, selectedDate, setSelectedDate } = useEvents();

    const hasActiveFilters = selectedCategories.length > 0 || selectedDate !== null;

    const handleClearFilters = () => {
        setSelectedCategories([]);
        setSelectedDate(null);
    };

    return (
        <div className="w-full h-auto flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 rounded-xl p-2 sm:p-4 items-stretch sm:items-center bg-white shadow-sm">
            <CategoryDropdown />
            <DateDropdown />
            {hasActiveFilters && (
                <Button
                    onClick={handleClearFilters}
                    className="cursor-pointer font-medium px-4 py-2 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-700 mt-2 sm:mt-0"
                    variant="outline"
                >
                    Limpiar filtros
                </Button>
            )}
        </div>
    )
}

const CATEGORIES: string[] = [
    "Tecnología",
    "Cultura",
    "Deportes",
    "Música",
    "Arte",
    "Negocios",
    "Gastronomía",
    "Salud",
    "Familia",
    "Educación"
]

function CategoryDropdown() {
    const { selectedCategories, setSelectedCategories } = useEvents();

    const handleCheckedChange = (category: string) => {
        setSelectedCategories(
            selectedCategories.includes(category)
                ? selectedCategories.filter((c) => c !== category)
                : [...selectedCategories, category]
        );
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200">
                    <span className="font-medium">Filtrar categorías</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="font-semibold">Categorías</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {CATEGORIES.map((category) => (
                    <DropdownMenuCheckboxItem
                        key={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCheckedChange(category)}
                        className="capitalize"
                    >
                        {category}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function DateDropdown() {
    const { selectedDate, setSelectedDate } = useEvents();
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    data-empty={!selectedDate}
                    className="w-full sm:w-auto bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
                >
                    {selectedDate ? format(selectedDate, "PPP") : <span>Filtrar fecha</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar mode="single" required={true} selected={selectedDate ?? undefined} onSelect={setSelectedDate} />
            </PopoverContent>
        </Popover>
    )
}
