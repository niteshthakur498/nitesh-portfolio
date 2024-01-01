import { experienceItem } from "../../interfaces/experienceItem";

export default function TimeLineList({ listValues }: {
    listValues: experienceItem[]
}) {
    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700 font-montserrat px-4 mt-4">
            {listValues.map((item, index) => {
                return (
                    <li key={index} className="ms-8 mb-6 text-primary">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <div className="flex text-lg gap-1 items-center max-md:flex-col max-md:items-start mb-2">
                            <h2 className="font-semibold text-white dark:text-white">
                                {item.designation}
                            </h2>
                            <h2 className="font-normal text-sm text-gray-400 dark:text-gray-500">
                                {item.timeInterval}
                            </h2>
                        </div>
                        <div className="flex text-lg gap-1 items-center max-md:flex-col max-md:items-start mb-2">
                            <h2 className="text-lg font-semibold text-white dark:text-white">
                                {item.org}
                            </h2>
                            <h2 className="font-normal text-sm text-gray-400 dark:text-gray-500">
                                {item.location}
                            </h2>
                        </div>

                        <ul className="list-disc text-white">
                            {item.workList.map((work, index) => {
                                return (
                                    <li key={index}>
                                        {work}
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                );
            })}
        </ol>
    );
}