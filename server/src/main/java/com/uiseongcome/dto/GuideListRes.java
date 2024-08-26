package com.uiseongcome.dto;

import com.uiseongcome.domain.GuideInfo;
import com.uiseongcome.domain.Place;

import java.util.List;

public record GuideListRes(
        String title,
        List<String> places,
        Long price,
        String name
) {
    public static GuideListRes of(GuideInfo guideInfo, List<Place> places){
        return new GuideListRes(
                guideInfo.getTitle(),
                places.stream().map(Place::getName).toList(),
                guideInfo.getPrice(),
                guideInfo.getUser().getName());
    }
}
