package com.uiseongcome.dto;

import com.uiseongcome.domain.GuideInfo;
import com.uiseongcome.domain.GuideKind;
import com.uiseongcome.domain.User;

import java.time.LocalDate;
import java.util.List;

public record GuideDto(
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
        List<FileDto> files,
        String userId
) {
    public GuideInfo toEntity(User user){
        return GuideInfo.builder()
                .title(title)
                .startAt(startAt)
                .endAt(endAt)
                .limitPeople(limitPeople)
                .price(price)
                .description(description)
                .wifi(wifi)
                .tv(tv)
                .kitchen(kitchen)
                .washingMachine(washingMachine)
                .airConditioner(airConditioner)
                .parking(parking)
                .bedCnt(bedCnt)
                .bathroomCnt(bathroomCnt)
                .roomCnt(roomCnt)
                .address(address)
                .guideKind(guideKind)
                .user(user)
                .build();
    }
}
