package com.uiseongcome.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {
    @Id
    private String userId;

    private String pw;

    private String name;

    private String phoneNum;

    @Builder
    public User(String userId, String pw, String name, String phoneNum) {
        this.userId = userId;
        this.pw = pw;
        this.name = name;
        this.phoneNum = phoneNum;
    }
}
