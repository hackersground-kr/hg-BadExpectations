package com.uiseongcome.dto;

import com.uiseongcome.domain.Place;

public record PlaceDto(
        String latitude,
        String longitude,
        String name,
        String seq
) {
    public Place toEntity(){
        return Place.builder()
                .latitude(latitude)
                .longitude(longitude)
                .name(name)
                .seq(seq)
                .build();
    }

    public static PlaceDto of(Place place){
        return new PlaceDto(
                place.getLatitude(),
                place.getLongitude(),
                place.getName(),
                place.getSeq()
        );
    }
}
