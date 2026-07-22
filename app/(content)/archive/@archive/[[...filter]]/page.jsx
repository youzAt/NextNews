import Link from "next/link";

import NewsList from "@/components/NewsList";

import {
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYear,
	getNewsForYearAndMonth,
} from "@/lib/news";
import { Suspense } from "react";

const FilterLinks = async ({ month, year }) => {
	let links = await getAvailableNewsYears();
	if (
		(year && !links.includes(year)) ||
		(month && !getAvailableNewsMonths(year).includes(month))
	) {
		throw new Error("Invalid Filter.");
	}

	if (year && !month) {
		links = getAvailableNewsMonths(year);
	} else if (year && month) {
		links = [];
	}

	return (
		<header id="archive-header">
			<nav>
				<ul>
					{links.map((link) => {
						const href = year
							? `/archive/${year}/${link}`
							: `/archive/${link}`;
						return (
							<li key={link}>
								<Link href={href}>{link}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

const FilteredNews = async ({ year, month }) => {
	let news;
	let newsContent = <p>No news found for the selected period.</p>;
	if (year && !month) {
		news = await getNewsForYear(year);
	} else if (year && month) {
		news = await getNewsForYearAndMonth(year, month);
	}
	if (news && news.length > 0) {
		newsContent = <NewsList news={news} />;
	}
	return newsContent;
};

const FilteredNewsPage = async ({ params }) => {
	const { filter } = await params;

	const selectedYear = filter?.[0];
	const selectedMonth = filter?.[1];

	return (
		<>
			<Suspense fallback={<p>Loading Filters...</p>}>
				<FilterLinks year={selectedYear} month={selectedMonth} />
			</Suspense>

			<Suspense fallback={<p>Loading Filtered news...</p>}>
				<FilteredNews year={selectedYear} month={selectedMonth} />
			</Suspense>
		</>
	);
};

export default FilteredNewsPage;
