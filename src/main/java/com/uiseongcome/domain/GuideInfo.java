package com.uiseongcome.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class GuideInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long guideInfoId;

    private String title;

    private LocalDate startAt;

    private LocalDate endAt;

    private Long limitPeople;

    private Long price;

    @Column(columnDefinition = "TEXT")
    private String description;

    private Boolean wifi;

    private Boolean tv;

    private Boolean kitchen;

    private Boolean washingMachine;

    private Boolean airConditioner;

    private Boolean parking;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_user_id")
    private User user;

    @Builder
    public GuideInfo(Long guideInfoId, String title, LocalDate startAt, LocalDate endAt, Long limitPeople, Long price, String description, Boolean wifi, Boolean tv, Boolean kitchen, Boolean washingMachine, Boolean airConditioner, Boolean parking, User user) {
        this.guideInfoId = guideInfoId;
        this.title = title;
        this.startAt = startAt;
        this.endAt = endAt;
        this.limitPeople = limitPeople;
        this.price = price;
        this.description = description;
        this.wifi = wifi;
        this.tv = tv;
        this.kitchen = kitchen;
        this.washingMachine = washingMachine;
        this.airConditioner = airConditioner;
        this.parking = parking;
        this.user = user;
    }
}
