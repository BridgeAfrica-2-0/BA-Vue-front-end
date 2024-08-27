import SearchRepository from "./SearchRepository";
import PostRepository from "./PostRepository";
import ShareRepository from "./ShareRepository";
import NotificationRepository from "./NotificationRepository";

export default {
  search: SearchRepository,
  share: ShareRepository,
  post: PostRepository,
  notification: NotificationRepository
};
