package com.ebayk;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebayk.data.user.User;
import com.ebayk.data.user.UserNotFoundException;
import com.ebayk.service.RatingAnalyzerImplService;

@RestController
@RequestMapping("/users/{id}")
public class UserController {

    @Autowired
    private RatingAnalyzerImplService ratingAnalyserImplService;

    @RequestMapping("/rated-users")
    public List<User> listAd(@PathVariable("id") Integer userId) throws UserNotFoundException {
        return ratingAnalyserImplService.getRatedUserForRatingCreator(userId);
    }

}
