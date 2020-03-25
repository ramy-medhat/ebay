package com.ebayk.service;

import java.util.List;

import com.ebayk.data.user.User;
import com.ebayk.data.user.UserNotFoundException;

public interface RatingAnalyzerService {
    /**
     * get all users rated by the supplied user id
     *
     * @param userId user id of the rater
     * @return list of users rated by the supplied user id
     * @throws UserNotFoundException
     */
    List<User> getRatedUserForRatingCreator(Integer userId) throws UserNotFoundException;
}
