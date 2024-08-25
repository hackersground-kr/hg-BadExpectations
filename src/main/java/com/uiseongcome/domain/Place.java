package com.uiseongcome.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Place {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long placeId;

    //위도
    private String latitude;

    //경도
    private String longitude;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_guide_info_id")
    private GuideInfo guideInfo;

    @Builder
    public Place(Long placeId, String latitude, String longitude, GuideInfo guideInfo) {
        this.placeId = placeId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.guideInfo = guideInfo;
    }
}
