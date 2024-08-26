package com.uiseongcome.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fileId;

    private String path;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_guide_info_id")
    private GuideInfo guideInfo;

    @Builder
    public File(Long fileId, String path, GuideInfo guideInfo) {
        this.fileId = fileId;
        this.path = path;
        this.guideInfo = guideInfo;
    }
}
