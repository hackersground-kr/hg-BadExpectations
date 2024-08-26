interface PopularDataItem {
    tourName: string;
    bookHistory: string;
    rating: number;
  }
  
  const ratings: PopularDataItem[] = [
    { tourName: "의성 먹거리 여행", bookHistory: "3일 내 신청 8건", rating: 5.0 },
    { tourName: "의성 감성 여행", bookHistory: "3일 내 신청 4건", rating: 4.2 },
    { tourName: "건강 여행", bookHistory: "3일 내 신청 2건", rating: 4.6 },
  ];
  
 export default ratings;
