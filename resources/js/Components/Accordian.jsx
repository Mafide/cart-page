import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { TvIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import SecondaryButton from "./ui/SecondaryButton";

export default function Accordian({ sections }) {
    return (
        <div className="w-full mx-auto max-w-3xl border border-stone-300">
            {sections.map((section, idx) => (
                <Disclosure key={idx}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between items-center bg-gray-200 p-4 text-left focus:outline-none focus-visible:ring border-b border-stone-300">
                                <div className="flex gap-2 items-center">
                                    <ChevronUpIcon
                                        className={`${
                                            open ? "rotate-180 transform" : ""
                                        } h-5 w-5`}
                                    />
                                    <span className="font-semibold">
                                        {section.title}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-400">
                                        {section.lecture_count} lectures -{" "}
                                        {section.lecture_min_count}{" "}
                                    </span>
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                                <ul>
                                    {section.lectures.map((lecture, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center justify-between p-2"
                                        >
                                            <Link href={lecture.url}>
                                                <div className="flex items-center">
                                                    <div className="h-4 w-4 mr-2">
                                                        {lecture.type ===
                                                        "video" ? (
                                                            <TvIcon />
                                                        ) : (
                                                            <DocumentIcon />
                                                        )}
                                                    </div>
                                                    <span>{lecture.title}</span>
                                                </div>
                                            </Link>
                                            <div className="flex items-center gap-3 text-right">
                                                {lecture.type == "video" ? (
                                                    <SecondaryButton className="text-xs border-0 shadow-none capitalize">
                                                        Preview
                                                    </SecondaryButton>
                                                ) : null}
                                                {
                                                    <span className="text-gray-400 text-xs">
                                                        {lecture.min}
                                                    </span>
                                                }
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    );
}
