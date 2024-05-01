package com.yumme.backendyumme.dto.response;

import com.yumme.backendyumme.domain.Comment;
import com.yumme.backendyumme.domain.Score;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RecipeResponse {

    private String title;
    private String description;
    private String image;
    private Score score;
    private int userVote;
    private boolean isFavorite;
    private Comment comment;

}
