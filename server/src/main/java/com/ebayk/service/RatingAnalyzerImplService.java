package com.ebayk.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ebayk.data.user.User;
import com.ebayk.data.user.UserNotFoundException;
import com.ebayk.data.user.UserRating;
import com.ebayk.data.user.UserRepository;

/**
 * Implementation class of RatingAnalyzer
 */
@Component
public class RatingAnalyzerImplService implements RatingAnalyzerService {

    @Autowired
    UserRepository userRepository;

    @Override
    public List<User> getRatedUserForRatingCreator(Integer userId) throws UserNotFoundException {
        List<User> ratedUsers = new ArrayList<>();
        List<User> users = userRepository.getUsers();

        if (userRepository.getUser(userId) == null) {
            throw new UserNotFoundException(userId);
        }

        for (User user : users) {
            List<UserRating> userRatings = user.getRatings();
            for (UserRating userRating : userRatings) {
                Integer creatorId = userRating.getRatingCreatorUserId();
                if (creatorId.equals(userId)) {
                    User ratedUser = userRepository.getUser(user.getId());
                    if (ratedUser != null) {
                        ratedUsers.add(ratedUser);
                    }
                }

            }
        }
        return ratedUsers;
    }
}
