import NewsList from "@/components/NewsList";

import { getAllNews } from "@/lib/news";

const NewsPage =async () => {
	const allNews = await getAllNews();
	return (
		<>
			<h1>News Page</h1>
			<NewsList news={allNews} />
		</>
	);
};

export default NewsPage;
