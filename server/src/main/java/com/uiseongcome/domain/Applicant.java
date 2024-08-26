package com.uiseongcome.domain;


import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Applicant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_user_id")
    private User user;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_guide_info_id")
    private GuideInfo guideInfo;

    @Builder
    public Applicant(Long id, User user, GuideInfo guideInfo) {
        this.id = id;
        this.user = user;
        this.guideInfo = guideInfo;
    }
}
