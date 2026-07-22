import ModalBackdrop from "@/components/ModalBackdrop";
import { getNewsItem } from "@/lib/news";

const InterceptedImagePage = async ({ params }) => {
	const { slug: newsItemSlug } = await params;
	const newsItem = await getNewsItem(newsItemSlug);
	if (!newsItem) notFound();

	return (
		<>
			<ModalBackdrop/>
			<dialog className="modal" open>
				<div className="fullscreen-image">
					<img
						src={`/images/news/${newsItem.image}`}
						alt={newsItem.title}
					/>
				</div>
			</dialog>
		</>
	);
};

export default InterceptedImagePage;
