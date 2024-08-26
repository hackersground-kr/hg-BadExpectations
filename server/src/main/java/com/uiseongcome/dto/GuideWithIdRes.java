package com.uiseongcome.dto;

import com.uiseongcome.domain.*;

import java.time.LocalDate;
import java.util.List;

public record GuideWithIdRes(
        Long guideId,
        String title,
        LocalDate startAt,
        LocalDate endAt,
        Long limitPeople,
        Long price,
        String description,
        Boolean wifi,
        Boolean tv,
        Boolean kitchen,
        Boolean washingMachine,
        Boolean airConditioner,
        Boolean parking,
        Long bedCnt,
        Long bathroomCnt,
        Long roomCnt,
        String address,
        GuideKind guideKind,
        List<PlaceDto> places,
        List<String> files,
        String userId,
        String userName
) {
    public static GuideWithIdRes of(GuideInfo guideInfo, List<Place> places, List<File> files){
        return new GuideWithIdRes(
                guideInfo.getGuideInfoId(),
                guideInfo.getTitle(),
                guideInfo.getStartAt(),
                guideInfo.getEndAt(),
                guideInfo.getLimitPeople(),
                guideInfo.getPrice(),
                guideInfo.getDescription(),
                guideInfo.getWifi(),
                guideInfo.getTv(),
                guideInfo.getKitchen(),
                guideInfo.getWashingMachine(),
                guideInfo.getAirConditioner(),
                guideInfo.getParking(),
                guideInfo.getBedCnt(),
                guideInfo.getBathroomCnt(),
                guideInfo.getRoomCnt(),
                guideInfo.getAddress(),
                guideInfo.getGuideKind(),
                places.stream().map(PlaceDto::of).toList(),
                files.stream().map(File::getPath).toList(),
                guideInfo.getUser().getUserId(),
                guideInfo.getUser().getName()
        );
    }
}
