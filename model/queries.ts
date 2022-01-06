export const getAnimeShortInfoQuery = `
query ($id: Int, $page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, type: ANIME) {
        id
        title {
          romaji
        }
        coverImage{
            large
        }
        genres
        averageScore
        popularity
        description
      }
    }
  }
`;
export const getAnimeByIdQuery = (id: number) => {
    return `
query  {
    Media (id: ${id}, type: ANIME) {
        id
        title {
          romaji
        }
        coverImage{
          extraLarge
        }
    bannerImage
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    trailer{
      site
      thumbnail
    }
    status
        genres
        averageScore
        popularity
        description
    }
  }
`;
};
