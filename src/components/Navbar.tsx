import { Search, CircleX  } from 'lucide-react';
import { Input } from "./ui/input"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useEvents } from "../context/EventContext";

export default function Navbar() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const { search, setSearch } = useEvents();

    const toggleSearch = () => {
        if(isSearchVisible) {
            setSearch("");
        }
        setIsSearchVisible(!isSearchVisible);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <nav className="w-full h-16 sm:h-20 bg-white flex flex-row items-center px-2 xs:px-3 sm:px-4 md:px-6">
            <div className="flex items-center justify-between w-full gap-2">
                {isSearchVisible ? (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1"
                    >
                        <Input
                            type='text'
                            placeholder='Buscar un evento...'
                            className='w-full h-10 sm:h-12 text-sm sm:text-base rounded-lg border-blue-200 focus:border-blue-400'
                            value={search}
                            onChange={handleSearchChange}
                            autoFocus
                        />
                    </motion.div>
                ) : (
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-base xs:text-lg sm:text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight truncate max-w-[70vw] sm:max-w-none"
                    >
                        Administrador de eventos
                    </motion.h1>
                )}
                <div className="ml-2 flex-shrink-0">
                    {isSearchVisible ? (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <CircleX className="text-blue-600 cursor-pointer w-7 h-7 sm:w-8 sm:h-8" onClick={toggleSearch} />
                        </motion.div>
                    ) : (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-blue-50 hover:bg-blue-100 rounded-full p-2 transition-colors"
                            aria-label="Buscar"
                            onClick={toggleSearch}
                            type="button"
                        >
                            <Search className="text-blue-600 w-6 h-6 sm:w-7 sm:h-7" />
                        </motion.button>
                    )}
                </div>
            </div>
        </nav>
    )
}