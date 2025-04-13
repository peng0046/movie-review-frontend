export const ALL_REVIEWS_API_URL = 'https://movie-review-backend-45h7.onrender.com/api/reviews?populate=*';

export const SINGLE_REVIEW_API_URL = (documentId) => {
    return `https://movie-review-backend-45h7.onrender.com/api/reviews/${documentId}?populate=*`;
}