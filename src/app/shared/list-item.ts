export interface IListItem {
    videoId: string,
    title: string,
    channelTitle: string,
    description: string,
    publishedAt: string,
    isAdded: boolean,
    thumb?: string,

    localized?: string,
    commentCount?: string,
    dislikeCount?: string,
    likeCount?: string,
    viewCount?: string,
}
