import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export type DropdownProps = {
  list: string[];
};

const Dropdown = ({ list, ...rest }: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState(list[0]);
  const [query, setQuery] = useState("");

  const filteredItem =
    query === ""
      ? list
      : list.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedItem} onChange={setSelectedItem} {...rest}>
      <div>
        <div>
          <Combobox.Input
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button>
            <ChevronDownIcon
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options>
            {filteredItem.length === 0 && query !== "" ? (
              <div>Nenhum selecionado.</div>
            ) : (
              filteredItem.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span>
                        {item}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default Dropdown;