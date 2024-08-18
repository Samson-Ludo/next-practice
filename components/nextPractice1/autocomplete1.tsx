import React, { useEffect, useRef, useState } from "react";

interface AutocompleteProps {
  suggestions: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(input.toLowerCase())
    );

    setUserInput(input);
    setFilteredSuggestions(filtered);
    setIsDropdownVisible(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative dark:text-black">
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Search..."
        className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isDropdownVisible && filteredSuggestions.length > 0 && (
        <ul className="aboslute left-0 w-full mt-2 bg-white border border-gray-300 rounded-md shodow-lg">
          {filteredSuggestions.map((suggestion) => (
            <li
              key={suggestion}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
